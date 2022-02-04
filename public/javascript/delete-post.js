//code needed to delete image from cloud as well. will implement at a later date
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getStorage,
  ref,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDDM8VSVoUfg4wwXvYr70hiKyBVkYHTgp8",
  authDomain: "not-inta-gram.firebaseapp.com",
  projectId: "not-inta-gram",
  storageBucket: "not-inta-gram.appspot.com",
  messagingSenderId: "567172899580",
  appId: "1:567172899580:web:b9c3966dee8ba94347ed79",
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

async function deleteFormHandler(event) {
  event.preventDefault();

  const storage = getStorage();
  // const imageRef =ref(storage, 'image/' + );

  deleteObject(imageRef)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });

  const imageText = document.getElementById("image-name");
  const imageName = imageText.innerText;

  console.log(imageName);

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  fetch(`/api/posts/${id}`).then(async (res) => {
    const postData = await res.json();
    console.log(postData);
    const imageRef = ref(storage, postData.image_url);
    deleteObject(imageRef)
      .then(() => {
        console.log("successfully deleted image file off cloud");
        fetch(`/api/posts/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            console.log("successfully deleted post");
            document.location.replace("/profile");
          })
          .catch((err) => {
            console.log(err);
            alert(err.message);
          });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  });
}

document
  .querySelector(".delete-post-btn")
  .addEventListener("click", deleteFormHandler);
