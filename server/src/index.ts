import express from "express";
import multer from "multer";
import { join, extname } from "path";
import process from "process";

const CURRENT_DIR = `${process.cwd()}/src`;

const app = express();
const multerStatics = multer({
  storage: multer.diskStorage({
    destination: join(CURRENT_DIR, "/uploads/statics"),
    filename: (_req, file, callback) => {
      const fileExtension = extname(file.originalname);
      const fileName = file.originalname.split(fileExtension)[0];

      callback(null, `${fileName}-${Date.now()}${fileExtension}`);
    }
  }),
  limits: {
    fieldSize: 1073741824,
  },
});

app.use(express.json());

app.post("/statics/upload", multerStatics.single("file"), (req, res) => {
  console.log(req.file);

  res.sendStatus(200);
})

const PORT = 3014;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
