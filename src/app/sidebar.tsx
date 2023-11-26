"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();
  const route = useRouter();

  return (
    <nav className="sticky flex flex-col pt-[57px] px-4 space-y-80 left-0 z-10 h-screen w-[292px] bg-white border-x border-[#DDE1E6]">
      <div id="top-part-navbar">
        <ul>
          <li>
            <button className="flex flex-row justify-center items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <img src="/images/aset-ic.svg" alt="" />
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Aset Mining
              </h4>
              <img src="/images/next-ic.svg" alt="" />
            </button>
          </li>
          <li>
            <button className="flex flex-row justify-center items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <img src="/images/task-ic.svg" alt="" />
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Task
              </h4>
              <img src="/images/next-ic.svg" alt="" />
            </button>
          </li>
          <li>
            <Link href="/monitoring/monitoring-profile">
              <button
                className={`${
                  pathname === "/monitoring/monitoring-profile" ? "bg-[#363062] text-white" : "bg-white"
                } flex flex-row justify-center items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200`}
              >
                <img src="/images/monitoring-ic.svg" alt="" />
                <h4 className={`${pathname === "/monitoring/monitoring-profile" ? "text-white" : " text-[#545F71]"} flex-1 text-start pl-6 font-normal text-base`}>
                  Monitoring
                </h4>
                <img src="/images/next-ic.svg" alt="" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div id="bottom-part-navbar" className="border-t border-black pt-[9px]">
        <ul>
          <li>
            <button className="flex flex-row justify-center items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <img src="/images/settings-ic.svg" alt="" />
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Setting
              </h4>
              <img src="/images/next-ic.svg" alt="" />
            </button>
          </li>
          <li>
            <button className="flex flex-row justify-center items-center justify-between rounded-lg px-4 w-full h-[52px] transition duration-200 ease-in-out hover:bg-gray-200">
              <img src="/images/logout-ic.svg" alt="" />
              <h4 className="flex-1 text-start pl-6 font-normal text-[#545F71] text-base">
                Sign Out
              </h4>
              <img src="/images/next-ic.svg" alt="" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
