import NextAuth from 'next-auth/next';

import { DefaultSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import httpClient from '@libs/httpClient';

declare module 'next-auth' {
    export interface Session extends DefaultSession {
        token: string;
        user: {
            userName: string;
            userLastname: string;
            email: string;
            roles?: number[];
            areas?: number[];
        } & DefaultSession['user'];
    }

    interface User {
        userName: string;
        userLastname: string;
        birthDate: string;
        email: number;
        areas: number[];
        roles: number[];
    }
}

export default NextAuth({
    debug: true,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'pepe@gmail.com' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                try {
                    const response = await httpClient.post('/auth/login', credentials);

                    if (response.status === 200) {
                        const token = response.data.token;
                        return token;
                    }
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
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    ...token,
                };
            }

            return token;
        },
        async session({ session, token }) {
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
});
