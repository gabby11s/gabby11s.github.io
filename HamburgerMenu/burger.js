const body = document.querySelector("body"),
      videoNav = body.querySelector(".videoNav"),
      toggle = body.querySelector(".arrowToggle");

      toggle.addEventListener("click", () =>{
        videoNav.classList.toggle("open");
      });