import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    providers: [
        CredentialsProvider ({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const res = await fetch(process.env.API_URL+"/auth/login", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
});