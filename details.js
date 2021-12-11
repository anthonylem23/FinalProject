var toggle=false;


document.body.querySelector(".img").addEventListener("click", function (){

    toggle=!toggle;


    if(toggle){
        document.body.querySelector(".details").style.right="0";
    }else{
        document.body.querySelector(".details").style.right="-200px";
    }



})
