// start animation width 
 let section =document.querySelector(".SKILLS");
 let spans = document.querySelectorAll(".box span")

 window.onscroll = function() {
     if(window.scrollY >= section.offsetTop) {
      console.log("hi")
      spans.forEach((span) => {
          span.style.width = span.dataset.width
      })
     }
 }
 console.log(section)
 // end animation width 
