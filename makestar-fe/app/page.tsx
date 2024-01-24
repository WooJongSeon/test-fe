"use client";

import ConfirmModal from "@/component/ConfirmModal/confirmModal";
import TitleWrapper from "@/component/HeaderTitle/headerTitle";
import PartyListWrapper from "@/component/PartyList/partylist";
import useParty from "@/hooks/useParty";
import { IExternalData } from "@/types/types";
import { useState } from "react";
import toast from "react-simple-toasts";

interface IHostPartyRowProps {
  onClickFunc: () => Promise<void>;
}
function HostPartyRow({ onClickFunc }: IHostPartyRowProps) {
  return (
    <div
      className="flex flex-row justify-between items-center p-6 border border-black border-solid"
      style={{ backgroundColor: "rgba(31, 35, 42, 1)" }}
    >
      <div className="flex flex-col gap-2">
        <span className="text-white text-base">Host a Party</span>
        <span
          className="text-sm"
          style={{ color: "rgba(166, 174, 188, 1)" }}
        >{`Be the first to host your artist's party`}</span>
      </div>
      <div
        className="p-4 flex flex-row items-center justify-center rounded-full cursor-pointer bg-purple-600 hover:bg-purple-400 "
        onClick={onClickFunc}
      >
        <span className="whitespace-nowrap text-white">{"Apply now"}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const { applyParty, cancelParty, fetchParty } = useParty();
  const [parties, setParties] = useState<IExternalData[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [requestId, setRequestId] = useState(-1);

  const onClickOption = (partyId: number) => {
    setIsSheetOpen(true);
    setRequestId(partyId);
  };

  const onClickCancelParty = async () => {
    try {
      const res = await cancelParty(requestId);
      if (res.code === "200") {
        console.log("asbduifabsd");
        toast("✅ Cancel complete", {
          theme: "light",
          className:
            "bg-white px-6 py-4 rounded-full flex flex-row items-center",
        });
        setIsSheetOpen(false);
        location.href = "/";
      }
    } catch (error) {
      console.log(error);
      toast("❌ Cancel fail", {
        theme: "light",
        className: "bg-white px-6 py-4 rounded-full flex flex-row items-center",
      });
    }
  };

  const onClickApplyParty = async () => {
    try {
      const applyRes = await applyParty({
        artist_id: 1,
        sns: [{ type: "INSTAGRAM", content: "http://instalink" }],
        introduction: "hello",
        email: "email.com",
      });
      if (applyRes.code === "201") {
        toast("✅ Application complete", {
          theme: "light",

          className:
            "bg-white px-6 py-4 rounded-full flex flex-row items-center",
        });
        onClickFetchParty();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickFetchParty = async () => {
    try {
      const data = await fetchParty(0, 10);
      if (data.external_data?.request_list) {
        setParties(data.external_data.request_list);
      }
    } catch (error) {
      console.log(error);
      setParties([]);
    }
  };

  return (
    <div className="container mx-auto sm:max-w-xl sm:px-0 ">
      <TitleWrapper labelText={parties.length === 0 ? "Party" : "streamwith"} />
      {parties.length === 0 && <HostPartyRow onClickFunc={onClickApplyParty} />}
      {parties.length > 0 && (
        <PartyListWrapper
          parties={parties || []}
          onClickItemOption={onClickOption}
        />
      )}
      {isSheetOpen && (
        <ConfirmModal
          onClickCancel={onClickCancelParty}
          onClose={() => setIsSheetOpen(false)}
        />
      )}
    </div>
  );
}
