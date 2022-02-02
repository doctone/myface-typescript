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
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
