import { useEffect, useState } from "react";

import "./App.css";
import { Api } from "./api/request";
import LoadingSpinner from "./utils/LoadingSpinner";

const api = new Api();

function App() {
  //Estableciendo estados de carga y variable de datos
  const [isLoading, setIsLoading] = useState(true);
  const [dataUsers, setDataUsers] = useState();

  //Primer llamado a la api
  useEffect(() => {
    api
      .getUsers()
      .then((data) => {
        setDataUsers(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Error en la API ", e);
      });
  }, []);

  //Spinner puesto para la carga
  if (isLoading) {
    return <LoadingSpinner />;
  }

  //Retorno de datos con diseño
  return (
    <div className="p-5">
      <div className="container m-auto">
        <div className="pt-14">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            {dataUsers.map((user) => (
              <figure
                key={user.id}
                className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"
              >
                <img
                  className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                  src={user.picture}
                  alt="image of user"
                  width="384"
                  height="512"
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-lg font-medium text-white">
                      {user.name}
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                      {user.gender}
                    </div>
                    <div className="text-sky-600 dark:text-sky-300">
                      {user.location}
                    </div>
                    <div className="text-sky-700 dark:text-sky-200">
                      {user.email}
                    </div>
                    <div className="text-slate-700 dark:text-slate-300">
                      {user.dob}
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
