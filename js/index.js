import { getQs } from "/utils/qs.js";
const rezButtonOne = getQs("#rezbutton1");
const rezButtonTwo = getQs("#rezbutton2");
const modalOne = getQs("#modal1");
const modalTwo = getQs("#modal2");
const closeBtn1 = getQs("#closebtn1");
const closeBtn2 = getQs("#closebtn2");
const form1 = getQs("#form1");
const form2 = getQs("#form2");
const sendBtn2 = getQs("#send2");
const sendBtn1 = getQs("#send1");


rezButtonOne.addEventListener("click", function () {
  modalOne.style.display = "block";
});

closeBtn1.addEventListener("click", function () {
  modalOne.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modalOne) {
    modalOne.style.display = "none";
  }
});

rezButtonTwo.addEventListener("click", function () {
  modalTwo.style.display = "block";
});

closeBtn2.addEventListener("click", function () {
  modalTwo.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modalTwo) {
    modalTwo.style.display = "none";
  }
});


sendBtn1.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const formData1 = new FormData(form1);
    const userData1 = Object.fromEntries(formData1);
    const jsonData1 = JSON.stringify(userData1);
    console.log(jsonData1);
    const response = await axios.post('http://localhost:3000/singlerooms', jsonData1, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Server response:', response.data);
    form1.reset();
    alert("Rezervarea a fost făcută cu succes");
    closeBtn1.click();
  } catch (error) {
    console.error('Server error:', error);
  }
});


sendBtn2.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const formData2 = new FormData(form2);
    console.log(formData2);
    const userData2 = Object.fromEntries(formData2);
    console.log(userData2);
    const jsonData2 = JSON.stringify(userData2);
    console.log(jsonData2);
    const response = await axios.post('http://localhost:3000/doublerooms', jsonData2, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Server response:', response.data);
    form2.reset();
    alert("Rezervarea a fost făcută cu succes");
    closeBtn2.click();
  } catch (error) {
    console.error('Server error:', error);
  }
});


















