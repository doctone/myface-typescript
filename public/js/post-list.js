document.addEventListener('DOMContentLoaded', function() {
    
    const likeButtons = document.querySelectorAll('.like-click');
    const dislikeButtons = document.querySelectorAll('.dislike-click');

    // console.log(likeButton, dislikeButton);
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
        button.classList.add('clicked-like');
        button.innerHTML = 'You liked this post';
        });
    });
    dislikeButtons.forEach(button => {
    button.addEventListener('click', () => {
    button.classList.add('clicked-dislike');
    button.innerHTML = 'You disliked this post';
        });
    });
});