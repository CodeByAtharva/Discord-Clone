import Image from "next/image";
import {Button} from "@/components/ui/button"

export default function Home() {
  return (
   <div className="h-screen bg-red-50 flex flex-col gap-5 items-center justify-center">
  <h1 className="text-3xl text-indigo-600">
    This is Protected route
  </h1>
  <Button variant="destructive">Click Me</Button>
</div>
  );
}
