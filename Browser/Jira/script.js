var uid=new ShortUniqueId();
const addBtn=document.querySelector(".add-btn");
const modalCont=document.querySelector(".modal-cont");
const allPriorityColor=document.querySelectorAll(".priority-color");
let colors=["lightpink","lightgreen","lightblue","black"];
let modalPriorityColor=colors[colors.length-1];//black
let textAreaCont=document.querySelector(".textarea-cont");
const mainCont=document.querySelector(".main-cont");
let ticketArr=[];
let toolBoxColors=document.querySelectorAll(".color");
let removeBtn=document.querySelector(".remove-btn");

let lockClass="fa-lock";
let unlockClass="fa-lock-open";
//to open close modal container
let isModalPresent=false;
addBtn.addEventListener('click',function(){
    if(!isModalPresent){
        modalCont.style.display="flex";//modal add hogya screen pr

    }
    else{
        modalCont.style.display="none";

    }
    isModalPresent=!isModalPresent; //toggling effect
});


//tp remove and add active class from each priority color of modal container
allPriorityColor.forEach(function(colorElement){
    colorElement.addEventListener("click",function(){
        allPriorityColor.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove("active");
        });
        colorElement.classList.add("active");
        modalPriorityColor=colorElement.classList[0];
    });
});

// to generate and display a ticket
modalCont.addEventListener("keydown",function(e){
    let key =e.key;
    if(key=="Shift"){
        console.log(modalPriorityColor);
        console.log(textAreaCont.value);
        createTicket(modalPriorityColor,textAreaCont.value);
        modalCont.style.display="none";
        isModalPresent=false;
        textAreaCont.value="";
        allPriorityColor.forEach(function(colorElem){
            colorElem.classList.remove("active");
        });
    }
});

//functions to create new ticket
function createTicket(ticketColor,data,ticketId){
    let id=ticketId || uid();
    let ticketCont=document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML=  `
        <div class="ticket-color ${ticketColor} "></div>
        <div class="ticket-id">${id}</div>
        <div class="task-area">${data}</div>
        <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
        </div>
        `;

        mainCont.appendChild(ticketCont);

        handleRemoval(ticketCont,id);
        handleColor(ticketCont,id);
        handleLock(ticketCont,id);

        //if ticket is being created for the first time ,then ticketID would be undefined
        if(!ticketId){
            ticketArr.push({ticketColor,data,ticketId});
            localStorage.setItem("tickets",JSON.stringify(ticketArr));

        }
};



