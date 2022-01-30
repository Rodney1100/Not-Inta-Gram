import { getStorage, ref, deleteObject } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

// function getValue(id) {
//     return document.getElementById(id);
// }
//needs to be mountain.jpg in order to delete
async function deleteFormHandler(event) {
    event.preventDefault();

    const imageText = document.getElementById("image-name");
    const imageName = imageText.innerText;

    console.log(imageName);

    const storage = getStorage();
    const imageRef =ref(storage, 'image/' + imageName);

    deleteObject(imageRef).then(()=> {
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
    })
    .catch((err) => {
        console.log(err);
    })

    
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
