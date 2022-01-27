async function newFormHandler(event) {
    event.preventDefault();

    const description = document.querySelector('input[name="post-description"]').value;
    const image_url = document.querySelector('input[name="image-url"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            image_url,
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/feed');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);