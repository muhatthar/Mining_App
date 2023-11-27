export default function MonitorTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex sticky top-0 w-full h-[160px] bg-white rounded-[20px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] py-[30px] pl-[23px] pr-[92px] items-center justify-between">
        <h1 className="text-center text-[#F99417] font-semibold text-[40px]">Form Kesehatan</h1>
        <img src="/images/monitoring-img.svg" alt="" className="h-full"/>
      </div>
      <div className="w-full">{children}</div>
    </>
  );
}
