export default function MonitoringForm() {
  return (
    <>
      <div className="flex flex-row py-[42px] px-8 mx-[92px] mt-14 bg-white rounded-2xl shadow-[8px_8px_14px_rgba(0,0,0,0.25)] items-center">
        <form className="flex-1 space-y-6">
          <div className="space-y-1">
            <label className="block font-medium text-base text-[#323238]">
              Apakah Anda mempunyai riwayat penyakit jantung?
            </label>
            <div>
              <input
                type="radio"
                name="riwayatJantung"
                id="riwayatJantung-true"
                value="true"
                className="mr-2"
              />
              <label
                htmlFor="riwayatJantung-true"
                className="font-normal text-base text-[#323238]"
              >
                Iya
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="riwayatJantung"
                id="riwayatJantung-false"
                value="false"
                className="mr-2"
              />
              <label
                htmlFor="riwayatJantung-false"
                className="font-normal text-base text-[#323238]"
              >
                Tidak
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="gejalaJantung"
              className="block font-medium text-base text-[#323238]"
            >
              Jelaskan gejala penyakit jantung Anda!
            </label>
            <input
              type="text"
              name="gejalaJantung"
              id="gejalaJantung"
              placeholder="Gejala penyakit jantung..."
              className="bg-white border rounded-lg w-full h-14 px-4 py-2 font-normal text-base"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-base text-[#323238]">
              Apakah Anda mengalami penurunan kinerja fisik?
            </label>
            <div>
              <input
                type="radio"
                name="kinerjaFisikTurun"
                id="kinerjaFisikTurun-true"
                value="true"
                className="mr-2"
              />
              <label
                htmlFor="kinerjaFisikTurun-true"
                className="font-normal text-base text-[#323238]"
              >
                Iya
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="kinerjaFisikTurun"
                id="kinerjaFisikTurun-false"
                value="false"
                className="mr-2"
              />
              <label
                htmlFor="kinerjaFisikTurun-false"
                className="font-normal text-base text-[#323238]"
              >
                Tidak
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-base text-[#323238]">
              Apakah Anda memiliki gangguan pendengaran?
            </label>
            <div>
              <input
                type="radio"
                name="gangguanPendengaran"
                id="gangguanPendengaran-true"
                value="true"
                className="mr-2"
              />
              <label
                htmlFor="gangguanPendengaran-true"
                className="font-normal text-base text-[#323238]"
              >
                Iya
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="gangguanPendengaran"
                id="gangguanPendengaran-false"
                value="false"
                className="mr-2"
              />
              <label
                htmlFor="gangguanPendengaran-false"
                className="font-normal text-base text-[#323238]"
              >
                Tidak
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="gejalaPendengaran"
              className="block font-medium text-base text-[#323238]"
            >
              Jelaskan gejala gangguan pendengaran Anda!
            </label>
            <input
              type="text"
              name="gejalaPendengaran"
              id="gejalaPendengaran"
              placeholder="Gejala gangguan pendengaran..."
              className="bg-white border rounded-lg w-full h-14 px-4 py-2 font-normal text-base"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-base text-[#323238]">
              Apakah Anda menggunakan pelindung pendengaran?
            </label>
            <div>
              <input
                type="radio"
                name="pelindungPendengaran"
                id="pelindungPendengaran-true"
                value="true"
                className="mr-2"
              />
              <label
                htmlFor="pelindungPendengaran-true"
                className="font-normal text-base text-[#323238]"
              >
                Iya
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="pelindungPendengaran"
                id="pelindungPendengaran-false"
                value="false"
                className="mr-2"
              />
              <label
                htmlFor="pelindungPendengaran-false"
                className="font-normal text-base text-[#323238]"
              >
                Tidak
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <label className="block font-medium text-base text-[#323238]">
              Apakah Anda mengalami kecelakaan keamanan?
            </label>
            <div>
              <input
                type="radio"
                name="kecelakaanKeamanan"
                id="kecelakaanKeamanan-true"
                value="true"
                className="mr-2"
              />
              <label
                htmlFor="kecelakaanKeamanan-true"
                className="font-normal text-base text-[#323238]"
              >
                Iya
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="kecelakaanKeamanan"
                id="kecelakaanKeamanan-false"
                value="false"
                className="mr-2"
              />
              <label
                htmlFor="kecelakaanKeamanan-false"
                className="font-normal text-base text-[#323238]"
              >
                Tidak
              </label>
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="ancamanKeamanan"
              className="block font-medium text-base text-[#323238]"
            >
              Jelaskan ancaman kemanan yang Anda miliki!
            </label>
            <input
              type="text"
              name="ancamanKeamanan"
              id="ancamanKeamanan"
              placeholder="Ancaman keamanan..."
              className="bg-white border rounded-lg w-full h-14 px-4 py-2 font-normal text-base"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="aktivitasPekerjaan"
              className="block font-medium text-base text-[#323238]"
            >
              Ceritakan aktivitas pekerjaan Anda hari ini!
            </label>
            <textarea
              name="aktivitasPekerjaan"
              id="aktivitasPekerjaan"
              cols={30}
              rows={10}
              className="bg-white border rounded-lg w-full px-4 py-2 font-normal text-base"
              placeholder="Aktivitas Anda hari ini..."
              required
            ></textarea>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="laporanTambahan"
              className="block font-medium text-base text-[#323238]"
            >
              Apakah Anda memiliki laporan tambahan?
            </label>
            <textarea
              name="laporanTambahan"
              id="laporanTambahan"
              cols={30}
              rows={10}
              className="bg-white border rounded-lg w-full px-4 py-2 font-normal text-base"
              placeholder="Laporan tambahan..."
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="SEND FORM"
            className="w-full bg-[#363062] mt-4 border border-transparent h-14 rounded-lg text-white font-bold text-4 cursor-pointer transition-all duration-200 ease-in-out hover:border hover:border-[#363062] hover:bg-transparent hover:text-[#363062]"
          />
        </form>
      </div>
    </>
  );
}
