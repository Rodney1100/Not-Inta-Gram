import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
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

function getValue(id) {
  return document.getElementById(id).value;
}

async function newFormHandler(event) {
    event.preventDefault();
    
    const newPostForm = document.getElementById("new-post-form")
    const description = getValue("description-body");
    const image_file = await document.getElementById("image").files[0]
    
    
    if (image_file.type === "image/jpeg" || image_file.type === "image/png") {
        const storage = getStorage(firebaseApp)
        const storageRef = ref(storage, image_file.name);

        uploadBytes(storageRef, image_file)
            .then(snapshot => getDownloadURL(snapshot.ref).then(url => {

                fetch(`/api/posts`, {
                    method: 'POST',
                    body: JSON.stringify({
                        image_url: url,
                        description: description,
                        image_name: image_file.name,
                        like_count: 0,
                        dislike_count: 0
                    }),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(res => {
                        // console.log(res);
                        newPostForm.reset();
                        console.log('successfully added to database');
                        document.location.replace('/');
                    }).catch(err => console.log(err));
            }))
            .catch(console.error);
    } else {
        alert("please upload JPEG or PNG files");
    }
}

document
  .getElementById("new-post-form")
  .addEventListener("submit", newFormHandler);
