import { useStudent } from "../../providers/Student";
import { Container } from "./styles";
import { apiMyGym } from "../../services/api";
import { ToastRegister } from "../Toasts/Register";
import { Flip, toast } from "react-toastify";
import { ToastLoading } from "../Toasts/Loading";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

export const Upload = ({ handleClose, open }) => {
  const CLIENT_ID = "47a9a629d77841b";

  const { getStudent, student } = useStudent();
  const toastId = useRef("");

  let token = localStorage.getItem("@tokenMyGym") || "";
  if (token !== "") {
    token = JSON.parse(token);
  }

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

    toastId.current = toast(
      <ToastLoading>Aguarde enquanto armazenamos sua foto. </ToastLoading>,
      { className: "loadingToast" }
    );

    doUpload("https://api.imgur.com/3/image", {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    })
      .then((response) => {
        console.log(response);
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
            toast.update(toastId.current, {
              render: (
                <ToastRegister
                  name={data.name}
                  closeToast={true}
                  toastProps={null}
                >
                  Foto Atualizada!
                </ToastRegister>
              ),
              className: "registerSuccess",
              transition: Flip,
            });
          })
          .catch((error) => {
            console.log(error);
            toast.update(toastId.current, {
              render: (
                <ToastRegister
                  name={data.name}
                  closeToast={true}
                  toastProps={null}
                >
                  Ocorreu um problema, tente novamente mais tarde.
                </ToastRegister>
              ),
              className: "registerFail",
              transition: Flip,
            });
          });
      })
      .catch((err) => {
        console.log(err);

        toast.update(toastId.current, {
          render: (
            <ToastRegister name={data.name} closeToast={true} toastProps={null}>
              Ocorreu um problema, tente novamente mais tarde.
            </ToastRegister>
          ),
          className: "registerFail",
          transition: Flip,
        });
      });
  };

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
          <input type="file" id="file" />
          <button>Upload</button>
        </form>
      </Container>
    </>
  );
};
