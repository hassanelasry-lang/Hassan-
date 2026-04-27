import Link from "next/link";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";
import { signOutAction } from "@/actions/signout-actions";

// هذا هو التصدير الذي يفتقده المتصفح
export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="font-bold text-xl">My App</Link>
      <AuthNav />
    </header>
  );
}

export async function AuthNav() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex gap-4 items-center">
      {session ? (
        <>
          <span className="text-sm">Welcome, {session.user.name}</span>
          <form action={signOutAction}>
            <button type="submit" className="text-sm text-red-600">Sign Out</button>
          </form>
        </>
      ) : (
        <div className="flex gap-2">
          <Link href="/signin" className="text-sm">Sign In</Link>
          <Link href="/signup" className="text-sm border p-1 px-3 rounded">Sign Up</Link>
        </div>
      )}
    </div>
  );
}