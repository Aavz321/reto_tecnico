import cors from "cors";

//Agregar nuevas direcciones en la lista en caso se requiera
const ACCEPTED_ORIGINS = ["http://localhost:5173"];

//Establecimiento y arreglo de CORS para permitir el uso
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });
