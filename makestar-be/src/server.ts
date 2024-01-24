import * as Router from "koa-router";
import IndexController from "./controllers/index.controller";
import StreamingController from "./controllers/streaming.controller";

const router = new Router();

router.get("/", IndexController.getIndex);

router.post("/streaming/apply_host", StreamingController.applyParty);
router.get("/streaming/list_host_apply_status", StreamingController.getParties);
router.patch("/streaming/cancel_host_apply", StreamingController.cancelParty);

export default router;
