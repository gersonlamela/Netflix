import SelectLanguage from "./select-language";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-left gap-[24px]  px-[168px]  bg-black border-t-[4px] border-gray-600 mt-[72px] h-[424px]">
      <h1 className="text-gray-500 text-left text-sm">
        Questions? Call 1-844-505-2993
      </h1>

      <div className="grid grid-flow-col grid-cols-4 gap-[16px]">
        <div className="text-gray-500 text-sm flex flex-col gap-[16px] underline">
          <span>FAQ</span>
          <span>Investor Relations</span>
          <span>Buy Gift Cards</span>
          <span>Cookie Preferences</span>
          <span>Legal Notices</span>
        </div>

        <div className="text-gray-500 text-sm flex flex-col gap-[16px] underline">
          <span>Help Center</span>
          <span>Jobs</span>
          <span>Ways to Watch</span>
          <span>Corporate Information</span>
          <span>Only on Netflix</span>
        </div>

        <div className="text-gray-500 text-sm flex flex-col gap-[16px] underline">
          <span>Account</span>
          <span>Netflix Shop</span>
          <span>Terms of Use</span>
          <span>Contact Us</span>
          <span>Do Not Sell or Share Personal Information</span>
        </div>

        <div className="text-gray-500 text-sm flex flex-col gap-[16px] underline">
          <span>Media Center</span>
          <span>Redeem Gift Cards</span>
          <span>Privacy</span>
          <span>Speed Test</span>
          <span>Ad Choices</span>
        </div>
      </div>

      <div className="max-w-[150px]">
        <SelectLanguage />
      </div>
    </div>
  );
}
