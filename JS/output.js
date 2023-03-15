let data = JSON.parse(localStorage.getItem("data"));
data.forEach((obj) => {
    if (obj.id === 1678884028463) {
        data = obj;
    }
});
document.getElementById('name').value = data.name;
document.getElementById('office-address').value = data.office;
document.getElementById('residence-address').value = data.resident;
document.getElementById('mobile').value = data.mobile;
document.getElementById('telephone').value = data.telephone;
document.getElementById('email').value = data.email;
document.getElementById('aadhar-no').value = data.aadharNo;
document.getElementById('gstin').value = data.gstin;
document.getElementById('vehicle-no').value = data.vehicleNo;
document.getElementById('dl-no').value = data.dlNo;
document.getElementById('bank-name').value = data.bankName;
document.getElementById('account-no').value = data.accountNo;
document.getElementById('debit-card-no').value = data.debitCardNo;
document.getElementById('credit-card-no').value = data.creditCardNo;
document.getElementById('passport-no').value = data.passportNo;
document.getElementById('pan-no').value = data.panNo;
document.getElementById('blood-group').value = data.bloodGroup;
document.getElementById('fav-color').value = data.favColor;
document.querySelector(`input[name=gender][value=${data.gender}`).setAttribute('checked', true);
let language = document.querySelectorAll('input[name=language]');
language.forEach((ele => {
    if (data.language.includes(ele.value))
        ele.setAttribute('checked', true);
}));
document.getElementById('dob').value = data.dob;
document.getElementById('name1').value = data.name1;
document.getElementById('mobile1').value = data.mobileNo1;
document.getElementById('telephone1').value = data.telephoneNo1;
document.getElementById('relation').value = data.relation;