let dom = {
    changeBtn : document.getElementById('change'),
    modChange : document.getElementById('modChange'),
    formChange : document.getElementById('formChange'),    
    closeSign : document.querySelector('.closeSign'),
    cancelChange : document.querySelector('.cancelChange'),
    btnSubm : document.querySelector('.btnSubm'),
    infoBtn : document.getElementById('info'),
    modInfo : document.getElementById('modInfo'),
    closeInfo : document.querySelector('.closeInfo'),
    nameDiv : document.getElementById('name'),
    dobDiv : document.getElementById('dob'),
    gendDiv : document.getElementById('ugender'),
    lookDiv : document.getElementById('lookFor'),
}

dom.closeSign.addEventListener('click', () => {
    dom.modChange.style.display = 'none';
});

dom.cancelChange.addEventListener('click', () => {
    dom.modChange.style.display = 'none';
});

dom.changeBtn.addEventListener('click', () => {
    dom.modChange.style.display = 'block';
})

dom.formChange.addEventListener('submit', (e) => {
    let data = {};

    //collecting data
    for (let i = 0; i < dom.formChange.length; ++i) {
        let input = dom.formChange[i];

        if (input.name) {
        data[input.name] = input.value;

        if (input.name == 'cgender') {
            data[input.name] = document.querySelector('input[name="cgender"]:checked').value;
        };};
    };

    if(Number(data.ageFrom) < 18 || Number(data.ageFrom) > Number(data.ageTo)) {
        alert('Please enter correct age parameters!');
    } else {
        let activeUser = JSON.parse(localStorage.getItem('active_user'));

        activeUser.cgender = data.cgender;
        activeUser.ageFrom = data.ageFrom;
        activeUser.ageTo = data.ageTo;

        let users = JSON.parse(localStorage.getItem('user'));

        for(let i = 0; i < users.length; i++) {
            if(activeUser.uname === users[i].uname && activeUser.psw === users[i].psw) {
            users[i] = activeUser;
            localStorage.setItem('user', JSON.stringify(users));
        }}

        localStorage.setItem('active_user', JSON.stringify(activeUser));

        dom.modChange.style.display = 'none';

        window.location.reload();
    }

    e.preventDefault();
});

dom.infoBtn.addEventListener('click', () => {
    dom.modInfo.style.display = 'block';
    let activeUser = JSON.parse(localStorage.getItem('active_user'));
    dom.nameDiv.textContent = activeUser.uname;
    dom.dobDiv.textContent = activeUser.dob;
    dom.gendDiv.textContent = activeUser.ugender;
    dom.lookDiv.textContent = activeUser.cgender + ', age from: ' + activeUser.ageFrom + ' to ' + activeUser.ageTo;
});

dom.closeInfo.addEventListener('click', () => {
    dom.modInfo.style.display = 'none';
});

