let navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".header-container__toggle");navMain.classList.remove("main-nav--nojs"),navToggle.classList.remove("header-container__toggle--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?navMain.classList.remove("main-nav--closed"):navMain.classList.add("main-nav--closed")})),navToggle.addEventListener("click",(function(){navToggle.classList.contains("header-container__toggle--closed")?(navToggle.classList.remove("header-container__toggle--closed"),navToggle.classList.add("header-container__toggle--opened")):(navToggle.classList.add("header-container__toggle--closed"),navToggle.classList.remove("header-container__toggle--opened"))}));