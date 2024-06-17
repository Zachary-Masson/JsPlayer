import JsPlayer from "../../../js-player.js";

const player = new JsPlayer("player", {
  volume: 0.2,
  changeFavicon: true,
  changeTitle: true,
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
