let dom = {
    btnLog : document.getElementById('login'),
    modLog : document.getElementById('modLog'),
    btnSign : document.getElementById('signUp'),
    modSign : document.getElementById('modSign'),
    closeLog : document.querySelector('.closeLog'),
    closeSign : document.querySelector('.closeSign'),
    cancelLog : document.querySelector('.cancelLog'),
    cancelSign : document.querySelector('.cancelSign'),
    formLog : document.getElementById('logSign'),
    formSign : document.getElementById('formSign'),
    ugender : document.getElementsByName('ugender'),
    cgender : document.getElementsByName('ugender')
};

//button actions

dom.btnLog.addEventListener('click', () => {
    dom.modLog.style.display = 'block';
    dom.modLog.style.width = 'auto';
    dom.modSign.style.display = 'none';
});

dom.btnSign.addEventListener('click', () => {
    dom.modLog.style.display = 'none';
    dom.modSign.style.display = 'block';
    dom.modSign.style.width = 'auto';
});

dom.closeLog.addEventListener('click', () => {
    dom.modLog.style.display = 'none';
});

dom.closeSign.addEventListener('click', () => {
    dom.modSign.style.display = 'none';
});

dom.cancelLog.addEventListener('click', () => {
    dom.modLog.style.display = 'none';
});

dom.cancelSign.addEventListener('click', () => {
    dom.modSign.style.display = 'none';
});

//submit sign up form

dom.formSign.addEventListener('submit', (e) => {
    let data = {};
    let users;

    //collecting data
    for (let i = 0; i < dom.formSign.length; ++i) {
        let input = dom.formSign[i];

        if (input.name) {
          data[input.name] = input.value;

          if (input.name == 'ugender') {
            data[input.name] = document.querySelector('input[name="ugender"]:checked').value;
          };

          if (input.name == 'cgender') {
            data[input.name] = document.querySelector('input[name="cgender"]:checked').value;
          };

        };
    };

    //calculating user age
    function getAge() {
        let dob = data.dob.split('-');
        let year = Number(dob[0]);
        let month = Number(dob[1] - 1);
        let day = Number(dob[2]);
        let today = new Date();
        let age = today.getFullYear() - year;
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
          age--;
        }
        return age;
    };

    if(getAge() < 18) {
        alert('You are too young!');
    } else {
      if(localStorage.getItem('user') === null) {
          users = [];
      } else {
          users = JSON.parse(localStorage.getItem('user'));

          for(let i = 0; i < users.length; i++) {
            if(data.uname === users[i].uname){
              alert('User exists!');
              return;
            };
          };
      };
    
    users.push(data);
    
    localStorage.setItem('user', JSON.stringify(users));

    dom.modLog.style.display = 'block';
    dom.modLog.style.width = 'auto';
    dom.modSign.style.display = 'none';
    }

    e.preventDefault();
});


//submit login form
dom.formLog.addEventListener('submit', (e) => {
    let data = {};

    //collecting data
    for (let i = 0; i < dom.formLog.length; ++i) {
      let input = dom.formLog[i];

      if (input.name) {
        data[input.name] = input.value;
      };
    };


    if(localStorage.getItem('user') === null) {
        alert('Invalid user!');
    } else {
      let users = JSON.parse(localStorage.getItem('user'));

      for(let i = 0; i < users.length; i++) {
        if(data.uname === users[i].uname && data.psw === users[i].psw) {
          localStorage.setItem('active_user', JSON.stringify(users[i]));
          mainPage();
        } else {
          alert('Invalid user!');
        };
      };
    };

    function mainPage() {
      location.replace("http://127.0.0.1:5500/carousel.html");
    };

    e.preventDefault();
});

//animation part
Splitting({
  by: 'items',
  matching: '.item'
});

CSS.registerProperty({
  name: '--grad',
  syntax: '<angle>',
  inherits: true,
  initialValue: '0deg',
});
