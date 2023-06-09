let flag = true;
const data = {};
const localData = {};
const isEmail = /[a-zA-Z][a-zA-Z0-9.]*@([a-z]+).([a-z]{2,8})(.[a-z]{2,8})/g;
const isAddress = /[a-zA-Z0-9][a-zA-Z0-9.\-,\s]*/g;
const onlyNumber = /[0-9]*/g;
let profileImage = "";

const getEle = (id) => {
    return document.getElementById(id);
}

const isEmpty = (id) => {
    const ele = getEle(id);

    if (ele.value === "" || ele.value == null) {
        return true;
    } else {
        return false;
    }
}

const checkName = (event) => {
    const err = getEle('invalid-' + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please fill out this field!!";
        flag = false;
    } else if (!(/^[a-zA-Z]([a-zA-Z\s]*)$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please enter valid name!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('name').addEventListener('input', checkName);
getEle('name1').addEventListener('input', checkName);

const checkAddress = (event) => {
    const err = getEle('invalid-' + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please fill out this field!!";
        flag = false;
    } else if (!(/^[a-zA-Z0-9][a-zA-Z0-9.\-,\s]*$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please enter valid address!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('office-address').addEventListener('input', checkAddress);
getEle('residence-address').addEventListener('input', checkAddress);

const checkMobile = (event) => {
    const err = getEle('invalid-' + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please fill out this field!!";
        flag = false;
    } else if (!(/^[6-9][0-9]{9}$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = `Please! Enter your 10 digit valid ${event.target.dataset.name} number!`;
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('mobile').addEventListener('input', checkMobile);
getEle('telephone').addEventListener('input', checkMobile);
getEle('mobile1').addEventListener('input', checkMobile);
getEle('telephone1').addEventListener('input', checkMobile);

const checkEmail = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[a-z][a-z0-9\.\-]*\@[a-z0-9]{2,}\.[a-z]{2,8}(\.{1}[a-z]{2,8})*$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Enter your valid mail id!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('email').addEventListener("input", checkEmail);

const checkAadharCard = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[0-9]{12}$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Enter your 12 digit aadhar card number!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('aadhar-no').addEventListener("input", checkAadharCard);

const checkGSTIN = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[0-9]{2}[A-Z0-9]{10}[0-9][Z][0-9]$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! enter your valid GSTIN number!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('gstin').addEventListener("input", checkGSTIN);

const checkVehicleNo = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/g).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! enter your valid vehicle number!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('vehicle-no').addEventListener("input", checkVehicleNo);

const checkDrivingLicense = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('dl-no').addEventListener("input", checkDrivingLicense);

const checkBankName = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[a-zA-Z]([a-zA-Z\s]*)$/).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please enter valid name!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = false;
    }
}
getEle('bank-name').addEventListener('input', checkBankName);

const checkAccountNo = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[0-9]{9,18}$/).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please enter valid account number!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('account-no').addEventListener('input', checkAccountNo);

const checkCardNo = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[0-9]{16}$/).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = `Please enter your valid ${event.target.name} card number!!`;
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('credit-card-no').addEventListener('input', checkCardNo);
getEle('debit-card-no').addEventListener('input', checkCardNo);

const checkPassportNo = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[1-9][0-9]{7}$/).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please enter your valid passport number!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('passport-no').addEventListener('input', checkPassportNo);

const checkPanCardNo = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[A-Z]{5}[0-9]{4}[A-Z]$/).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please enter your valid pancard number!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('pan-no').addEventListener('input', checkPanCardNo);

const checkBloodGroup = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('blood-group').addEventListener('input', checkBloodGroup);

const checkGender = () => {
    const err = getEle("invalid-gender");
    const genderRadios = document.querySelectorAll("input[name=gender]");
    err.innerText = "";

    if (!document.querySelector("input[name=gender]:checked")) {
        genderRadios.forEach((ele) => {
            ele.classList.add('is-invalid');
        });
        err.innerText = "Please! select any field!!";
        flag = false;
    } else {
        genderRadios.forEach((ele) => {
            ele.classList.remove('is-invalid');
        });
        flag = true;
    }
}
document.querySelectorAll('input[name=gender]').forEach((ele) => {
    ele.addEventListener('change', checkGender);
});

const checkDOB = (event) => {
    const err = getEle("invalid-" + event.target.id);
    err.innerText = "";

    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (new Date(event.target.value).getFullYear() > 2004) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! select date below 2004!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('dob').addEventListener('input', checkDOB);

const checkBox = document.querySelectorAll('input[name=language]');
const checkLanguage = () => {
    const err = getEle('invalid-language');
    err.innerText = "";
    if (document.querySelectorAll('input[name=language]:checked').length < 2) {
        err.innerText = "Please fill out minimum 2 boxes!!";
        checkBox.forEach((ele) => {
            ele.classList.add('is-invalid');
        });
        flag = false;
    } else {
        checkBox.forEach((ele) => {
            ele.classList.remove('is-invalid');
        });
        flag = true;
    }
}
checkBox.forEach((ele) => {
    ele.addEventListener('change', checkLanguage);
});

const checkProfilePic = (event) => {
    const pic = event.target.files[0];
    const picErr = document.getElementById(`invalid-${event.target.id}`);
    const extension = pic.name.split('.').pop();
    const picPre = document.getElementById('profile-pic-preview');
    if (event.target.files.length === 0) {
        picErr.innerHTML = "Please! Fill out this field!!";
        event.target.classList.add('is-invalid');
        picPre.classList.add('d-none');
        flag = false;
    } else if (!['png', 'jpg', 'jpeg'].includes(extension)) {
        picErr.innerHTML = "Please! Choose jpg, jpeg or png extension image!!";
        event.target.classList.add('is-invalid');
        picPre.classList.add('d-none');
        event.target.value = "";
        flag = false;
    } else if (pic.size > 2000000) {
        picErr.innerHTML = "Please! Choose an image less than 2 mb!!";
        event.target.classList.add('is-invalid');
        picPre.classList.add('d-none');
        event.target.value = "";
        flag = false;
    } else {
        picErr.innerHTML = "";
        event.target.classList.remove('is-invalid');
        /**************** Image processing ***************/
        const reader = new FileReader();

        reader.onloadend = (e) => {
            profileImage = e.target.result;
            picPre.src = profileImage;
            picPre.classList.remove('d-none');
        }

        reader.readAsDataURL(pic);
        flag = true;
    }
}
document.getElementById('profile-pic').addEventListener('change', checkProfilePic);

const checkRelation = (event) => {
    const err = getEle('invalid-relation');
    err.innerText = "";
    if (isEmpty(event.target.id)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! fill out this field!!";
        flag = false;
    } else if (!(/^[a-zA-Z]([a-zA-Z\s\.\-]*)$/).test(event.target.value)) {
        event.target.classList.add('is-invalid');
        err.innerText = "Please! enter valid value(a-z, A-Z, ., -, space)!!";
        flag = false;
    } else {
        event.target.classList.remove('is-invalid');
        flag = true;
    }
}
getEle('relation').addEventListener('input', checkRelation);

const submitForm = () => {
    data.name = document.getElementById('name');
    data.office = document.getElementById('office-address');
    data.resident = document.getElementById('residence-address');
    data.mobile = document.getElementById('mobile');
    data.telephone = document.getElementById('telephone');
    data.email = document.getElementById('email');
    data.aadharNo = document.getElementById('aadhar-no');
    data.gstin = document.getElementById('gstin');
    data.vehicleNo = document.getElementById('vehicle-no');
    data.dlNo = document.getElementById('dl-no');
    data.bankName = document.getElementById('bank-name');
    data.accountNo = document.getElementById('account-no');
    data.debitCardNo = document.getElementById('debit-card-no');
    data.creditCardNo = document.getElementById('credit-card-no');
    data.passportNo = document.getElementById('passport-no');
    data.panNo = document.getElementById('pan-no');
    data.bloodGroup = document.getElementById('blood-group');
    data.favColor = document.getElementById('fav-color');
    let gender = document.querySelector('input[name=gender]:checked');
    let language = document.querySelectorAll('input[name=language]:checked');
    let pic = document.getElementById('profile-pic');
    data.dob = document.getElementById('dob');
    data.name1 = document.getElementById('name1');
    data.mobileNo1 = document.getElementById('mobile1');
    data.telephoneNo1 = document.getElementById('telephone1');
    data.relation = document.getElementById('relation');
    Object.values(data).map((ele) => {
        if (isEmpty(ele.id)) {
            getEle('invalid-' + ele.id).innerText = "Please fill out this field!!";
            ele.classList.add('is-invalid');
            flag = false;
        }
    });
    if (!gender) {
        document.querySelectorAll("input[name=gender]").forEach((ele) => {
            ele.classList.add('is-invalid');
        });
        getEle('invalid-gender').innerText = "Please! select any field!!";
        flag = false;
    }

    if (language.length < 2) {
        document.querySelectorAll('input[name=language]').forEach((ele) => {
            ele.classList.add('is-invalid');
        });
        getEle('invalid-language').innerText = "Please fill out minimum 2 boxes!!";
        flag = false;
    }

    if (pic.files.length === 0) {
        document.getElementById('invalid-profile-pic').innerHTML = "Please! Fill out this field!!";
        pic.classList.add('is-invalid');
    }

    if (flag) {
        localData.name = data.name.value;
        localData.office = data.office.value;
        localData.resident = data.resident.value;
        localData.mobile = data.mobile.value;
        localData.telephone = data.telephone.value;
        localData.email = data.email.value;
        localData.aadharNo = data.aadharNo.value;
        localData.gstin = data.gstin.value;
        localData.vehicleNo = data.vehicleNo.value;
        localData.dlNo = data.dlNo.value;
        localData.bankName = data.bankName.value;
        localData.accountNo = data.accountNo.value;
        localData.debitCardNo = data.debitCardNo.value;
        localData.creditCardNo = data.creditCardNo.value;
        localData.passportNo = data.passportNo.value;
        localData.panNo = data.panNo.value;
        localData.bloodGroup = data.bloodGroup.value;
        localData.favColor = data.favColor.value;
        localData.gender = gender.value;
        localData.language = [];
        language.forEach((ele) => {
            localData.language.push(ele.value);
        });
        localData.dob = data.dob.value;
        localData.profileImage = profileImage;
        localData.name1 = data.name1.value;
        localData.mobileNo1 = data.mobileNo1.value;
        localData.telephoneNo1 = data.telephoneNo1.value;
        localData.relation = data.relation.value;

        localStorage.setItem(new Date().getTime(), JSON.stringify(localData));
        homeContent();
    }
}
document.getElementById('form-submit-btn').addEventListener('click', submitForm);