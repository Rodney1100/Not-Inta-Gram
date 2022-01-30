//code needed to delete image from cloud as well. will implement at a later date
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
// import { getStorage, ref, deleteObject } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDDM8VSVoUfg4wwXvYr70hiKyBVkYHTgp8",
//     authDomain: "not-inta-gram.firebaseapp.com",
//     projectId: "not-inta-gram",
//     storageBucket: "not-inta-gram.appspot.com",
//     messagingSenderId: "567172899580",
//     appId: "1:567172899580:web:b9c3966dee8ba94347ed79"
// };
// const firebaseApp = initializeApp(firebaseConfig);


async function deleteFormHandler(event) {
    event.preventDefault();

    const imageText = document.getElementById("image-name");
    const imageName = imageText.innerText;

    console.log(imageName);

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }

    // const storage = getStorage(firebaseApp);
    // const imageRef =ref(storage, imageName);

    // deleteObject(imageRef).then(()=> {
    //    console.log('success');
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
