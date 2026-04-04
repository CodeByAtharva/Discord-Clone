import Image from "next/image";
import {Button} from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { Inika } from "next/font/google";
import {InitialModal} from "@/components/modal/initial-modal";

export default function Home() {
  return (
   <div className="h-screen bg-red-50 flex flex-col gap-5 px-8 py-8 bg-red-50">
  <UserButton
  afterSignOutUrl="/"
/>
   <InitialModal />
</div>
  );
}
