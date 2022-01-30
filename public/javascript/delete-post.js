import { getStorage, ref, deleteObject } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

function getValue(id) {
    return document.getElementById(id).value;
}

async function deleteFormHandler(event) {
    event.preventDefault();

    const imageName = getValue("image-name");

    console.log(imageName);

    // const storage = getStorage();
    // // const imageRef =ref(storage, 'image/' + );

    // deleteObject(imageRef).then(()=> {
        
    // })
    // .catch((err) => {
    //     console.log(err);
    // })

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];
    // const response = await fetch(`/api/posts/${id}`, {
    //     method: 'DELETE'
    // });

    // if (response.ok) {
    //     document.location.replace('/profile');
    // } else {
    //     alert(response.statusText);
    // }
    
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
