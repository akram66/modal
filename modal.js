const showModalBtn=document.querySelector(".showModal");
const modal=document.querySelector(".modal");
const backDropBtn=document.querySelector(".backdrop");
const closeBtn=document.querySelector(".close-modal");
const confirmBtn=document.querySelector(".confirm-modal")

showModalBtn.addEventListener("click",()=>{
modal.style.opacity="1";
modal.style.transform="translateY(20vh)";
backDropBtn.style.display="block";
});
function closeModalFunc(){
    modal.style.opacity="0";
    modal.style.transform="translateY(-100vh)";
    backDropBtn.style.display="none";
}

closeBtn.addEventListener("click",closeModalFunc);
confirmBtn.addEventListener("click",closeModalFunc);
   





