import { useEffect } from "react";

interface IConfirmModal {
  onClose: () => void;
  onClickCancel: () => void;
}
export default function ConfirmModal({
  onClose,
  onClickCancel,
}: IConfirmModal) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black/50 z-10 flex justify-center items-center">
      <div
        className="absolute w-full max-w-screen-md h-[150px] rounded-t-lg px-4 py-8 animate-[bottom-sheet-up_200ms_ease-in-out] bottom-0 flex flex-row justify-center items-center mx-auto"
        style={{ background: "rgba(31, 31, 31, 1)" }}
      >
        <div className="flex flex-col p-4 items-center gap-4 justify-center w-full">
          <div
            className="flex flex-row w-full justify-center items-center cursor-pointer hover:bg-gray-600 rounded-xl py-4 active:bg-gray-600"
            onClick={onClickCancel}
          >
            <span className="text-white">Quit a host</span>
          </div>
          <div
            className="flex flex-row w-full justify-center items-center cursor-pointer hover:bg-gray-600 rounded-xl py-4 active:bg-gray-600"
            onClick={onClose}
          >
            <span className="text-white">Cancel</span>
          </div>
        </div>
      </div>
    </div>
  );
}
