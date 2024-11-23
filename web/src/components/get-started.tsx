import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { useLocale, useTranslations } from "next-intl";

import { z } from "zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

const emailSchema = z.object({
  email: z.string().email("Invalid email format"),
});

export default function GetStarted() {
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const t = useTranslations("GetStarted");

  const locale = useLocale();

  async function handlerSubmit(values: z.infer<typeof emailSchema>) {
    redirect(`./${locale}/auth/sign-up/${values.email}`);
  }

  return (
    <div className="w-full mt-[15px] px-[50px] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handlerSubmit)}>
          <div className="flex flex-row gap-[8px]  items-center justify-center ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("placeholder")}
                      className="w-[358px] mt-0 h-[56px] rounded bg-transparent text-gray-200 border border-gray-200"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              )}
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
      </Form>
    </div>
  );
}
