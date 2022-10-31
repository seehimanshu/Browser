const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont");

let isModalPresent=false;
addBtn.addEventListener('click',function(){
    if(!isModalPresent){
        modalCont.style.display="flex";//modal add hogya screen pr

    }
    else{
        modalCont.style.display="none";

    }
    isModalPresent=!isModalPresent; //toggling effect
})

const allPriorityColor=document.querySelectorAll(".priority-color");

allPriorityColor.forEach(function(colorElement){
    colorElement.addEventListener("click",function(){
        allPriorityColor.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
    });
});

