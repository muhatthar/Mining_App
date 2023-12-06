export default function MonitoringList() {
  return (
    <>
      <div className="flex flex-col px-[40px]">
        <div className="w-full text-center table-auto border border-[#DDE1E6] rounded-lg">
          <table className="w-full">
            <thead className="bg-[#F2F4F8] h-12 border-b border-[#DDE1E6]">
              <tr>
                <th className="rounded-tl-lg">ID</th>
                <th>Nama Pegawai</th>
                <th>Lokasi</th>
                <th>No. Telp</th>
                <th className="rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>1</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td>
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>2</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td>
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>3</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td>
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>4</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td>
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>5</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td>
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
              <tr className="h-12 border-b border-[#DDE1E6]">
                <td>6</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td>
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
              <tr className="h-12">
                <td className="rounded-bl-lg">7</td>
                <td>Minyak Goreng</td>
                <td>Minyak</td>
                <td>Basi</td>
                <td className="rounded-br-lg">
                  <a
                    className="text-[#0F62FE] font-normal text-4 transition-all duration-200 ease-in-out hover:underline hover:underline-offset-1"
                    href=""
                  >
                    Details {">"}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
