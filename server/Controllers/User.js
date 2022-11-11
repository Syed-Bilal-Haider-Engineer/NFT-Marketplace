import usersModal from "../Modules/User.js";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
const privateKey = "bloctech";

/////////////create user, and save data in mongoDB//////////
export const createuser = async (req, res, next) => {
  const { email, walletaddress } = req.body;
  try {
    const user = await usersModal.findOne({
      $or: [{ email }, { walletaddress }],
    });
    if (user) {
      res.json({
        status: "error",
        error: false,
        message: "Email or wallet Address is already exist !",
      });
    } else {
      const { name, email, password, walletaddress } = req.body;
      const passwordtoken = jwt.sign({ password }, privateKey);
      const newuser = await new usersModal({
        name,
        email,
        password: passwordtoken,
        walletaddress,
      });
      newuser.save();
      if (newuser) {
        res.json({
          status: "ok",
          success: true,
          message: "Add user Successfully!",
        });
      }
    }
  } catch (error) {
    res.send(error);
    next(error);
  }
};

//////////////login user if your exist or otherwise not/////////////
export const login = async (req, res, next) => {
  try {
    const { email, password, walletaddress } = req.body;
    const user = await usersModal.findOne({
      $and: [{ email }, { walletaddress }],
    });
    if (user) {
      const passwordDecode = jwt_decode(user?.password);
      if (password == passwordDecode?.password) {
        let userToken = { id: user._id };
        let sign = await jwt.sign(userToken, privateKey, {
          expiresIn: "6d",
        });
        if (sign) {
          console.log("sign:", sign);
          res.json({
            status: true,
            success: true,
            message: "Login succussFully!",
            token: sign,
          });
        }
      } else {
        res.json({
          status: false,
          success: false,
          message: "Please try again, password not match !",
        });
      }
    } else {
      res.json({
        status: false,
        success: false,
        message: "Email or wallet Address not match!",
      });
    }
  } catch (error) {
    res.send(error);
    next(error);
  }
};

///////get  detials of login user///////////////
export const fetchuser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await usersModal.findById({ _id: id });
    if (user) {
      res.json({
        status: "ok",
        success: true,
        data: user,
      });
    }
  } catch (error) {
    res.send(error);
    next(error);
  }
};

/////////////check user exist or not exist///////////
export const checkUser = async (req, res, next) => {
  try {
    const { account } = req.body;

    const user = await usersModal.findOne({ walletaddress: account });
    if (user) {
      res.json({
        success: true,
        msg: "User Found",
      });
    } else {
      res.json({
        success: false,
        msg: "User Not Found",
      });
    }
  } catch (error) {
    res.send(error);
    next(error);
  }
};
