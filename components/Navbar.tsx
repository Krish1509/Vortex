import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth' // Importing authentication functions from auth.js

// Defining the Navbar component as an async function (since auth is async)
const Navbar = async () => {
    const session = await auth() // Fetch the current authentication session

    return (
        <nav className="flex justify-between items-center px-5 py-3 shadow-sm bg-white font-work-sans">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={130} height={28} />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {/* If user is logged in (session exists) */}
                {session && session?.user ? (
                    <>
                        {/* Link to create a startup page */}
                        <Link href="/startup/create" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                            <span>Create</span>
                        </Link>

                        {/* Logout button */}
                        <form action={async () => {
                            "use server" // Required for server actions in Next.js 14+
                            await signOut({ redirectTo: "/" }) // Calls the signOut function and redirects to homepage
                        }}>
                            <button type="submit">
                                <span>Logout</span>
                            </button>
                        </form>

                        {/* Link to user's profile page, dynamically generated using user ID */}
                        <Link href={`/user/${session?.user?.id}`} className="text-sm font-medium text-gray-500 hover:text-gray-900">
                            <span>{session?.user?.name}</span> {/* Displays logged-in user's name */}
                        </Link>
                    </>
                ) : (
                    // If user is NOT logged in, show login buttons for GitHub and Google
                    <div className="flex gap-2">
                        {/* GitHub Login Button */}
                        <form action={async () => {
                            "use server"
                            await signIn("github") // Calls GitHub authentication
                        }}>
                            <button type="submit" className="flex items-center gap-2">
                                <span>GitHub Login</span>
                            </button>
                        </form>

                        {/* Google Login Button */}
                        <form action={async () => {
                            "use server"
                            await signIn("google") // Calls Google authentication
                        }}>
                            <button type="submit" className="flex items-center gap-2">
                                <span>Google Login</span>
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
