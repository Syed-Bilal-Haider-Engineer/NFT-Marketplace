import express from "express";
import routes from "./Routes/routes.js";
import cors from "cors";
import connectDB from "./Database/connectDB.js";
import multer from "multer";
import usersModal from "./Modules/User.js";
import path from "path";
import fs from "fs";
const app = express();
const __dirname = path.resolve();
const PORT = 8080;
const url = `mongodb+srv://bilal:151214bscs@cluster0.ouusdwa.mongodb.net/?retryWrites=true&w=majority`;
connectDB(url);
app.use(cors("*"));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("./build"));
//muilter start here.............
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + Math.random() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use("/", routes);

app.use("/upload", express.static("./upload"));
// .......start route update of profile pic.........
app.post("/userprofile", upload.single("file"), async (req, res) => {
  try {
    let data;
    const _id = req.body.id;
    const previous = await usersModal.findOne({ _id });
    if (req.file) {
      data = await usersModal.findByIdAndUpdate(_id, {
        name: req.body.name,
        email: req.body.email,
        img: req.file.filename,
      });
    } else {
      data = await usersModal.findByIdAndUpdate(_id, {
        name: req.body.name,
        email: req.body.email,
      });
    }
    console.log("user profile data:", data);
    if (previous.img !== "" && req.file && req.file.path) {
      if (data.img !== req.file.path) {
        console.log("not equal");
        try {
          fs.unlink("upload/" + data.img, (err) => {
            console.log(err);
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    if (data) {
      res.status(202).json({
        status: "ok",
        success: true,
        message: "Update successfully",
      });
    } else {
      res.json({
        status: "error",
        success: false,
        message: "Not successfully update",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      success: false,
      message: "Server error or routesis not match !",
    });
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ status: false, data: error });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, (req, res) => {
  console.log("Server run successfully");
});
