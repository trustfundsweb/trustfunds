"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useUserContext } from "@/context/UserContext";

const LandingPage = () => {
  const { signedIn } = useUserContext();
  const link = signedIn.status ? "/user/campaigns" : "/auth/login";
  return (
    <div className="flex h-screen flex-col pt-[60px]">
      <div className="h-[20px] lg:h-[100px]"></div>
      <div className="ml-auto mr-auto flex-1 lg:mr-0">
        <Image alt="Trustfunds" src="/TF.webp" width={271} height={178} />
      </div>
      <div className="flex-1">
        <div className="flex flex-col text-3xl font-[700] leading-none lg:text-4xl">
          <span>Trustfunds is a</span>
          <span>blockchain powered</span>
          <span>crowdfunding platform</span>
        </div>
        <div className="lg:text-md my-1 mb-4 leading-tight lg:w-1/2">
          We aim to revolutionize fundraising by providing a transparent,
          secure, and efficient ecosystem for campaign creators and backers.
        </div>

        <Link href={link}>
          <Button className="welcome-button rounded-3xl px-8 py-4 text-xl text-white duration-150 ease-in-out">
            Start Today!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
