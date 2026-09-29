import { signIn } from "@/auth"

export default function LoginPage() {
    return (
        <main>
            <h1>Bishopric Login</h1>

            <form
                action={async (formData) => {
                    "use server"

                    await signIn("credentials", {
                        username: formData.get("username"),
                        password: formData.get("password"),
                        redirectTo: "/meetings",
                    })
                }}
            >
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                    />
                </div>

                <button type="submit">Sign In</button>
            </form>
        </main>
    )
}