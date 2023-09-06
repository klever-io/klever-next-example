import { Button } from "@/components/button";
import { authKey } from "@/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  async function logout() {
    "use server";

    cookies().delete(authKey);
    redirect("/");
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <form
        action={logout}
        className="w-72 p-4 border border-slate-300 rounded-md shadow-sm"
      >
        <div>
          <h1 className="font-bold text-lg">Private Page</h1>
          <h3 className="text-sm">Sign out of page</h3>
        </div>
        <div className="mt-2 mb-6 h-[1px] w-full bg-slate-300" />

        <Button type="submit">Log out</Button>
      </form>
    </main>
  );
}
