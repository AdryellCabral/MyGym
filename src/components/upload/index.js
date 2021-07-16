import axios from "axios";
import { useState } from "react";
import { useStudent } from "../../providers/Student";
import { Container } from "./styles";
import { apiMyGym } from "../../services/api";

export const Upload = ({ handleClose, open }) => {
  const CLIENT_ID = "47a9a629d77841b";

  const { getStudent, student } = useStudent();

  let token = localStorage.getItem("@tokenMyGym") || "";
  if (token !== "") {
    token = JSON.parse(token);
  }

  //   const [selectedFile, setSelectedFile] = useState(null);
  //   const fileSelectedHandles = (event) => {
  //     setSelectedFile(event.target.files[0]);
  //   };
  // a

  const doUpload = (url, options) => {
    const promiseCallback = (resolve, reject) => {
      const getFetchJson = (response) => {
        if (!response.ok) return reject(response);
        return response.json().then(resolve);
      };

      fetch(url, options).then(getFetchJson).catch(reject);
    };
    return new Promise(promiseCallback);
  };
  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", e.target[0].files[0]);

    doUpload("https://api.imgur.com/3/image", {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    })
      .then((response) => {
        console.log(response)
        apiMyGym
          .patch(
            `students/${student.id}`,
            {
              img: response.data.link,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            getStudent();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => console.log(err));
  };

  //   const fileUploadHandler = () => {
  //     axios
  //       .post("https://api.imgur.com/3/image", setSelectedFile, {
  //         headers: {
  //           Authorization: `Client-Id ${CLIENT_ID}`,
  //         },
  //       })
  //       .then((response) => console.log(response))
  //       .catch((err) => console.log(err));
  //   };

  return (
    <>
      <Container>
        <header>
          <h1>Foto de Perfil</h1>
          <button onClick={() => handleClose(open)}>
            <span>X</span>
          </button>
        </header>
        <form onSubmit={uploadImage}>
          <label htmlFor="file">Clique aqui para adicionar sua foto!</label>
          <input type="file" id="file"/>
          <button>Upload</button>
        </form>
      </Container>
    </>
  );
};
