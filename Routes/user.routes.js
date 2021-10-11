const express = require("express");
const requireAuth = require("../Middleware/requireAuth");
const validationRule = require("../config/validationRules");

const router = express.Router();
const controller = require("../Controllers/user.controller");

router.get("/auth", requireAuth, (req, res) => {
  res.status(200).send({ msg: "You are Authorisexd user" });
});

router.post("/signup", validationRule.form, controller.userRegister);
router.post("/login", controller.userLogin);
router.post("/forgot", controller.userForgotEmail);
router.post("/forgotOTP", controller.forgotOTP);
router.post("/resetpass", validationRule.resetform, controller.resetpass);
router.get("/myaccount", requireAuth, controller.myaccount);
router.post("/updateaccount",requireAuth, validationRule.updateaccount, controller.updatemyaccount);
router.post("/changepassword",requireAuth,validationRule.changepassword,controller.changepassword)


//mobile app
router.post(
  "/contactus",
  requireAuth,
  validationRule.contactus,
  controller.contactus
);

//admin panel
router.get("/getusers", requireAuth, controller.allusers);
router.post("/blUser",requireAuth,controller.block_Unblock_User);

module.exports = router;
