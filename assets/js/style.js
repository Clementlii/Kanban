//Modal1
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

//Modal2
const modalContainerPhone = document.querySelector(".modal-containerPhone");
const modalTriggersPhone = document.querySelectorAll(".modal-triggerPhone ");

modalTriggersPhone.forEach((trigger) =>
  trigger.addEventListener("click", toggleModalPhone)
);

function toggleModalPhone() {
  modalContainerPhone.classList.toggle("active");
}

//Modal3
const modalContainerTime = document.querySelector(".modal-containerTime");
const modalTriggersTime = document.querySelectorAll(".modal-triggerTime");

modalTriggersTime.forEach((trigger) =>
  trigger.addEventListener("click", toggleModalTime)
);

function toggleModalTime() {
  modalContainerTime.classList.toggle("active");
}
