async function likeClickHandler(event) {
    event.preventDefault();

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    const postId = document.getElementById("post-id");
    const id = postId.innerText;

    console.log(id);

    // const response = await fetch('/api/posts/like', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         post_id: id
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // if (response.ok) {
    //     document.location.reload();
    // } else {
    //     alert(response.statusText);
    // }
}

document.getElementById('like-btn').addEventListener('click', likeClickHandler);