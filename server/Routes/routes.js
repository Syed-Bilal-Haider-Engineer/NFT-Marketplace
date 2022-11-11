import express from "express";
import * as user from "../Controllers/User.js";
import * as tokenverify from "../Controllers/Tokenverify.js";
const routes = express.Router();
// post methods start here
routes.post("/createuser", user.createuser);
routes.post("/login", user.login);
routes.post("/verifytoken", tokenverify.tokenVerifyHandler);
routes.get("/getuser/:id", user.fetchuser);
export default routes;
