# 🎵 JsPlayer v1.1

A library that allows you to integrate an MP3 player with playlist management in just a few lines of code.

## 🌟 Overview

[See the demo](https://zachary-masson.github.io/JsPlayer/)

This project offers an easy and fast integration of an MP3 player with playlist management, without any additional effort. You can add a fully functional music player in just a few lines of code.
![image](https://github.com/Zachary-Masson/JsPlayer/assets/66486552/3c11ec2c-e7a1-40db-8449-abdde9f2913c)

## ✨ Features

- 🎵 Simple and fast integration.
- 📜 Playlist management.
- ▶️ Playback controls (play, pause, next, previous).
- 🎶 Support for multiple MP3 formats.
- 💄 Customize Color and style
- 🌐 Compatible with major browsers.

## 🚀 Installation

Add the library to your project using Jsdelivr:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/Zachary-Masson/JsPlayer/js-player.css"
/>
```

```js
import JsPlayer from "https://cdn.jsdelivr.net/gh/Zachary-Masson/JsPlayer/js-player.js";
```

## 🛠️ Usage

Here's an example of using the library to integrate an MP3 player with a playlist:

```javascript
import JsPlayer from "https://cdn.jsdelivr.net/gh/Zachary-Masson/JsPlayer/js-player.js";

const player = new JsPlayer("player", {
  volume: 0.2,
  changeFavicon: boolean,
  changeTitle: boolean,
  style: "basic" | "compact",
  color: {
    r: number,
    g: number,
    b: number,
  },
});

player.setPlayList([
  {
    title: "String",
    author: "String",
    file: "Path (String)",
    picture: "Path (String)",
  },
]);
```

## 🎨 Customization

You can customize the player using the following options during initialization:

- `volume`: Initial volume (number between 0 and 1).
- `changeFavicon`: Allows the library to change the page's favicon to that of the music image.
- `changeTitle`: Allows the library to change the page's title to that of the music.

## 📋 Example

Here's a complete example of integration into an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Js Player</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

    <!-- Include lib JsPlayer Css -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/Zachary-Masson/JsPlayer/js-player.css"
    />
  </head>
  <body>
    <js-player id="player"></js-player>

    <!-- Example Script -->
    <script type="module" src="./script.js"></script>
  </body>
</html>
```

```js
import JsPlayer from "https://cdn.jsdelivr.net/gh/Zachary-Masson/JsPlayer/js-player.js";

const player = new JsPlayer("player", {
  volume: 0.2,
  changeFavicon: true,
  changeTitle: true,
  style: "compact",
  color: {
    r: 46,
    g: 6,
    b: 30,
  },
});

player.setPlayList([
  {
    title: "Unity",
    author: "TheFatRat",
    file: "./assets/songs/TheFatRat - Unity.mp3",
    picture: "https://i1.sndcdn.com/artworks-000092218799-v6jtl5-t500x500.jpg",
  },
  {
    title: "Break The Silence",
    author: "MonsterCat",
    file: "./assets/songs/BreakTheSilence - MonsterCat.mp3",
    picture:
      "https://cdx.monstercat.com/?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2FMCX004-8%2Fcover%3F8ce3c1f6-953c-4f28-b6c9-66ac6bcc7886&width=600",
  },
  {
    title: "Pepas",
    author: "Farruko",
    file: "./assets/songs/Pepas - Farruko.mp3",
    picture:
      "https://cdns-images.dzcdn.net/images/cover/1b88acc901e3beff139b5b4eea025802/500x500.jpg",
  },
  {
    title: "Saiyan",
    author: "Heuss L'Enfoiré",
    file: "./assets/songs/Heuss Enfoire - Saiyan.mp3",
    picture: "https://i.scdn.co/image/ab67616d0000b273a557147daf896f6c80b79d58",
  },
  {
    title: "SALOU",
    author: "GAMBINO",
    file: "./assets/songs/SALOU - GAMBINO.mp3",
    picture:
      "https://images.genius.com/03e5f0bb1c45fa4341482513adc1135d.640x640x1.jpg",
  },
  {
    title: "Time Time",
    author: "Squeezie",
    file: "./assets/songs/Time Time - Trei Degete.mp3",
    picture:
      "https://cdns-images.dzcdn.net/images/cover/3936f4dca70356fa037d9a976662355d/500x500.jpg",
  },
]);
```

## 🤝 Contributions

Contributions are welcome! If you have any improvement ideas or bugs to report, please submit an issue or pull request.

## 👨‍💻 Author

- **Zachary Masson** - _Lead Developer_ - [GitHub Profile](https://github.com/Zachary-Masson)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 💬 Acknowledgements

- 🙏 Thanks to all contributors and users of the library.
