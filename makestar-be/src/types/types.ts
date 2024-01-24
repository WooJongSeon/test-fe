export interface IFetchPartyData {
  request_list: [
    {
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
  ];
}

export interface IFetchPartyResponse {
  result: boolean;
  message: string;
  code: string;
  external_data?: IFetchPartyData;
}

export interface IErrorMessage {
  result: false;
  message: "A problem is occurred. Please try again later";
  code: "503";
}
