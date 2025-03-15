import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

function ViewPaste() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const paste = pastes.find((paste) => paste._id == id);
      setTitle(paste.title);
      setValue(paste.content);
    }
  });

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items start">
        <input
          type="text"
          placeholder="enter your title"
          value={title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-black border border-input rounded-md p-2 shadow-[0_3px_10px_rgb(0,0,0,0.3)]"
        />

        <div
          className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl shadow-[0_3px_10px_rgb(0,0,0,0.3)]`}
        >
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>

          {/* TextArea */}
          <textarea
            value={value}
            disabled
            placeholder="Write Your Content Here...."
            className="w-full p-3  focus-visible:ring-0"
            style={{
              caretColor: "#000",
            }}
            rows={20}
          />
        </div>

        {/* <textarea
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          disabled
          className="divide-slate-950 border-4"
        /> */}
      </div>
    </div>
  );
}

export default ViewPaste;
