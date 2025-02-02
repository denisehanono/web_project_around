export default class UserInfo {
    constructor(nameSelector, aboutSelector, avatarSelector) {
        this.profileName = document.querySelector(nameSelector);
        this.profileAbout = document.querySelector(aboutSelector);
        this.avatar = document.querySelector(avatarSelector);
    }
    setProfileValue(name, about){
        this.profileName.textContent = name;
        this.profileAbout.textContent = about;
    }

    setProfileAvatar(avatar){
        this.avatar.src = avatar;
    }
}

// popup-avatar

