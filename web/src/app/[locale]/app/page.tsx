import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WhoWatchingPage() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <div className="flex items-center justify-center flex-col  gap-[34px]">
        <h1 className="text-[50px]">Who’s watching?</h1>
        <div className="flex flex-wrap h-full items-center justify-center gap-[29px]">
          <div className="w-[144px] h-[144px] text-gray-400  flex flex-col items-center justify-center gap-[11px]">
            <Image
              src="/avatar/Name=angryman.png"
              alt=""
              width={144}
              height={144}
            />
            <span>James</span>
          </div>
          <div className="w-[144px] h-[144px] text-gray-400  flex flex-col items-center justify-center gap-[11px]">
            <Image
              src="/avatar/Name=chicken.png"
              alt=""
              width={144}
              height={144}
            />
            <span>Bill</span>
          </div>
          <div className="w-[144px] h-[144px] text-gray-400  flex flex-col items-center justify-center gap-[11px]">
            <Image
              src="/avatar/Name=kids.png"
              alt=""
              width={144}
              height={144}
            />
            <span>Alise</span>
          </div>
          <div className="w-[144px] h-[144px] text-gray-400  flex flex-col items-center justify-center gap-[11px]">
            <Image
              src="/avatar/Name=zombi.png"
              alt=""
              width={144}
              height={144}
            />
            <span>James</span>
          </div>
          <div className=" flex flex-col gap-[11px] text-gray-400  items-center justify-center">
            <div className="w-[144px] h-[144px] flex items-center justify-center">
              <Image src="/Icon/CirclePlus.png" alt="" width={78} height={78} />
            </div>
            <span>Add Profile</span>
          </div>
        </div>
      </div>
      <Button className="bg-transparent rounded  text-gray-400 w-[178px] h-[42px] mt-[67px] border border-gray-300 flex items-center justify-center">
        Manage Profile
      </Button>
    </div>
  );
}
