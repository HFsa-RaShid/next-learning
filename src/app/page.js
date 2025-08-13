import Heading from "@/Components/Heading";
import Image from "next/image";

export default function Home() {
  // console.log(name);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button>Hello</button>
      <Heading></Heading>
    </div>
  );
}
