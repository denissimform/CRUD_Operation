/************** Body element ************/
const bodySection = document.getElementById('body-section');

/***************** Error handling ****************/
const errorHandling = (err) => {
    console.log(err);
    bodySection.innerHTML = `<p class='alert alert-dabger'>${err}</p>`;
}

/***************** View page *****************/
const viewContent = (event) => {
    fetch('./HTMLFiles/output.html')
        .then((data) => {
            return data.text();
        })
        .then((content) => {
            const id = event.target.dataset.id;
            bodySection.innerHTML = content;

            /************** Find user data by id ***************/
            let user = JSON.parse(localStorage.getItem(id));

            /************** Form element ************/
            document.getElementById('name').value = user.name;
            document.getElementById('office-address').value = user.office;
            document.getElementById('residence-address').value = user.resident;
            document.getElementById('mobile').value = user.mobile;
            document.getElementById('telephone').value = user.telephone;
            document.getElementById('email').value = user.email;
            document.getElementById('aadhar-no').value = user.aadharNo;
            document.getElementById('gstin').value = user.gstin;
            document.getElementById('vehicle-no').value = user.vehicleNo;
            document.getElementById('dl-no').value = user.dlNo;
            document.getElementById('bank-name').value = user.bankName;
            document.getElementById('account-no').value = user.accountNo;
            document.getElementById('debit-card-no').value = user.debitCardNo;
            document.getElementById('credit-card-no').value = user.creditCardNo;
            document.getElementById('passport-no').value = user.passportNo;
            document.getElementById('pan-no').value = user.panNo;
            document.getElementById('blood-group').value = user.bloodGroup;
            document.getElementById('fav-color').value = user.favColor;
            document.querySelector(`input[name=gender][value=${user.gender}`).setAttribute('checked', true);
            document.querySelectorAll('input[name=language]').forEach((ele => {
                if (user.language.includes(ele.value))
                    ele.setAttribute('checked', true);
            }));
            document.getElementById('dob').value = user.dob;
            document.getElementById('name1').value = user.name1;
            document.getElementById('mobile1').value = user.mobileNo1;
            document.getElementById('telephone1').value = user.telephoneNo1;
            document.getElementById('relation').value = user.relation;
        })
        .catch((err) => {
            errorHandling(err);
        });
}

/***************** Update page *****************/
const updateContent = (event) => {
    fetch('./HTMLFiles/update.html')
        .then((data) => {
            return data.text();
        })
        .then((content) => {
            const id = event.target.dataset.id;
            bodySection.innerHTML = content;

            /************** Find user data by id ***************/
            let user = JSON.parse(localStorage.getItem(id));

            /********** JS will not execute so we have to execute it manually ************/
            const script = document.querySelector('script');
            fetch(script.src)
                .then(data => data.text())
                .then((content) => {
                    eval(content);
                })
                .catch((err) => {
                    errorHandling(err);
                });
        })
        .catch((err) => {
            errorHandling(err);
        });
}

/***************** Delete page *****************/
const deleteContent = (event) => {
    localStorage.removeItem(event.target.dataset.id);
    homeContent();
}

/****************** Home page **********************/
const homeContent = () => {
    /*********** Initial stage *****************/
    bodySection.innerHTML = "";

    /************** Local storage ************/
    const datas = { ...localStorage };

    /************** Show record data inside the body element *****************/
    Object.entries(datas).forEach(([id, data]) => {
        data = JSON.parse(data);
        bodySection.innerHTML += `
            <div class="card mx-2">
                <img src="https://picsum.photos/200" class="card-img-top" alt="Profile image">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.mobile}</p>
                    <div class="w-100 my-2 btn-group">
                        <button class="btn btn-success btn-sm w-50 update-btn mx-1" data-id='${id}'>Update</button>
                        <button class="btn btn-danger btn-sm w-50 delete-btn mx-1" data-id='${id}'>Delete</button>
                    </div>
                    <button class="btn btn-primary btn-sm w-100 view-btn" data-id='${id}'">View</button>
                </div>
            </div>`;
    });

    /******************* View button *****************/
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach((viewBtn) => {
        viewBtn.addEventListener('click', viewContent);
    });

    /******************* Update button ***************/
    const updateBtns = document.querySelectorAll('.update-btn');
    updateBtns.forEach((viewBtn) => {
        viewBtn.addEventListener('click', updateContent);
    });

    /******************* Delete button ***************/
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((viewBtn) => {
        viewBtn.addEventListener('click', deleteContent);
    });
}
document.getElementById('home').addEventListener('click', homeContent);

/************* On first time rendering the page *********************/
homeContent();

/****************** Add record *********************/
const addRecord = () => {
    fetch('../HTMLFiles/input.html')
        .then((data) => {
            return data.text();
        })
        .then((content) => {
            bodySection.innerHTML = content;

            /********** JS will not execute so we have to execute it manually ************/
            const script = document.querySelector('script');
            fetch(script.src)
                .then(data => data.text())
                .then((content) => {
                    eval(content);
                })
                .catch((err) => {
                    errorHandling(err);
                });
        })
        .catch((err) => {
            errorHandling(err);
        });
}
document.getElementById('add-record').addEventListener('click', addRecord);