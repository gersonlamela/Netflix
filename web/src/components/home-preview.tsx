import { useTranslations } from "next-intl";
import GetStarted from "./get-started";

export default function HomePreview() {
  const t = useTranslations("GetStarted");

  return (
    <div className="flex flex-col gap-[16px] px-[50px] lg:px-0">
      <p className="text-primary-white text-3xl lgtext-5xl font-bold text-center max-w-[854px]">
        {t("Title")}
      </p>
      <p className="text-primary-white text-[18px] lg:text-[24px] font-normal text-center ">
        {t("SubTitle")}
      </p>

      <div className="mt-[8px]">
        <p className="text-primary-white text-[18px] lg:text-[24px] font-light text-center ">
          {t("p")}
        </p>
      </div>

      <GetStarted />
    </div>
  );
}
