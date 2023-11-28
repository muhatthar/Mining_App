"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AssetHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex sticky gap-[14px] top-0 w-full h-[120px] items-center justify-between">
        <button
          className={`${
            pathname === "/asset-oil" ? "bg-[#F99417]" : " bg-white  hover:bg-gray-200"
          } w-full h-full rounded-[20px] p-4 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 ease-in-out`}
        >
          <Link href="/asset-oil">
            <div className="flex w-full h-full gap-10 justify-center items-center">
              <img src="/images/oil-img.svg" alt="" className="h-full" />
              <h1
                className={`${
                  pathname === "/asset-oil" ? "text-white" : "text-[#F99417]"
                } text-left font-bold text-[24px]`}
              >
                Aset <br /> Minyak
              </h1>
            </div>
          </Link>
        </button>
        <button
          className={`${
            pathname === "/stok-oil" ? "bg-[#F99417]" : " bg-white  hover:bg-gray-200"
          } w-full h-full rounded-[20px] p-4 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 ease-in-out`}
        >
          <Link href="/stok-oil">
            <div className="flex w-full h-full gap-10 justify-center items-center">
              <img src="/images/stok-img.svg" alt="" className="h-full" />
              <h1
                className={`${
                  pathname === "/stok-oil" ? "text-white" : "text-[#F99417]"
                } text-left font-bold text-[24px]`}
              >
                Stok <br /> Minyak
              </h1>
            </div>
          </Link>
        </button>
        <button
          className={`${
            pathname === "/distributed-oil" ? "bg-[#F99417]" : " bg-white  hover:bg-gray-200"
          } w-full h-full rounded-[20px] p-4 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 ease-in-out`}
        >
          <Link href="/distributed-oil">
            <div className="flex w-full h-full gap-10 justify-center items-center">
              <img src="/images/distributed-img.svg" alt="" className="h-full" />
              <h1
                className={`${
                  pathname === "/distributed-oil" ? "text-white" : "text-[#F99417]"
                } text-left font-bold text-[24px]`}
              >
                Perpindahan <br /> Minyak
              </h1>
            </div>
          </Link>
        </button>
      </div>
      <div className="w-full my-auto">{children}</div>
    </>
  );
}
