"use client";

import { Button } from "@/components/button";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { address } = useAuth();
  if (!address || address.length === 0) {
    router.replace("/");
  }

  function getTruncateAddress(size = 15) {
    const firstPart = address.slice(0, size);
    const lastPart = address.slice(-size);

    return `${firstPart}...${lastPart}`;
  }

  function handleCopy() {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied to clipboard",
    });
  }

  return (
    <div className="flex flex-col">
      <span className="text-sm text-slate-500">Your address:</span>
      <span className="font-bold">{getTruncateAddress()}</span>
      <Button className="mt-2" onClick={handleCopy}>
        Copy
      </Button>
    </div>
  );
}
