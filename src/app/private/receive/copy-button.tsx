"use client";

import { Button } from "@/components/button";
import { toast } from "@/components/ui/use-toast";
import { ComponentProps } from "react";

interface CopyButtonProps extends ComponentProps<"button"> {
  address: string;
}

export function CopyButton({ address, ...rest }: CopyButtonProps) {
  function handleCopy() {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied to clipboard",
    });
  }

  return (
    <Button className="mt-2" onClick={handleCopy} {...rest}>
      Copy
    </Button>
  );
}
