import Image from "next/image";
import SelectLanguage from "./select-language";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <div className="w-full h-[92px] flex justify-between items-center">
      <Image width={148} height={40} src="/logo.svg" alt="logo" />

      <div className="flex flex-row items-center justify-center gap-6">
        <SelectLanguage />
        <Button className="bg-primary-red hover:bg-red-700 text-primary-white min-w-auto h-[32px] rounded-[4px]">
          {t("ButtonLogin")}
        </Button>
      </div>
    </div>
  );
}
