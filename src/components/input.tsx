import { ComponentProps, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  function Input({ className, ...rest }, ref) {
    return (
      <input
        className="px-2.5 h-8 border border-slate-300 rounded-md text-sm invalid:border-red-500"
        ref={ref}
        {...rest}
      />
    );
  }
);
