import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function SignInForm() {
  return (
    <div className="w-[450px] h-auto px-[68px] py-[48px] bg-primary-black bg-opacity-60 flex flex-col items-start justify-between gap-7">
      <div className="">
        <h1 className="text-primary-white text-[32px] font-medium">Sign In</h1>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-[16px]">
        <Input
          type="email"
          className="h-[56px] bg-black text-primary-white border border-gray-200 rounded"
          placeholder="Email or phone number"
        />
        <Input
          type="password"
          className="h-[56px] bg-black text-primary-white border border-gray-200 rounded"
          placeholder="Password"
        />
        <Button className="w-full rounded hover:bg-red-700 bg-primary-red text-primary-white h-[40px]">
          Sign In
        </Button>

        <span className="text-primary-white opacity-70">OR</span>

        <Button className="w-full rounded hover:bg-opacity-40 hover:bg-primary-white  bg-primary-white bg-opacity-20 text-primary-white h-[40px]">
          Use a Sign-In Code
        </Button>

        <span className="text-primary-white cursor-pointer">
          Forgot Password?
        </span>
      </div>

      <div className="flex flex-col items-start gap-[17px] ">
        <div className="flex items-center">
          <Checkbox
            id="terms"
            className="w-[18px] h-[18px] mr-[12px] border-primary-white rounded-[2px]"
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>

        <div className="flex flex-col items-start gap-[12px]">
          <p className="">
            <span className="opacity-70">New to Netflix?</span> Sign up now.
          </p>
          <p className="text-[13px]">
            <span className="opacity-70">
              This page is protected by Google reCAPTCHA to ensure you’re not a
              bot.{" "}
            </span>
            <span className="text-blue-600">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
