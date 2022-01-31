import { getStorage, ref, deleteObject } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js";

//reminder: to add image_name to POST model in order to make deleting file from cloud storage less painful 
// function getFileName(url) {
//     return url.split("\\").splice(-1)[0];
// }

async function deleteFormHandler(event) {
    event.preventDefault();
    
    const storage = getStorage();
    // const imageRef =ref(storage, 'image/' + );

    deleteObject(imageRef).then(()=> {
        
    })
    .catch((err) => {
        console.log(err);
    })

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];
    // const response = await fetch(`/api/posts/${id}`, {
    //     method: 'DELETE'
    // });

    // if (response.ok) {
    //     document.location.replace('/profile/');
    // } else {
    //     alert(response.statusText);
    // }
    
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
