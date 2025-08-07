import Image from "next/image";
import ResizableNavbar from "../components/ui/ResizableNavbar";
import globals from "./globals.css";
import GlowingCard from "@/components/ui/GlowingCard";
import TrustedBySection from "@/components/ui/TrustedByContent";


export default function Home() {
  return (
    <>
      
      <ResizableNavbar />
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 md:px-8 md:pt-40 bg-black">
        <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-4xl font-bold tracking-tight text-neutral-300 md:text-7xl">
          <span
    data-br=":r0:"
    data-brr="1"
    style={{
      display: "inline-block",
      verticalAlign: "top",
      textDecoration: "inherit",
      textWrap: "balance",
      maxWidth: "628px",
    }}
  >
  <h2
    className="text-5xl font-bold whitespace-nowrap bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent"
    style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
  >
    Your All-in-One Crypto Companion
  </h2>
  </span>
</div>
<p
  className="relative z-20 mx-auto mt-4 max-w-xl px-4 text-center text-base/6 text-gray-500 sm:text-base"
  style={{ opacity: 1, transform: "none" }}
>
  Simplify crypto investing, trading, and portfolio management with cutting-edge tools designed for everyone—from beginners to pros.
</p>
<div className="mb-8 mt-6 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20">
  <a
    href="/login"
    className="px-4 py-2 text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 border-[0.6px] border-solid 
      [border-image-source:linear-gradient(180deg,#1F1F1F_0%,#858585_100%),linear-gradient(180deg,#1F1F1F_0%,#858585_100%)] 
      [background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,rgba(21,21,21,0)_66.3%,rgba(255,255,255,0.5)_100%),linear-gradient(183.22deg,rgba(255,255,255,0.5)_2.62%,rgba(21,21,21,0)_52.03%)] 
      shadow-[inset_0px_6px_8px_0px_#FAFAFA40,inset_0px_-6px_8px_0px_#FAFAFA40,0px_0px_0px_0px_#FAFAFA40,0px_0px_0px_0px_#FAFAFA40] 
      text-white w-full sm:w-40 h-12 rounded-full flex items-center justify-center"
  >
    Get Started
  </a>
</div>

<GlowingCard />
  </div>
  <TrustedBySection />
    
     
    </>
  );
}
