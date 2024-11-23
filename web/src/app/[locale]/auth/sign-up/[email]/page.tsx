import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import SignUpForm from "./Sign-up-form";

export default function SignUp() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between">
      <Image
        src="/HeroImage.png"
        alt="Hero Image"
        layout="fill"
        className="absolute -z-20 object-cover"
      />
      <Header />
      <div className="flex flex-1 w-full px-[50px] lg:px-[168px]">
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}
