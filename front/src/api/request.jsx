import axios from "axios";

//Enlace del API
const API = "http://localhost:3000";

//Estableciendo clase a la api
export class Api {
  //Función para obtener los usuarios
  getUsers = async () => {
    const { data } = await axios.get(`${API}/users`);
    return data;
  };
}
