"use client";

import Link from "next/link";
import { 
  FaTwitter, 
  FaDiscord, 
  FaLinkedin, 
  FaMastodon 
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.1] px-8 py-20 bg-black w-full overflow-hidden mx-auto max-w-7xl">
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-56">
          <div className="w-full flex-none bg-gradient-to-r from-transparent via-white to-transparent blur-xs" />
        </div>
      </div>

      <div className="max-w-7xl my-28 mx-auto text-sm text-neutral-400 flex flex-col justify-between md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <Link
              href="/"
              className="font-normal flex gap-2 items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
            >
              <div className="w-8 h-8 bg-black border-neutral-400 rounded-full inline-flex items-center justify-center border border-solid shadow-[inset_0px_6px_8px_0px_#FAFAFA40,inset_0px_-6px_8px_0px_#FAFAFA40] text-white" />
              <span className="font-medium text-white">CryptGen</span>
            </Link>
            <div className="flex gap-3 mt-6">
              {[FaTwitter, FaDiscord, FaLinkedin, FaMastodon].map((Icon, idx) => (
                <Link
                  href="#"
                  key={idx}
                  className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-neutral-700/20 transition-all border border-neutral-700/50 shadow-[2px_-2px_15px_rgba(0,0,0,0.2)] hover:shadow-[4px_-4px_20px_rgba(0,0,0,0.3)] relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-full"
                >
                  <Icon className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Documentation</p>
              <ul className="space-y-3">
                <li><Link className="hover:text-white transition-colors" href="#">Getting Started</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">API Reference</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Integrations</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Examples</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">SDKs</Link></li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Resources</p>
              <ul className="space-y-3">
                <li><Link className="hover:text-white transition-colors" href="#">Changelog</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Pricing</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Status</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Webhooks</Link></li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Company</p>
              <ul className="space-y-3">
                <li><Link className="hover:text-white transition-colors" href="#">Blog</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Contact</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Customers</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Brand</Link></li>
              </ul>
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-white font-semibold">Legal</p>
              <ul className="space-y-3">
                <li><Link className="hover:text-white transition-colors" href="#">Acceptable Use</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link></li>
                <li><Link className="hover:text-white transition-colors" href="#">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
