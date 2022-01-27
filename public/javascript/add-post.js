var cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

async function newFormHandler(event) {
    event.preventDefault();
    
    const description = document.querySelector('textarea[name="description-body"]').value;
    const imageFile = document.querySelector('input[name="image"]').value;
    // const image_url;

    console.log(description);
    console.log(imageFile);
    // cloudinary.uploader.upload(imageFile, function (err, image) {
    //     console.log();
    //     console.log("** File Upload");
    //     if (err) { console.warn(err); }
    //     console.log(image.url);
    //     image_url = image.url;
    //   });

    // const response = await fetch(`/api/posts`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         image_url,
    //         description
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    if (response.ok) {
        document.location.replace('/feed/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);