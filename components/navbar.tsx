import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { ArrowUpRight, Menu, Wheat, X } from "lucide-react";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-background h-16 border-b px-6">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
          <Image src="/images/bomi-logo.png" alt="Company Logo" width={100} height={50} />
          </Link>
        </div>

        {/* Desktop navigation menu */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        <div className="flex items-center gap-4">
          

          {/* Mobile navigation menu */}
          <Popover>
            <PopoverTrigger className="group md:hidden">
              <Menu className="group-data-[state=open]:hidden" />
              <X className="hidden group-data-[state=open]:block" />
            </PopoverTrigger>
            <PopoverContent
              sideOffset={20}
              className="bg-background h-[calc(100svh-4rem)] w-screen !animate-none rounded-none border-none"
            >
              <NavMenu orientation="vertical" />
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
