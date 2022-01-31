// let post = document.getElementById('post-id');
// const postId = post.innerText;

// var like = document.querySelector('#green');
// var dislike = document.querySelector('#red');

// like.addEventListener('click', function() {

// if (dislike.classList.contains('red')) {
// dislike.classList.remove('red');
// }
// this.classList.toggle('green');


// });

// dislike.addEventListener('click', function() {

// if (like.classList.contains('green')) {
// like.classList.remove('green');
// }
// this.classList.toggle('red');

// })

async function likeClickHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const {id} = event.target
    
    console.log(postId);
    // const post_id = event.target.id

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    // const postId = document.getElementById("post-id");
    // const id = postId.innerText;

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