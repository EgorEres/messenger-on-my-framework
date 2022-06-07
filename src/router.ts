import Router from "./modules/router";
import Page404 from "./pages/404/index";
import Page500 from "./pages/500/index";
import Registration from "./pages/registration/index";
import Login from "./pages/login/index";
import Settings from "./pages/settings/index";
import Chats from "./pages/chats/index";

const router = new Router();

router.default(Page404);
router.use("/", Login);
router.use("/sign-up", Registration);
router.use("/settings", Settings);
router.use("/messenger", Chats);
router.use("/500", Page500);

router.start();

export default router;
