let active_user = JSON.parse(localStorage.getItem('active_user'));

class Profiles {
    constructor() {
        this.usersCount = 50;
        this.gender = active_user.cgender;
    }

    async getProfiles() {
        const profileResponse = await fetch(`https://randomuser.me/api/?gender=${this.gender}&results=${this.usersCount}`);

        const profiles = await profileResponse.json();
        
        return profiles;
    }
};
  
