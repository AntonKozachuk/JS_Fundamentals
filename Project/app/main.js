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
      closeLog = document.getElementById('close'),
      cancelLog = document.querySelector('.cancel'),
      form = document.querySelector('.modal-content');

  btnLog.addEventListener('click', () => {
    modLog.style.display = 'block';
    modLog.style.width = 'auto';
  });

  closeLog.addEventListener('click', () => {
    modLog.style.display = 'none';
  });

  cancelLog.addEventListener('click', () => {
    modLog.style.display = 'none';
  });


form.addEventListener('submit', (e) => {
  let data = {};

  for (let i = 0, ii = form.length; i < ii; ++i) {
    let input = form[i];
    if (input.name) {
      data[input.name] = input.value;
    };
  };

  let users;

  if(localStorage.getItem('user') === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem('user'));
  }

  users.push(data);

  localStorage.setItem('user', JSON.stringify(users));

    e.preventDefault();
});

const users = JSON.parse(localStorage.getItem('user'));
console.log(users[0].uname);
console.log(users[0].psw);