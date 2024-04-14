import express from "express";
import { readFile } from "../service/readFile.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
const produts = readFile("../src/mocks/products.json");
const app = express();
app.use(cors());
const PORT = process.env.PORT ?? 3000;
app.get("/", (req, res) => {
  res.status(200).send("hola");
});
app.get("/products", (req, res) => {
  res.status(200).json(produts);
});
app.get("/images/:id", (req, res) => {
  const { id } = req.params;
  const imagePath = `../src/images/${id}`; // Relative path to the image

  // Get the directory name of the current module file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(__dirname);
  // Construct the absolute path to the image file
  const absolutePath = path.join(__dirname, imagePath);
  //   const absolutePath = `${__dirname}/${imagePath}`;
  console.log(absolutePath);
  // Send the image file as a response
  return res.sendFile(absolutePath, (err) => {
    if (err) {
      console.error("Error sending image:", err);
      return res.status(404).send("Image not found");
    }
    console.log("Image sent successfully:", imagePath);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
