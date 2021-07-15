import axios from "axios";
import { useState } from "react";

export const Upload = () => {
    const CLIENT_ID = "47a9a629d77841b";

    //   const [selectedFile, setSelectedFile] = useState(null);
    //   const fileSelectedHandles = (event) => {
    //     setSelectedFile(event.target.files[0]);
    //   }; 
    // a
    
    const doUpload = (url, options) => {
        const promiseCallback = (resolve, reject) => {
    
          const getFetchJson = (response) => {
            if(!response.ok) return reject(response);
            return response.json().then(resolve);
          }
    
          fetch(url, options)
            .then(getFetchJson)
            .catch(reject);
        };
        return new Promise(promiseCallback);
      };
      const uploadImage = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('image', e.target[0].files[0]);
    
        doUpload('https://api.imgur.com/3/image', {
          method: 'POST',
          body: data,
          headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`,
          }
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      }
    
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
        <form onSubmit={uploadImage}>
    
          <input type="file"/>
          <button >Upload</button>
        </form>
        </>
      );
  };
  

  