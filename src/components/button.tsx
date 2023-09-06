import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      data-loading={loading}
      className="mt-4 flex items-center justify-center w-full px-1.5 h-8 bg-slate-700 rounded-md text-white text-sm hover:bg-slate-600 disabled:bg-slate-400 disabled:cursor-not-allowed"
      {...rest}
    >
      {children}
    </button>
  );
}
