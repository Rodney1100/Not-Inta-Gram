var like = document.getElementById('like-btn');
var dislike = document.getElementById('dislike-btn');

async function likeClickHandler(event) {
    event.preventDefault();
    // event.stopPropagation();
    // const {id} = event.target

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (dislike.classList.contains('disabled')) {
        //then subtract a like, remove disabled from dislike,

        fetch(`/api/posts/${id}`)
            .then(async res => {
                const postData = await res.json()
                const likeId = postData.likes[0].id;
                const like_count = postData.likes[0].count

                // console.log(like_count);

                let new_count = like_count - 1
                // console.log(postData);

                if (new_count < 0) {
                    new_count = 0;
                }

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
                    // console.log(new_count);
                    // console.log('successfully removed like');
                    dislike.classList.toggle('disabled');
                } else {
                    alert(response.statusText);
                }

            }).catch(err => console.log(err));
    } else {

        //then add a like, add disabled to dislike,
        fetch(`/api/posts/${id}`)
            .then(async res => {
                const postData = await res.json()
                const likeId = postData.likes[0].id;
                const like_count = postData.likes[0].count

                // console.log(like_count);

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
                    // console.log(new_count);
                    // console.log('successfully added like');
                    M.toast({html: '+1' , classes: 'rounded'})
                    dislike.classList.toggle('disabled');
                } else {
                    alert(response.statusText);
                }

            }).catch(err => console.log(err));
    }

}

like.addEventListener('click', likeClickHandler);