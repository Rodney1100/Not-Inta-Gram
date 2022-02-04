var like = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
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
                const like_count = postData.like_count

                let new_count = like_count - 1
                // console.log(postData);

                if (new_count < 0) {
                    new_count = 0;
                }

                const response = await fetch(`/api/posts/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        like_count: new_count
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    likeCount.innerHTML = new_count;
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
                const like_count = postData.like_count

                let new_count = like_count + 1
                // console.log(postData);

                const response = await fetch(`/api/posts/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        like_count: new_count
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    likeCount.innerHTML = new_count;
                    // console.log('successfully added like');
                    M.toast({ html: '+1', classes: 'rounded' })
                    dislike.classList.toggle('disabled');
                } else {
                    alert(response.statusText);
                }

            }).catch(err => console.log(err));
    }

}

like.addEventListener('click', likeClickHandler);