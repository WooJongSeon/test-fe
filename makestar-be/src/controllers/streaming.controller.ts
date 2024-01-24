import { BaseContext } from "koa";
import { applyPartyResponse, fetchPartyResponse } from "../data/party";

export default class StreamingController {
  public static async applyParty(ctx: BaseContext) {
    try {
      ctx.status = 201;
      ctx.body = applyPartyResponse;
    } catch (error) {
      ctx.status = 503;
      ctx.body = {
        result: false,
        message: "A problem is occurred. Please try again later",
        code: "503",
      };
    }
  }
  public static async getParties(ctx: BaseContext) {
    try {
      ctx.status = 200;
      ctx.body = fetchPartyResponse;
    } catch (error) {
      ctx.status = 503;
      ctx.body = {
        result: false,
        message: "A problem is occurred. Please try again later",
        code: "503",
      };
    }
  }
  public static async cancelParty(ctx: BaseContext) {
    try {
      ctx.status = 200;
      ctx.body = {
        result: true,
        message: "Your Application is cancelled.",
        code: "200",
      };
    } catch (error) {
      ctx.status = 503;
      ctx.body = {
        result: false,
        message: "A problem is occurred. Please try again later",
        code: "503",
      };
    }
  }
}
