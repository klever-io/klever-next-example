"use client";

import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
