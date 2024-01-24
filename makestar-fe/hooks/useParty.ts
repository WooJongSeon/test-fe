import {
  IApplyPartyResponse,
  ICommonResponse,
  IFetchPartyResponse,
} from "@/types/types";

interface ISnsData {
  type: string;
  content: string;
}

interface IApplyParams {
  artist_id: number;
  sns: ISnsData[];
  introduction: string;
  email: string;
}

export default function useParty() {
  const applyParty = async (
    params: IApplyParams
  ): Promise<IApplyPartyResponse> => {
    try {
      const res = await fetch("http://localhost:8080/streaming/apply_host", {
        method: "POST",
        body: JSON.stringify(params),
      });
      const data: IApplyPartyResponse = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  const fetchParty = async (
    page: number,
    size: number
  ): Promise<IFetchPartyResponse> => {
    try {
      const res = await fetch(
        `http://localhost:8080/streaming/list_host_apply_status?page=${page}&size=${size}`,
        { method: "GET" }
      );
      const data: IFetchPartyResponse = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  const cancelParty = async (requestId: number): Promise<ICommonResponse> => {
    try {
      const res = await fetch(
        "http://localhost:8080/streaming/cancel_host_apply",
        { method: "PATCH", body: JSON.stringify({ requestId }) }
      );
      const data: ICommonResponse = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    applyParty,
    fetchParty,
    cancelParty,
  };
}
