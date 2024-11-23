import Image from "next/image";
import SelectLanguage from "./select-language";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("Header");

  const locale = useLocale();

  return (
    <div className="w-full h-[92px]  flex justify-between items-center px-[50px] lg:px-[168px] ">
      <Link href={`/${locale}`} className="w-[120px] lg:w-[148px]">
        <Image width={148} height={40} src="/logo.svg" alt="logo" />
      </Link>

      <div className="flex flex-row items-center justify-center ml-2 lg:ml-0 gap-2 lg:gap-6">
        <SelectLanguage />
        <Link href={`/${locale}/auth/sign-in`}>
          <Button className="bg-primary-red hover:bg-red-700 text-primary-white min-w-auto h-[32px] rounded-[4px]">
            {t("ButtonLogin")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
