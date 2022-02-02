document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.
    const postImage = document.getElementsByClassName("user-post-card");
    if (postImage.length !== 0){
        postImage[0].addEventListener("click", function() {
            console.log('Event Listener')
    
        });
    }

});
function whenClicked() {
    console.log("in the HTML");
    
    const posts = document.getElementsByClassName("user-post-card");

    for (const post of posts) {
        post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
    // posts.forEach(function(post) {
        
    //     post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
   
    // });


}
function displayNav() {
    const links = document.querySelector(".nav-item");
    if (!links.classList.contains('clicked')) {
        links.style.width = "40vw";
        links.classList.add('clicked');
        const icon = document.querySelector('.icon')

        let newIcon = document.createElement('i');
        newIcon.classList.add('fas fa-times');
        icon.appendChild(newIcon);


    } else {
        links.classList.remove('clicked');
        links.style.width = "0px";
        const icon = document.querySelector('.icon')
        icon.innerHTML = `<i class="fa fa-bars"></i>`
        }
  }
