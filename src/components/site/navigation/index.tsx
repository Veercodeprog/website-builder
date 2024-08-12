import React from "react";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="logo" width={50} height={50} />

        <span className="text-xl font-bold">Builder</span>
      </aside>
    </div>
  );
};

export default Navigation;
