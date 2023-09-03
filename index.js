class SoundPlayer {
  constructor() {
    // Массив с ID звуков
    this.sounds = [
      "sound1",
      "sound2",
      "sound3",
      "sound4",
      "sound5",
      "sound6",
      "sound7",
      "sound8",
      "sound9",
      "sound9",
    ];
  }

  playRandomSound() {
    const randomSoundId =
      this.sounds[Math.floor(Math.random() * this.sounds.length)];
    const audio = document.getElementById(randomSoundId);
    audio.currentTime = 0;
    audio.play();
  }
}

// Используем класс
const soundPlayer = new SoundPlayer();

document.querySelector("button").addEventListener("click", () => {
  soundPlayer.playRandomSound();
});
