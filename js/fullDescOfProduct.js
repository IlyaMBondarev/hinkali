let descriptionBtn=document.querySelector(".dish__description-full"),description=document.querySelector(".dish__table");descriptionBtn.addEventListener("click",()=>{description.classList.contains("dish__table-opened")?(description.classList.remove("dish__table-opened"),descriptionBtn.textContent="Полное описание"):(description.classList.add("dish__table-opened"),descriptionBtn.textContent="Скрыть")});