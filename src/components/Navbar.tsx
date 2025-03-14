import { SignedIn, UserButton } from "@clerk/nextjs";
import { LaptopIcon } from "lucide-react";
import Link from "next/link";
import DashboardBtn from "./DashboardBtn";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return(
     <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
         {/* LEFT SIDE -LOGO */}
         <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <LaptopIcon className="size-8 text-emerald-500" />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            face2hire
          </span>
        </Link>

         {/* RIGHT SIDE - ACTIONS */}
         <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>

      </div>
      
      </nav>
  );
}

export default Navbar;