window.addEventListener("load",function(){
    
    let btnTop = document.querySelector(".scroll-top");

     function topFunction() {
        document.documentElement.scrollTop = 0; //Chrome, Firefox, Internet Explorer y Opera
        document.body.scrollTop = 0; //Safari
    }

    btnTop.addEventListener("click", topFunction);
});











