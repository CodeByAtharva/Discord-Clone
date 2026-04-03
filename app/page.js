import Image from "next/image";
import {Button} from "@/components/ui/button"

export default function Home() {
  return (
   <div className="">
    <h1 className="text-3xl text-indigo-600 font-bold ">Hello world!</h1>
    <Button variant="destructive">Click Me</Button>
   </div>
  );
}
