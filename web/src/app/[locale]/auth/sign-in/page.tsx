import Footer from "@/components/footer";
import Header from "@/components/header";
import SignInForm from "./Sign-in-form";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between">
      <Image
        src="/HeroImage.png"
        alt="Hero Image"
        layout="fill"
        className="absolute -z-20 object-cover"
      />
      <Header />
      <div className="flex">
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
}
