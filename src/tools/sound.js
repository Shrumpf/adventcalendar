function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.loop = true;
    this.sound.volume = 0.2;
    this.sound.playbackRate = 0.9;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    };

    this.pause = function () {
        this.sound.pause();
    };
    this.toggle = function () {
        if (this.sound.paused) {
            this.sound.play();
        } else {
            this.sound.pause();
        }
    }
}
const backgroundmusic = new sound("sounds/Christmas_Eve_By_Filipps_Music_Team_Com.mp3");
export { sound, backgroundmusic };