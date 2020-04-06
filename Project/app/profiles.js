let active_user = JSON.parse(localStorage.getItem('active_user'));

class Profiles {
    constructor() {
        this.usersCount = 20;
        this.gender = active_user.cgender;
    }

    async getProfiles() {
        const profileResponse = await fetch(`https://randomuser.me/api/?gender=${this.gender}&results=${this.usersCount}`);

        const profiles = await profileResponse.json();

        return profiles;
    }
};

// let allProfiles = new Profiles;
// let coupleUsers = [];


// allProfiles.getProfiles()
//         .then(profiles => {
//             for(let i = 0; i < profiles.results.length; i++) {
//                 if(profiles.results[i].dob.age <= Number(active_user.ageTo) && profiles.results[i].dob.age >= Number(active_user.ageFrom)) {
//                 coupleUsers.push(profiles.results[i]);
//             }
//             }
//         });


// console.log(coupleUsers)
       

