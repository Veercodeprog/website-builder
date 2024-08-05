import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
export default function Home() {
  return (
    <section className="h-full w-full pt-36 relative flex items-center justify-center flex-col ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <p className="text-center">your agency in one place </p>
      <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
        <h1 className="text-9xl font-bold text-center md:text-[300px]">
          builder{" "}
        </h1>
      </div>
    </section>
  );
}
