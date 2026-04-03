import Image from "next/image";
import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div className="h-screen bg-red-50 flex flex-col gap-5 px-8 py-8">
  <UserButton
  afterSignOutUrl="/"
/>
</div>
  );
}
