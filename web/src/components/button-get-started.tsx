import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function ButtonGetStarted() {
  const t = useTranslations("GetStarted");
  async function handlerClickNewsletter() {
    toast.success("Your email has been added to the newsletter.", {
      style: {
        backgroundColor: "green",
        color: "white",
      },
    });
  }
  return (
    <div className="w-full mt-[15px] ">
      <form action={handlerClickNewsletter}>
        <div className="flex flex-row gap-[8px]  items-center justify-center ">
          <Input
            type="email"
            required
            placeholder={t("placeholder")}
            className="w-[358px] h-[56px] rounded bg-transparent text-gray-200 border border-gray-200"
          />
          <Button
            type="submit"
            className="bg-primary-red text-[24px] text-primary-white hover:bg-red-700 h-[56px] w-[208px] "
          >
            {t("ButtonStarted")}
            <ChevronRight className="w-[15px] h-[8px]" />
          </Button>
        </div>
      </form>
    </div>
  );
}
