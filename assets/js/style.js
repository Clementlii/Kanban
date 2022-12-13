const btnToggle = document.querySelector("#switch");

btnToggle.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
  }
});

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

const modalContainerPhone = document.querySelector(".modal-containerPhone");
const modalTriggersPhone = document.querySelectorAll(".modal-triggerPhone ");

modalTriggersPhone.forEach((trigger) =>
  trigger.addEventListener("click", toggleModalPhone)
);

function toggleModalPhone() {
  modalContainerPhone.classList.toggle("active");
}

const modalContainerTime = document.querySelector(".modal-containerTime");
const modalTriggersTime = document.querySelectorAll(".modal-triggerTime");

modalTriggersTime.forEach((trigger) =>
  trigger.addEventListener("click", toggleModalTime)
);

function toggleModalTime() {
  modalContainerTime.classList.toggle("active");
}
