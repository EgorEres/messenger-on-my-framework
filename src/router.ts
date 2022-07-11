import Router from "./modules/router";
import Page404 from "./pages/404/index";
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

router.start();

export default router;
