"use client";

import { Button } from "@/components/button";
import { useToast } from "@/components/ui/use-toast";
import { authKey, signMessage } from "@/config";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      if (typeof window === "undefined" || !window.kleverWeb) {
        throw Error("Klever Extension not found");
      }

      await window.kleverWeb.initialize();
      const address = window.kleverWeb.getWalletAddress();
      if (!address) {
        throw Error("Cannot retrieve wallet address");
      }

      const message = await window.kleverWeb.signMessage(signMessage);
      const result = await window.kleverWeb.validateSignature(
        signMessage,
        message,
        address
      );

      if (!result) {
        throw Error("Invalid signature");
      }

      setCookie(authKey, address);

      router.push("/private");
    } catch (error) {
      toast({
        variant: "destructive",
        title: String(error),
      });
    }

    setLoading(false);
  }

  return (
    <main
      onSubmit={onSubmit}
      className="w-screen h-screen flex items-center justify-center"
    >
      <form className="max-w-xs p-4 border border-slate-300 rounded-md shadow-sm">
        <div>
          <h1 className="font-bold text-lg">Klever Extension Playground</h1>
          <h3 className="text-sm">Sign in with extension</h3>
        </div>
        <div className="mt-2 mb-6 h-[1px] w-full bg-slate-300" />

        <Button disabled={loading} type="submit">
          Sign in
        </Button>
      </form>
    </main>
  );
}
