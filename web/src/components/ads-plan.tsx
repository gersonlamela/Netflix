import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AdsPlan() {
  const t = useTranslations("AdsPlan");
  return (
    <div className="w-full relative h-[200px] flex flex-col justify-between  items-center gap-[10px]">
      <div className="absolute bg-custom-radial w-full h-[full] inset-0" />
      <div className="relative w-full h-full  flex items-center justify-center">
        <Image
          src="/popcorn.png"
          alt="bg"
          width={96}
          height={96}
          objectFit="contain"
          quality={100}
        />
        <div>
          <p className="text-primary-white text-[25px] font-bold">
            {t("Title")}
          </p>
          <p className="text-primary-white text-[16px] font-normal">
            {t("SubTitle")}
          </p>
          <a
            href="#"
            className="text-blue-400 underline flex items-center justify-start font-medium text-[18px]"
          >
            {t("Button")} <ChevronRight size={30} className="ml-[4px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
