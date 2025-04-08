let post_width_value = 440
let post_width = post_width_value + 'px'

var posts = [
    {
        src: 'images/posts/test/funny cat.jpg',
        profile: 'Test User X',
        genre: 'test'
    }
]

function newPostImage(src) {
    let img = document.createElement('img')
    img.src = src
    img.style.width = post_width
    img.style.height = 'auto'
    img.style.borderRadius = '12px'

    return img
}

function newImage(src) {
    let img = document.createElement('img')
    img.src = src

    return img
}

function newLikeButton() {
    let btn_img = document.createElement('img')
    btn_img.src = 'images/heart-btn-outline.svg'
    btn_img.style.width      = '30px'
    btn_img.style.height     = 'auto'
    btn_img.style.marginLeft = 'auto'
    btn_img.addEventListener('click', () => {
        const heartOutline = 'images/heart-btn-outline.svg';
        const heartFilled = 'images/heart-btn-filled.svg';

        const currentSrc = btn_img.src.split('/').pop();

        if (currentSrc === 'heart-btn-outline.svg') {
            btn_img.src = heartFilled;
        } else {
            btn_img.src = heartOutline;
        }
    })

    return btn_img
}

function newPost(post_id) {
    let post_data = posts[post_id]

    let post_div = document.createElement('div')
    post_div.appendChild(newPostImage(post_data.src))
    post_div.appendChild(document.createElement('br'))

    let prof_padding = 7
    let prof_div = document.createElement('div')
    prof_div.style.display      = 'flex'
    prof_div.style.alignItems   = 'center'
    prof_div.style.padding      = prof_padding + 'px'
    prof_div.style.maxWidth     = (post_width_value - (prof_padding * 2)) + 'px'
    prof_div.style.borderRadius = '10px'
    prof_div.style.backgroundColor = '#c8d4e8'

    let prof_pic = newPostImage('images/profile-icon.png')
    prof_pic.style.width  = '40px'
    prof_pic.style.height = 'auto'
    prof_div.appendChild(prof_pic)

    let prof_name = document.createElement('p')
    prof_name.innerHTML = post_data.profile
    prof_name.style.marginLeft = '10px'
    prof_div.appendChild(prof_name)

    prof_div.appendChild(newLikeButton())

    post_div.appendChild(prof_div)
    return post_div
}

for (var i = 0; i < 10; i ++) {
    document.body.appendChild(newPost(0))
    document.body.appendChild(document.createElement('br'))
}