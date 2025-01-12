import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Calendar, Copy, Eye, PencilLine, Trash2, Share2 } from "lucide-react";
import { FormatDate } from "../utils/formatDate";

function Paste() {
  const [searchTerm, setSearchTerm] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-3">
        <input
          type="search"
          placeholder="Search paste here..."
          className="focus:outline-none w-full bg-transparent border rounded-md py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-col border border-[rgba(128,121,121,0.3)] py-4 rounded-[0.4rem]">
          <h2 className="px-4 text-4xl font-bold border-b border-[rgba(128,121,121,0.3)] pb-4">
            All Pastes
          </h2>
          <div className="w-full px-4 pt-4 flex flex-col gap-y-5">
            {filteredData.length > 0 &&
              filteredData.map((data) => {
                return (
                  <div
                    className="border border-[rgba(128,121,121,0.3)] w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem]"
                    key={data._id}
                  >
                    <div className="w-[50%] flex flex-col space-y-3 items-start">
                      <p className="text-4xl font-semibold ">{data?.title}</p>
                      <p className="text-sm font-normal line-clamp-3 max-w-[80%] text-[#707070]">
                        {data?.content}
                      </p>
                    </div>

                    <div className="flex flex-col gap-y-4 sm:items-end">
                      <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                        <button
                          onClick={() => navigate(`/?pasteId=${data._id}`)}
                          className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-blue-500"
                        >
                          <PencilLine
                            size={20}
                            className="text-black group-hover:text-blue-500"
                          />
                        </button>
                        <button
                          onClick={() => navigate(`/pastes/${data._id}`)}
                          className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-orange-500"
                        >
                          <Eye
                            size={20}
                            className="text-black group-hover:text-orange-500"
                          />
                        </button>
                        <button
                          onClick={() => handleDelete(data?._id)}
                          className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-red-500"
                        >
                          <Trash2
                            size={20}
                            className="text-black group-hover:text-red-600"
                          />
                        </button>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(data?.content);
                            toast.success("copied to clipboard");
                          }}
                          className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-green-500"
                        >
                          <Copy
                            size={20}
                            className="text-black group-hover:text-green-500"
                          />
                        </button>
                        <button
                          onClick={() => undefined}
                          className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-blue-500"
                        >
                          <Share2 />
                        </button>
                      </div>
                      <div className="gap-x-2 flex">
                        <Calendar className="text-black" size={20} />
                        {FormatDate(data.createdAt)}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paste;
