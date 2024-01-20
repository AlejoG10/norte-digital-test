import Link from "next/link";
import {
  Copyright,
  FileText,
  Home,
  Mail,
  Map,
  Phone,
  Shield,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="bg-sky-500 text-white px-4 sm:px-10 py-8 mt-16 md:mt-20 h-fit">
      <div className="flex justify-center h-full">
        <div className="flex flex-col gap-y-8 w-full max-w-7xl">
          <h1 className="text-xl text-gray-light font-semibold">LoremIpsum</h1>

          <div className="flex flex-col md:flex-row md:justify-between gap-x-8 gap-y-8">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-4">
                <Mail size={20} />
                <p className="break-all">lorem@ipsum.com</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Phone size={20} />
                +00 123 456789
              </div>
              <div className="flex items-center gap-x-4">
                <Home size={20} />
                Street 1, Avenue 1.
              </div>
              <div className="flex items-center gap-x-4">
                <Map size={20} />
                LATAM.
              </div>
            </div>

            <Separator orientation="vertical" className="hidden md:inline" />
            <Separator className="md:hidden" />

            <div className="flex flex-col justify-end gap-y-4">
              <div className="flex items-center gap-x-4">
                <FileText size={20} />
                Terms & Conditions
              </div>

              <div className="flex items-center gap-x-4">
                <Shield size={20} />
                Data
              </div>

              <div className="flex items-center gap-x-4">
                <Copyright size={20} />
                {new Date().getFullYear()} - All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
