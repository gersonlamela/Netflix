"use client";

import AdsPlan from "@/components/ads-plan";
import ButtonGetStarted from "@/components/button-get-started";
import { Faq } from "@/components/faq";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center flex-col ">
        <Image
          src="/bg.png"
          alt="bg"
          layout="fill"
          className="relative w-full max-w-[120rem] !h-auto -z-10 inset-0"
          objectFit="contain"
          quality={100}
        />

        <div className="h-screen flex flex-col w-full items-center justify-between">
          <div className="w-full px-[168px]">
            <Header />
          </div>

          <GetStarted />

          <AdsPlan />
        </div>

        <div className="h-[558px] flex flex-row items-center justify-center gap-[12px] w-full px-[168px] bg-black">
          <div className="max-w-[546px] flex h-full items-start justify-center flex-col">
            <h1 className="text-[48px] font-bold text-primary-white">
              Enjoy on your TV
            </h1>
            <p className="text-[24px] text-primary-white font-normal">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          <div>
            <Image
              src="/ScreensPreview.png"
              alt="bg"
              width={546}
              height={410}
              quality={100}
            />
          </div>
        </div>

        <div className="h-[558px] flex flex-row items-center justify-center gap-[12px] w-full px-[168px] bg-black border-y-[4px] border-gray-600 ">
          <div>
            <Image
              src="/ScreensPreview2.png"
              alt="bg"
              width={546}
              height={410}
              quality={100}
            />
          </div>
          <div className="max-w-[546px] flex h-full items-start justify-center flex-col">
            <h1 className="text-[48px] font-bold text-primary-white">
              Watch everywhere
            </h1>
            <p className="text-[24px] text-primary-white font-normal">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>

        <div className="h-[558px] flex flex-row items-center justify-center gap-[12px] w-full px-[168px] bg-black">
          <div className="max-w-[546px] flex h-full items-start justify-center flex-col">
            <h1 className="text-[48px] font-bold text-primary-white">
              Create profiles for kids
            </h1>
            <p className="text-[24px] text-primary-white font-normal">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>

          <div>
            <Image
              src="/ScreensPreview3.png"
              alt="bg"
              width={546}
              height={410}
              quality={100}
            />
          </div>
        </div>

        <div className="h-[558px] flex flex-row items-center justify-center gap-[12px] w-full px-[168px] bg-black border-y-[4px] border-gray-600 ">
          <div>
            <Image
              src="/ScreensPreview4.png"
              alt="bg"
              width={546}
              height={410}
              quality={100}
            />
          </div>
          <div className="max-w-[546px] flex h-full items-start justify-center flex-col">
            <h1 className="text-[48px] font-bold text-primary-white">
              Download your shows to watch offline
            </h1>
            <p className="text-[24px] text-primary-white font-normal">
              Watch on a plane, train, or submarine...
            </p>
          </div>
        </div>

        <Faq />

        <div className="bg-black w-full mt-[48px] text-white text-center">
          <h1>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>

          <ButtonGetStarted />
        </div>

        <Footer />
      </div>
    </>
  );
}
