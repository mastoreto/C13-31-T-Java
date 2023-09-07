import NextAuth from 'next-auth/next';

import { DefaultSession, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import httpClient from '@libs/httpClient';
import { use } from 'react';

declare module 'next-auth' {
    export interface Session extends DefaultSession {
        token: string;
        user: {
            userName: string;
            lastName: string;
            roles: string[];
        } & DefaultSession['user'];
    }

    interface User {
        userName: string;
        lastName: string;
        roles: number[];
    }
}

export default NextAuth({
    debug: true,
    providers: [
        CredentialsProvider({
            name: 'CustomCredentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'pepe@gmail.com' },
                password: { label: 'Password', type: 'text' },
            },
            authorize: async (credentials) => {
                try {
                    const res = await httpClient.post('/auth/login', credentials);

                    const user = await res.data;

                    return res.status === 200 && user && Promise.resolve({ user });
                } catch (error) {
                    return Promise.resolve(null);
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {
            const data = user;

            if (user) {
                token.jwt = data.user.token;

                token.user = data.user.user;
            }

            return token;
        },
        async session({ session, token, user }) {
            return { ...session, token, user };
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
});
