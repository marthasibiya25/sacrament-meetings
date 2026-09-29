import { auth } from "@/auth"
import { redirect } from "next/navigation"
import SignOutButton from "@/app/components/SignOutButton"

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <section>
            <header>
                <p>Signed in as {session.user?.name}</p>
                <SignOutButton />
            </header>

            {children}
        </section>
    )
}