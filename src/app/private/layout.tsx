import { Button } from "@/components/button";
import { authKey } from "@/config";
import { ArrowDownToLine, LogOut, Send } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  async function logout() {
    "use server";

    cookies().delete(authKey);
    redirect("/");
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="p-4 border border-slate-300 rounded-md shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-bold text-lg">Private Page</h1>
            <h3 className="text-sm">Make transactions or receive any value</h3>
          </div>
          <form action={logout}>
            <Button type="submit">
              <LogOut className="w-4 h-4" />
            </Button>
          </form>
        </div>

        <div className="mt-2 mb-6 h-[1px] w-full bg-slate-300" />

        <div className="grid grid-cols-2 gap-2">
          <Link href={"/private"}>
            <div className="pt-4 pb-3 rounded-md flex flex-col items-center justify-center border border-slate-300 hover:bg-slate-300">
              <Send strokeWidth={1.5} className="w-5 h-5" />
              <span className="text-sm">Send</span>
            </div>
          </Link>
          <Link href={"/private/receive"}>
            <div className="pt-4 pb-3 rounded-md flex flex-col items-center justify-center border border-slate-300 hover:bg-slate-300">
              <ArrowDownToLine className="w-5 h-5" />
              <span className="text-sm">Receive</span>
            </div>
          </Link>
        </div>

        <div className="my-4">{children}</div>
      </div>
    </main>
  );
}
