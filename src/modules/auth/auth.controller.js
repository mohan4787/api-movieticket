
const authSvc = require("./auth.service");

class AuthController {
  registerUser = async (req, res, next) => {
    try {
      const data = await  authSvc.transformUserCreate(req);
      let user = await authSvc.createUser(data);

      await authSvc.sendActivationNotification(user);

        res.json({
        data: user,
        message: "User registration successful. Please check your email to activate your account.",
        status: "Success",
        options: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  activateUser = (req, res, next) => {
    let params = req.params;
    const headers = req.headers;
    const query = req.query;
    res.json({
      data: {
        params,
        headers,
        query,
      },
      message: "Activation token",
      status: "Sucess",
      options: null,
    });
  };
  loginUser = (req, res, next) => {
    res.json({
      data: null,
      message: "login ",
      status: "Sucess",
      options: null,
    });
  };
  forgetPasswordRequest = (req, res, next) => {
    res.json({
      data: null,
      message: "forget password",
      status: "Sucess",
      options: null,
    });
  };
  forgetPasswordTokenVerify = (req, res, next) => {
    res.json({
      data: req.params.token,
      message: "verify token",
      status: "Sucess",
      options: null,
    });
  };
  resetPassword = (req, res, next) => {
    res.json({
      data: null,
      message: "Reset password",
      status: "Sucess",
      options: null,
    });
  };
  loggedInUserProfile = (req, res, next) => {
    res.json({
      data: null,
      message: "me route ",
      status: "Sucess",
      options: null,
    });
  };
  logoutUser = (req, res, next) => {
    res.json({
      data: null,
      message: "logot router ",
      status: "Sucess",
      options: null,
    });
  };
  updateUserById = (req, res, next) => {
    res.json({
      data: req.params.id,
      message: "user update",
      status: "Sucess",
      options: null,
    });
  };
}

module.exports = AuthController;
