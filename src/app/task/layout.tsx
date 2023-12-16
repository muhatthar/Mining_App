export default function TaskTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex sticky top-0 w-full h-[160px] bg-white rounded-[20px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] py-[30px] pl-[68px] pr-[92px] items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-center text-[#F99417] font-semibold text-[40px]">
            Task
          </h1>
          <p>Check your daily tasks and schedules</p>
        </div>
        <img src="/images/task-img.svg" alt="" className="h-full" />
      </div>
      <div className="w-full my-auto">{children}</div>
    </>
  );
}
