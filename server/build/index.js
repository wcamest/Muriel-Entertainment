import express from "express";
import multer from "multer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const app = express();
const multerStatics = multer({
    dest: join(CURRENT_DIR, "../uploads/statics"),
    limits: {
        fieldSize: 1073741824,
    },
});
app.use(express.json());
app.post("/statics/upload", multerStatics.single("file"), (req, res) => {
    console.log(req.file);
    res.sendStatus(200);
});
const PORT = 3014;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
