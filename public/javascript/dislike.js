var like = document.getElementById('like-btn');
var dislike = document.getElementById('dislike-btn');

async function dislikeClickHandler(event) {
    event.preventDefault();
    // event.stopPropagation();
    // const {id} = event.target

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (like.classList.contains('disabled')) {
        //then subtract a dislike, remove disabled from like,

        fetch(`/api/posts/${id}`)
            .then(async res => {
                const postData = await res.json()
                const dislikeId = postData.dislikes[0].id;
                const dislike_count = postData.dislikes[0].count

                // console.log(dislike_count);

                let new_count = dislike_count - 1
                // console.log(postData);

                if (new_count < 0) {
                    new_count = 0;
                }

                const response = await fetch(`/api/posts/dislike/${dislikeId}`, {
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
                    // console.log('successfully removed dislike');
                    like.classList.toggle('disabled');
                } else {
                    alert(response.statusText);
                }

            }).catch(err => console.log(err));
    } else {

        //then add a dislike, add disabled to like,
        fetch(`/api/posts/${id}`)
            .then(async res => {
                const postData = await res.json()
                const dislikeId = postData.dislikes[0].id;
                const dislike_count = postData.dislikes[0].count

                // console.log(dislike_count);

                let new_count = dislike_count + 1
                // console.log(postData);

                const response = await fetch(`/api/posts/dislike/${dislikeId}`, {
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
                    // console.log('successfully added dislike');
                    M.toast({html: '-1' , classes: 'rounded'})
                    like.classList.toggle('disabled');
                } else {
                    alert(response.statusText);
                }

            }).catch(err => console.log(err));
    }

}


dislike.addEventListener('click', dislikeClickHandler);