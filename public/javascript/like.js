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
    // event.stopPropagation();
    // const {id} = event.target


    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    fetch(`/api/posts/${id}`)
        .then(async res => {
            const postData = await res.json()
            const likeId = postData.likes[0].id;
            const like_count = postData.likes[0].count
            
            console.log(like_count);

            let new_count = like_count + 1
            // console.log(postData);

            const response = await fetch(`/api/posts/like/${likeId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    count: new_count
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                console.log(new_count);
                // document.location.reload();
                console.log('successfully increased like count');
            } else {
                alert(response.statusText);
            }

        }).catch(err => console.log(err));


}

document.getElementById('like-btn').addEventListener('click', likeClickHandler);