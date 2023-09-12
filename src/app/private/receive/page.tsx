import { authKey } from "@/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CopyButton } from "./copy-button";

export default function Page() {
  const cookie = cookies().get(authKey);
  if (!cookie?.value) redirect("/");

  const address = cookie.value;

  function getTruncateAddress(size = 15) {
    const firstPart = address.slice(0, size);
    const lastPart = address.slice(-size);

    return `${firstPart}...${lastPart}`;
  }

  return (
    <div className="flex flex-col">
      <span className="text-sm text-slate-500">Your address:</span>
      <span className="font-bold">{getTruncateAddress()}</span>
      <CopyButton address={address} />
    </div>
  );
}
