# 🎵 JavaScript Music Player

<p align="center">
  <img src="https://media.giphy.com/media/13k4VSc3ngLPUY/giphy.gif" width="600" />
</p>

A modern, lightweight, and interactive **Music Player** built using **HTML**, **CSS**, and **JavaScript**.
This project demonstrates concepts like DOM manipulation, event listeners, audio APIs, playlist management, and responsive UI design.

---

## 🚀 Features

✔ Play / Pause functionality
✔ Next / Previous track controls
✔ Seek bar with real-time progress
✔ Volume control slider
✔ Auto-play next song
✔ Loop & Shuffle modes
✔ Song title, artist, and poster display
✔ Playlist support
✔ Keyboard shortcuts (optional)
✔ Fully responsive UI

---

## 🛠 Tech Stack

| Technology     | Purpose                                |
| -------------- | -------------------------------------- |
| **HTML5**      | Structure of the player UI             |
| **CSS3**       | Styling, animations, responsive layout |
| **JavaScript** | Music controls, events, logic          |
| **Audio API**  | Playing and controlling music playback |

---

## 📁 Folder Structure

```
Music-Player-JS/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── music/
└── README.md
```

---

## 📜 Code Snippets

### 🎧 Initialize Audio Player

```javascript
let currentSong = 0;
let audio = new Audio("assets/music/song1.mp3");
```

### ▶ Play Song

```javascript
function playMusic() {
  audio.play();
  isPlaying = true;
}
```

### ⏭ Next Song

```javascript
function nextSong() {
  currentSong = (currentSong + 1) % playlist.length;
  loadSong(currentSong);
  playMusic();
}
```

---

## ▶ How to Run

1️⃣ Clone the repository:

```
git clone https://github.com/your-username/music-player-js.git
cd music-player-js
```

2️⃣ Open the app in your browser:

```
open index.html
```

(Or double-click the file)

---

## 🎨 Future Enhancements

✨ Dark / Light theme toggle
✨ Visualizer(animation reacting to music beats)
✨ Local storage for playlist persistence
✨ Drag-and-drop custom playlist
✨ Online streaming support

---

<p align="center">
  <b>Music is not just heard — it is experienced. 🎧✨</b>
</p>
