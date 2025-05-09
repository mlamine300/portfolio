"use client";

import { AlignJustify } from "lucide-react";
import Nav, { NavProps } from "./Nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import SocialMediaBar from "./SocialMediaBar";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ToggleDarkMode from "./ToggleDarkMode";
const MobileNav = ({ links }: NavProps) => {
  const path = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.click();
  }, [path]);
  return (
    <Sheet>
      <SheetClose ref={closeRef} className="hidden" />
      <SheetDescription className="hidden" />
      <ToggleDarkMode />
      <SheetTrigger asChild>
        <AlignJustify className="text-foreground h-6 w-6 cursor-pointer" />
      </SheetTrigger>
      <SheetTitle className="hidden" />
      <SheetContent className="  flex flex-col py-8 items-center gap-4">
        <Link href={"/"} className="">
          <Image alt="logo" src={"/logo.png"} width={80} height={80} />
        </Link>

        <Nav
          links={links}
          parentClassName=" flex flex-col mt-8 items-center justify-center gap-6 font-[400] text-text_primary text-lg"
          elementsClassName="text-2xl font-semibold tracing-widest"
        />
        <SocialMediaBar className="mb-2 mt-auto" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
