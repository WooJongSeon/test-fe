import { IExternalData } from "@/types/types";
import PartyRow from "../PartyRow/partyrow";

interface IPartyListWrapperProps {
  parties: IExternalData[];
  onClickItemOption: (requestId: number) => void;
}
export default function PartyListWrapper({
  parties,
  onClickItemOption,
}: IPartyListWrapperProps) {
  return (
    <div className="flex flex-col">
      {parties.length > 0 && (
        <span className="text-white px-6 text-xl">Your party application</span>
      )}

      {parties.length > 0 &&
        parties.map((p) => {
          return (
            <PartyRow key={p.id} party={p} onClickOption={onClickItemOption} />
          );
        })}
    </div>
  );
}
