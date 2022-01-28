
function getValue(id) {
    return document.getElementById(id).value;
}

// function getFileName(url) {
//     return url.split("\\").splice(-1)[0];
// }

function getFile(e) {
    const inputEl = document.getElementById('image').files[0]
}

function newFormHandler(event) {
    event.preventDefault();
    
    const description = getValue("description-body");
    const image_file = document.getElementById("image").files[0]
    console.log(image_file);


    if(image_file.type === "image/jpeg" || image_file.type === "image/png") {
        fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                image_file: image_file,
                description: description
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    } else {
        alert("please upload JPEG or PNG files");
    }

    
}

document.getElementById('new-post-form').addEventListener('submit', newFormHandler);