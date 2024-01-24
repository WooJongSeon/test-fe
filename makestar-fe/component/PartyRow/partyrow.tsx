import { ElipseHorizontalIcon } from "@/icons/elipse-horizontal/elipse.horizontal";
import { IExternalData } from "@/types/types";

interface IPartyRowProps {
  party: IExternalData;
  onClickOption: (requestId: number) => void;
}
export default function PartyRow({ party, onClickOption }: IPartyRowProps) {
  return (
    <div className="flex flex-row justify-between items-center p-6">
      <div className="img-area flex flex-row items-center gap-2">
        <img
          className="w-12"
          src={party.member.fandom.artist.image.thumb_url}
          alt="artist image"
        />

        <div className="flex flex-col text-white gap-2">
          <span className="text-base ">BTS</span>
          <span className="text-xs" style={{ color: "rgba(132, 139, 156, 1)" }}>
            23.01.23
          </span>
        </div>
      </div>

      <div className="status-area text-white flex flex-row items-center gap-2">
        <span className="text-xs" style={{ color: "rgba(204, 208, 215, 1)" }}>
          Pending
        </span>
        <button onClick={() => onClickOption(party.id)}>
          <ElipseHorizontalIcon className="w-6" />
        </button>
      </div>
    </div>
  );
}
