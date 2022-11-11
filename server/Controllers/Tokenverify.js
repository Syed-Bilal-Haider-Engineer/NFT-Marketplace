// .........verify token here start here...........
import usersModal from "../Modules/User.js";
import jwt_decode from "jwt-decode";
export const tokenVerifyHandler = async (req, res) => {
  const token = req.headers["x-access-token"];
  console.log("token:", token);
  try {
    var decoded = jwt_decode(token);
    if (decoded?.id) {
      usersModal.findOne({ _id: decoded.id }, function (err, docs) {
        res.json({
          status: "ok",
          id: docs._id,
        });
      });
    } else {
      res.json({
        status: "error",
        message: " invaild token",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Please try again!",
      user: false,
    });
  }
};
