import Link from "next/link";

export default function MonitoringProfile() {
  return (
    <>
      <div className="flex flex-row py-[42px] px-8 mx-[92px] bg-white rounded-2xl shadow-[8px_8px_14px_rgba(0,0,0,0.25)] items-center">
        <form className="flex-1 space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="idPegawai"
              className="block font-medium text-base text-[#323238]"
            >
              ID Pegawai
            </label>
            <input
              type="text"
              name="idPegawai"
              id="idPegawai"
              placeholder="ID pegawai..."
              className="bg-white border rounded-lg w-full h-14 px-4 py-2 font-normal text-base"
              required
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="lokasiPekerjaan"
              className="block font-medium text-base text-[#323238]"
            >
              Lokasi Pekerjaan
            </label>
            <input
              type="text"
              name="lokasiPekerjaan"
              id="lokasiPekerjaan"
              placeholder="Lokasi pekerjaan..."
              className="bg-white border rounded-lg w-full h-14 px-4 py-2 font-normal text-base"
              required
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="kontakDarurat"
              className="block font-medium text-base text-[#323238]"
            >
              Kontak Darurat
            </label>
            <input
              type="text"
              name="kontakDarurat"
              id="kontakDarurat"
              placeholder="6285827937612"
              className="bg-white border rounded-lg w-full h-14 px-4 py-2 font-normal text-base"
              required
            />
          </div>
          <Link href="/monitoring-form">
            <button className="w-full bg-[#363062] mt-4 border border-transparent h-14 rounded-lg text-white font-bold text-4 transition-all duration-200 ease-in-out hover:border hover:border-[#363062] hover:bg-transparent hover:text-[#363062]">
              CONTINUE
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
