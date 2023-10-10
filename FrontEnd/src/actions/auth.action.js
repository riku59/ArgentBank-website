import axios from "axios";

export const TOKEN_LOGIN = "TOKEN_LOGIN";

export const signIn = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      id
    );
    // dispatch({ type: TOKEN_LOGIN, payload: response.data.body });
    console.log(response.data.body); //token

    return response.data;
  } catch (error) {
    if (error.response) {
      // La requête a été faite et le serveur a répondu avec un code d'état différent de 2xxconsole.log(error.reponse.data);
      throw error.response.data;
    }
  }
};

// export const signIn = async (id) => {

//   const requete = await fetch("http://localhost:3001/api/v1/user/login", {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(id),
//   });
//   const response = await requete.json();
//   if (requete.ok) {
//     return response;
//   } else {
//     if (response) {
//       throw response;
//     } else {
//       throw new Error("Oops une erreur est survenue");
//     }
//   }
// };
