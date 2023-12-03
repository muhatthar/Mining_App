import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function StokOil() {
  return (
    <>
      <div className="flex flex-col px-[40px]">
        <div className="flex w-full justify-end">
          <button className="w-[140px] flex items-center gap-[9.25px] justify-center mb-4 rounded-xl py-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:border-[#F99417]">
            <p className="text-[#545F71] font-medium text-xl">Add List</p>
            <PlusCircleIcon className="w-[31.5px] h-[31.5px] text-[#F99417]"></PlusCircleIcon>
          </button>
        </div>
        <div className="w-full text-center table-auto border border-[#DDE1E6] rounded-lg">
          <table className="w-full">
            <thead className="bg-[#F2F4F8] h-12 border-b border-[#DDE1E6]">
              <tr>
                <th className="rounded-tl-lg">Jenis Minyak</th>
                <th>Jumlah (Liter)</th>
                <th>Tanggal Masuk</th>
                <th>Tanggal Keluar</th>
                <th>Lokasi Penyimpanan</th>
                <th className="rounded-tr-lg">Keterangan</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td>Tidak ada</td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td>Tidak ada</td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td>Tidak ada</td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td>Tidak ada</td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td>Tidak ada</td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td>Tidak ada</td>
              </tr>
              <tr className="h-12">
                <td className="rounded-bl-lg">Minyak Tanah</td>
                <td>15.8</td>
                <td>15/05/2022</td>
                <td>15/05/2023</td>
                <td>Gudang Lampung</td>
                <td className="rounded-br-lg">Tidak ada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
