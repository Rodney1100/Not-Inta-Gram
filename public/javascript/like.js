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
            let like_count = postData.likes[0].count

            let new_count = like_count++
            // console.log(postData);
            console.log(like_count);

            await fetch(`/api/like/${likeId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    count: new_count
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(new_count);
                    // document.location.reload();
                    console.log('successfully increased like count');
                }).catch(err => console.log(err));

        }).catch(err => console.log(err));


}

document.getElementById('like-btn').addEventListener('click', likeClickHandler);