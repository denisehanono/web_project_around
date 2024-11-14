export default class userInfo {
    constructor(nameSelector, aboutSelector, avatarSelector) {
        this.profileName = document.querySelector(nameSelector);
        this.profileAbout = document.querySelector(aboutSelector);
        this.avatar = document.querySelector(avatarSelector);
    }
    setProfileValue(name, about){
        this.profileName.textContent = name;
        this.profileAbout.textContent = about;
    }
}
