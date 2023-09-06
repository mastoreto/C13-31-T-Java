import NextAuth from 'next-auth/next';

import { DefaultSession, type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import httpClient from '@libs/httpClient';
import { use } from 'react';

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
        email: string;
        areas: number[];
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
                    const response = await httpClient.post('/auth/login', credentials);

                    const user = {
                        accessToken: response.data.token,
                        user: {
                            userName: response.data.user.userName,
                            userLastname: response.data.user.userLastname,
                            roles: response.data.user.roles,
                        },
                    };

                    if (user) {
                        return user;
                    } else {
                        return null;
                    }
                } catch (error) {
                    return null;
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
