const groupNameInput = document.getElementById("group-name");
const groupPhoneInput = document.getElementById("submit-phone-number");
const topicInput = document.getElementById("topic");
const submitButton = document.getElementById("button-submit");
const numberPeopleInput = document.getElementById("number-people")
const ideaInput = document.getElementById("idea")

const firstNameSurnameInput = document.getElementById("first-name-surname")
const firstEmailInput = document.getElementById("first-email")
const firstLinkedinInput = document.getElementById("first-linkedin")

const secondNameSurnameInput = document.getElementById("second-name-surname")
const secondEmailInput = document.getElementById("second-email")
const secondLinkedinInput = document.getElementById("second-linkedin")

const thirdNameSurnameInput = document.getElementById("third-name-surname")
const thirdEmailInput = document.getElementById("third-email")
const thirdLinkedinInput = document.getElementById("third-linkedin")

const publicKey = "vj_H24e7zkDKt2975";
const serviceId = "service_9jhgila";
const templateId = "template_tr7p3qc";

emailjs.init(publicKey);

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const num = parseInt(numberPeopleInput.value)

    if (num === 1) {
        if (firstNameSurnameInput === '' || firstEmailInput.value === '' || firstLinkedinInput.value === '') {
            submitButton.innerText = "Lütfen Bilgilerinizi Tam Giriniz"
            setTimeout(() => {
                submitButton.innerText = "Gönder"
            }, 3000);
            return;
        } else {
            secondNameSurnameInput = "-"
            secondEmailInput = "-"
            secondLinkedinInput = "-"
            thirdNameSurnameInput = "-"
            thirdEmailInput = "-"
            thirdLinkedinInput = "-"
        }
    } else if (num === 2) {
        if (firstNameSurnameInput === '' || firstEmailInput.value === '' || firstLinkedinInput.value === ''
            || secondNameSurnameInput.value === '' || secondEmailInput.value === '' || secondLinkedinInput.value === '') {
            submitButton.innerText = "Lütfen Bilgilerinizi Tam Giriniz"
            setTimeout(() => {
                submitButton.innerText = "Gönder"
            }, 3000);
            return;
        } else {
            thirdNameSurnameInput = "-"
            thirdEmailInput = "-"
            thirdLinkedinInput = "-"
        }
    } else if (num === 3) {
        if (firstNameSurnameInput === '' || firstEmailInput.value === '' || firstLinkedinInput.value === ''
            || secondNameSurnameInput.value === '' || secondEmailInput.value === '' || secondLinkedinInput.value === ''
            || thirdNameSurnameInput.value === '' || thirdEmailInput.value === '' || thirdLinkedinInput.value === '') {
            submitButton.innerText = "Lütfen Bilgilerinizi Tam Giriniz"
            setTimeout(() => {
                submitButton.innerText = "Gönder"
            }, 3000);
            return;
        }
    }

    const inputField = {
        group_name: groupNameInput.value,
        group_phone_number: groupPhoneInput.value,
        amount_of_people: numberPeopleInput.value,
        topic: topicInput.value,
        first_name: firstNameSurnameInput.value,
        first_email: firstEmailInput.value,
        first_linkedIn: firstLinkedinInput.value,
        second_name: secondNameSurnameInput.value,
        second_email: secondEmailInput.value,
        second_linkedIn: secondLinkedinInput.value,
        third_name: thirdNameSurnameInput.value,
        third_email: thirdEmailInput.value,
        third_linkedIn: thirdLinkedinInput.value,
        idea: ideaInput.value,
        email: "chainacademy.info@gmail.com", // Change the email to your desired recipient
    };

    submitButton.innerText = "Biraz Bekleyiniz...";

    emailjs.send(serviceId, templateId, inputField)
        .then(() => {
            console.log("sdadasdsa")
            submitButton.innerText = "Mesajınız İletilmiştir.";
            groupNameInput.value = ""
            groupPhoneInput.value = ""
            numberPeopleInput.value = ""
            topicInput.value = ""
            firstNameSurnameInput.value = ""
            firstEmailInput.value = ""
            firstLinkedinInput.value = ""
            secondNameSurnameInput.value = ""
            secondEmailInput.value = ""
            secondLinkedinInput.value = ""
            thirdNameSurnameInput.value = ""
            thirdEmailInput.value = ""
            thirdLinkedinInput.value = ""
            ideaInput.value = ""
        })
        .catch((error) => {
            console.log(error);
            submitButton.innerText = "Bir Hata Oluştu...";
        });
});