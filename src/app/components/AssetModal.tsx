import React from "react";

interface AssetModalProps {
  isVisible: boolean;
  onClose: () => void;
  onChangeHandler: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AssetModal({
  isVisible,
  onClose,
  onChangeHandler,
  onSubmitHandler,
}: AssetModalProps) {
  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-1/3 flex flex-col py-4 px-12 justify-center items-center rounded-[10px] bg-white">
          <h2 className="font-medium text-xl text-[#F99417] text-left">
            Tambah Aset Minyak
          </h2>
          <div className="mt-4 mb-6 flex flex-col gap-6 w-full">
            <div className="relative h-[34px] w-full min-w-[200px]">
              <input
                type="text"
                name="namaAset"
                className="peer h-full w-full border-b border-[#9492A0] bg-transparent pt-4 pb-1.5 text-sm outline outline-0 transition-all placeholder-shown:border-[#9492A0] focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                onChange={(e) => onChangeHandler(e)}
                placeholder=" "
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-medium leading-tight text-[#9492A0] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Nama Aset
              </label>
            </div>
            <div className="flex gap-[22px] w-full">
              <div className="relative h-[34px] w-full min-w-[200px]">
                <input
                  type="text"
                  name="jenisAset"
                  className="peer h-full w-full border-b border-[#9492A0] bg-transparent pt-4 pb-1.5 text-sm outline outline-0 transition-all placeholder-shown:border-[#9492A0] focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={(e) => onChangeHandler(e)}
                  placeholder=" "
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-medium leading-tight text-[#9492A0] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Jenis Aset
                </label>
              </div>
              {/* <div className="relative h-[34px] w-full min-w-[200px]">
                <input
                  type="text"
                  name="statusAset"
                  className="peer h-full w-full border-b border-[#9492A0] bg-transparent pt-4 pb-1.5 text-sm outline outline-0 transition-all placeholder-shown:border-[#9492A0] focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={(e) => onChangeHandler(e)}
                  placeholder=" "
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-medium leading-tight text-[#9492A0] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-200 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Status Aset
                </label>
              </div> */}
              <div className="relative h-[34px] w-full min-w-[200px]">
                <select
                  id="underline_select"
                  name="statusAset"
                  className="w-full font-medium text-sm pt-3.5 bg-transparent border-b border-[#9492A0] appearance-none focus:outline-none peer"
                  onChange={(e) => {
                    const selectedValue: string = e.target.value.toString();
                    onChangeHandler({
                      ...e,
                      target: {
                        ...e.target,
                        value: selectedValue,
                      },
                    });
                  }}
                >
                  <option value="">Pilih Status Aset</option>
                  <option value="aktif">Aktif</option>
                  <option value="non-aktif">Non-Aktif</option>
                  <option value="dalam-perbaikan">Dalam Perbaikan</option>
                  <option value="dalam-pemeliharaan">Dalam Pemeliharaan</option>
                </select>
              </div>
            </div>
            <div className="w-full h-full">
              <label className="w-full text-left font-medium text-sm text-[#9492A0]">
                Riwayat Status
              </label>
              <textarea
                cols={30}
                rows={10}
                name="riwayatStatus"
                className="border-b border-[#9492A0] w-full text-sm outline outline-0 focus:outline-0"
                onChange={(e) => onChangeHandler(e)}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end items-center w-full gap-2">
            <button
              onClick={() => onClose()}
              className="rounded bg-[#383748] w-[66px] h-[34px]"
            >
              Cancel
            </button>
            <button
              onClick={(e) => onSubmitHandler(e)}
              className="rounded bg-[#F99417] w-[66px] h-[34px]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
