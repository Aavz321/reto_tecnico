import express from "express";
import axios from "axios";
import { corsMiddleware } from "./cors.js";

const app = express();
const port = process.env.PORT ?? 3001;

//Se ejecuta middleware para puerto específico
app.use(corsMiddleware());

//Se establece endpoint para la limpieza y obtención de datos requeridos
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    const users = response.data.results.map((user) => ({
      //Id generado para manipulación fácil en el front
      id: crypto.randomUUID(),
      //datos obtenidos de la API
      name: `${user.name.first} ${user.name.last}`,
      gender: user.gender,
      location: `${user.location.city}, ${user.location.country}`,
      email: user.email,
      dob: user.dob.date.split("T")[0],
      picture: user.picture.large,
    }));
    res.json(users);
  } catch (error) {
    res.status(500).send("Error obteniendo datos");
  }
});

app.listen(port, () => {
  console.log(`Server escuchado en: http://localhost:${port}`);
});
