"use client";

import AssetModal from "@/app/components/AssetModal";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import API from "@/libs";
import * as React from "react";
import { useRouter } from "next/navigation";

interface AssetOilInstace {
  namaAset: "";
  jenisAset: "";
  statusAset: "";
  riwayatStatus: "";
}

export default function AssetOil() {
  const router = useRouter();
  const [input, setInput] = React.useState<AssetOilInstace | any>({
    namaAset: "",
    jenisAset: "",
    statusAset: "",
    riwayatStatus: "",
  });
  const [assets, setAssets] = React.useState<Array<AssetOilInstace>>([]);
  const [showModal, setShowModal] = useState(false);

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setInput((prevInput: any) => ({ ...prevInput, [name]: value}));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { namaAset, jenisAset, statusAset, riwayatStatus } = input;
    const body = { namaAset, jenisAset, statusAset, riwayatStatus };
    try {
      const response = await API.post("/assets/", body);
      setAssets((prevAssets) => [...prevAssets, input])
      alert(response.data.message);
      setShowModal(false);
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
                {assets.map((asset: any, i: any) => {
                  return (
                    <tr className="h-12" key={i}>
                      <td className="rounded-bl-lg">{i + 1}</td>
                      <td>{asset.namaAset}</td>
                      <td>{asset.jenisAset}</td>
                      <td>{asset.statusAset}</td>
                      <td className="rounded-br-lg">{asset.riwayatStatus}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <AssetModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          onChangeHandler={changeHandler}
          onSubmitHandler={handleSubmit}
        ></AssetModal>
      </Fragment>
    </>
  );
}
