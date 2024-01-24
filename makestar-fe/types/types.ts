export interface IExternalData {
  id: number;
  before_level: number;
  after_level: number;
  member: {
    id: number;
    level: number;
    profile_image: {
      id: number;
      filename: string;
      thumb_url: string;
      mime: string;
    };
    nickname: string;
    user: {
      id: number;
      email: string;
      is_active: boolean;
    };
    fandom: {
      id: number;
      title: string;
      image: {
        id: number;
        filename: string;
        thumb_url: string;
        mime: string;
      };
      artist: {
        id: number;
        name: string;
        image: {
          id: number;
          filename: string;
          thumb_url: string;
          mime: string;
        };
      };
    };
  };
  status: number; // # apply status, 0=PENDING, 1=CANCELLED, 2=IN_REVIEW, 3=QUEUED, 4= APPROVAL, 5=REJECTED
}

export interface ICommonResponse {
  result: boolean;
  message: string;
  code: string;
}

export interface IFetchPartyResponse extends ICommonResponse {
  external_data?: { request_list: IExternalData[] };
}

export interface IApplyPartyResponse extends ICommonResponse {
  external_data: IExternalData;
}
