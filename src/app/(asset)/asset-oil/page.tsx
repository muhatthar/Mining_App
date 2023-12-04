"use client";

import Modal from "@/app/components/Modal";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

export default function AssetOil() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Fragment>
        <div className="flex flex-col px-[40px]">
          <div className="flex w-full justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="w-[140px] flex items-center gap-[9.25px] justify-center mb-4 rounded-xl py-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:border-[#F99417]"
            >
              <p className="text-[#545F71] font-medium text-xl">Add List</p>
              <PlusCircleIcon className="w-[31.5px] h-[31.5px] text-[#F99417]"></PlusCircleIcon>
            </button>
          </div>
          <div className="w-full text-center table-auto border border-[#DDE1E6] rounded-lg">
            <table className="w-full">
              <thead className="bg-[#F2F4F8] h-12 border-b border-[#DDE1E6]">
                <tr>
                  <th className="rounded-tl-lg">ID</th>
                  <th>Nama Aset</th>
                  <th>Jenis Aset</th>
                  <th>Status Aset</th>
                  <th className="rounded-tr-lg">Riwayat Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="h-12 border-b border-[#DDE1E6]">
                  <td>1</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td>Tidak ada</td>
                </tr>
                <tr className="h-12 border-b border-[#DDE1E6]">
                  <td>2</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td>Tidak ada</td>
                </tr>
                <tr className="h-12 border-b border-[#DDE1E6]">
                  <td>3</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td>Tidak ada</td>
                </tr>
                <tr className="h-12 border-b border-[#DDE1E6]">
                  <td>4</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td>Tidak ada</td>
                </tr>
                <tr className="h-12 border-b border-[#DDE1E6]">
                  <td>5</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td>Tidak ada</td>
                </tr>
                <tr className="h-12 border-b border-[#DDE1E6]">
                  <td>6</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td>Tidak ada</td>
                </tr>
                <tr className="h-12">
                  <td className="rounded-bl-lg">7</td>
                  <td>Minyak Goreng</td>
                  <td>Minyak</td>
                  <td>Basi</td>
                  <td className="rounded-br-lg">Tidak ada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        ></Modal>
      </Fragment>
    </>
  );
}
