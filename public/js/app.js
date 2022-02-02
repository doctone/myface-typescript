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
    const icon = document.querySelector("i");
    if (!links.classList.contains('clicked')) {
        links.style.width = "40vw";
        // links.classList.toggle('fa-times');
        links.classList.add('fa-close');
        links.classList.add('clicked');
        links.classList.remove('fa-bars');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-close');
    } else {
        // links.classList.toggle('fa-bars');
        links.classList.remove('clicked');
        links.classList.remove('fa-close');
        links.classList.add('fa-bars');
        links.style.width = "0px";
        icon.classList.remove('fa-close');
        icon.classList.add('fa-bars')
        }
  }
