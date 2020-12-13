class Settings {
    Sound;
    Numbers;

    constructor(sound, numbers) {
        this.Sound = sound;
        this.Numbers = numbers;
    }
}

const settings = new Settings("play", "bin");

export { settings }