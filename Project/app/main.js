Splitting({
    by: 'items',
    matching: '.item'
  })
  
  CSS.registerProperty({
    name: '--grad',
    syntax: '<angle>',
    inherits: true,
    initialValue: '0deg',
  });

  let btnLog = document.getElementById('login'),
      modLog = document.getElementById('modLog'),
      closeLog = document.querySelector('.closeLog'),
      closeSign = document.querySelector('.closeSign'),
      cancelLog = document.querySelector('.cancelLog'),
      cancelSign = document.querySelector('.cancelSign'),
      formLog = document.getElementById('logSign'),
      formSign = document.getElementById('formSign'),
      btnSign = document.getElementById('signUp'),
      modSign = document.getElementById('modSign'),
      ugender = document.getElementsByName('ugender'),
      cgender = document.getElementsByName('ugender');


  btnLog.addEventListener('click', () => {
    modLog.style.display = 'block';
    modLog.style.width = 'auto';
    modSign.style.display = 'none';
  });

  btnSign.addEventListener('click', () => {
    modLog.style.display = 'none';
    modSign.style.display = 'block';
    modSign.style.width = 'auto';
  });

  closeLog.addEventListener('click', () => {
    modLog.style.display = 'none';
  });

  closeSign.addEventListener('click', () => {
    modSign.style.display = 'none';
  });

  cancelLog.addEventListener('click', () => {
    modLog.style.display = 'none';
  });

  cancelSign.addEventListener('click', () => {
    modSign.style.display = 'none';
  });


formSign.addEventListener('submit', (e) => {
  let data = {};

  for (let i = 0, ii = formSign.length; i < ii; ++i) {
    let input = formSign[i];
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

  let users;

  if(localStorage.getItem('user') === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem('user'));
  }

  users.push(data);


  function getAge() {
    let dob = users[0].dob.split('-');
    var year = Number(dob[0]);
    var month = Number(dob[1] - 1);
    var day = Number(dob[2]);
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return age;
}

  localStorage.setItem('user', JSON.stringify(users));

  modLog.style.display = 'block';
  modLog.style.width = 'auto';
  modSign.style.display = 'none';

  e.preventDefault();
});

const users = JSON.parse(localStorage.getItem('user'));
// console.log(users);
