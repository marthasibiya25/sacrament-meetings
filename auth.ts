import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if (
                    credentials?.username === "bishop" &&
                    credentials?.password === "planner123"
                ) {
                    return {
                        id: "1",
                        name: "Bishopric Planner",
                    }
                }

                return null
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
})