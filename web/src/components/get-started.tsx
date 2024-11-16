import { useTranslations } from "next-intl";

export default function GetStarted() {
  const t = useTranslations("GetStarted");

  return (
    <div className="fle flex-col gap-[16px]">
      <p className="text-primary-white text-5xl font-bold text-center max-w-[854px]">
        {t("Title")}
      </p>
      <p className="text-primary-white text-[24px] font-normal text-center ">
        {t("SubTitle")}
      </p>

      <div className="mt-[8px]">
        <p className="text-primary-white text-[24px] font-light text-center ">
          {t("p")}
        </p>
      </div>
    </div>
  );
}
