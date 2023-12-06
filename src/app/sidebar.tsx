"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import RectangleStackIcon from "@heroicons/react/24/outline/RectangleStackIcon";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import ArrowLeftOnRectangleIcon from "@heroicons/react/20/solid/ArrowLeftOnRectangleIcon";

export default function SideBar() {
  const pathname = usePathname();
  const route = useRouter();

  return (
    <nav className="sticky flex flex-col pt-[57px] px-4 space-y-60 shadow-[4px_4px_15px_rgba(0,0,0,0.25)] left-0 top-0 z-10 h-screen w-[292px] bg-white border-x border-[#DDE1E6]">
      <div id="top-part-navbar">
        <div className="flex justify-center items-center gap-[18px] mb-[72px]">
          <img src="/images/logo.svg" alt="" className="w-[60px] h-[60px]" />
          <h1 className="font-bold text-[32px] text-[#363062]">Mining.io</h1>
        </div>
        <ul>
          <li>
            <button className="flex flex-row items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <GlobeAltIcon className="h-6 w-6 text-[#545F71]"></GlobeAltIcon>
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Aset Mining
              </h4>
              <ChevronRightIcon className="h-6 w-6 text-[#545F71]"></ChevronRightIcon>
            </button>
          </li>
          <li>
            <button className="flex flex-row items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <RectangleStackIcon className="h-6 w-6 text-[#545F71]"></RectangleStackIcon>
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Task
              </h4>
              <ChevronRightIcon className="h-6 w-6 text-[#545F71]"></ChevronRightIcon>
            </button>
          </li>
          <li>
            <Link href="/monitoring-profile">
              <button
                className={`${
                  pathname === "/monitoring-profile" || pathname === '/monitoring-form'
                    ? "bg-[#363062] text-white"
                    : "bg-white hover:bg-gray-200"
                } flex flex-row items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out`}
              >
                <ChartBarSquareIcon
                  className={`${
                    pathname === "/monitoring-profile" || pathname === '/monitoring-form'
                      ? "text-white"
                      : "text-[#545F71]"
                  } h-6 w-6`}
                ></ChartBarSquareIcon>
                <h4
                  className={`${
                    pathname === "/monitoring-profile" || pathname === '/monitoring-form'
                      ? "text-white"
                      : " text-[#545F71]"
                  } flex-1 text-start pl-6 font-normal text-base`}
                >
                  Monitoring
                </h4>
                <ChevronRightIcon
                  className={`${
                    pathname === "/monitoring-profile" || pathname === '/monitoring-form'
                      ? "text-white"
                      : "text-[#545F71]"
                  } h-6 w-6`}
                ></ChevronRightIcon>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div id="bottom-part-navbar" className="border-t border-[#363062] pt-[9px]">
        <ul>
          <li>
            <button className="flex flex-row items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <Cog6ToothIcon className="h-6 w-6 text-[#545F71]"></Cog6ToothIcon>
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Setting
              </h4>
              <ChevronRightIcon className="h-6 w-6 text-[#545F71]"></ChevronRightIcon>
            </button>
          </li>
          <li>
            <button className="flex flex-row items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <ArrowLeftOnRectangleIcon className="h-6 w-6 text-[#545F71]"></ArrowLeftOnRectangleIcon>
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Sign Out
              </h4>
              <ChevronRightIcon className="h-6 w-6 text-[#545F71]"></ChevronRightIcon>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
