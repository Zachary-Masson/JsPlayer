export const players = [];

class JsPlayerElement extends HTMLElement {
  _disk;
  _title;
  _author;
  _timeline;
  _time;
  _playlist;
  _songs = [];
  _controller;
  _icons = [];

  _onBackward;
  _onPlayPause;
  _onForward;
  _onSelectSong;

  constructor() {
    super();
    players.push(this);

    this.innerHTML = `
      <div class="js-player-container js-player-element">
        <div class="js-player-top js-player-element">
          <div class="js-player-viewer js-player-element">
            <img class="js-player-disk js-player-element" src="" />
            <div class="js-player-info js-player-element">
              <p class="js-player-info-title js-player-element"></p>
              <p class="js-player-info-author js-player-element"></p>
              <div class="js-player-info-timeline js-player-element">
                <div class="js-player-info-timeline-indicator js-player-element"></div>
              </div>
              <p class="js-player-info-time js-player-element">00:00 - 00:00</p> 
            </div>
            <div class="js-player-controller js-player-element">
              <button class="js-player-element" data-type="backward">
                <ion-icon name="play-skip-back-outline"></ion-icon>
              </button>
              <button class="js-player-element" data-type="play-pause">
                <ion-icon id="js-player-icon-play" name="play-outline"></ion-icon>
                <ion-icon id="js-player-icon-pause" class="js-player-none" name="pause-outline"></ion-icon>
              </button>
              <button class="js-player-element" data-type="forward">
                <ion-icon name="play-skip-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>  
        <div class="js-player-playlist js-player-element">
            <div class="js-player-playlist-content js-player-element">

            </div>
        </div>      
      </div>
    `;

    this._disk = this.querySelector(".js-player-disk");
    this._title = this.querySelector(".js-player-info-title");
    this._author = this.querySelector(".js-player-info-author");
    this._timeline = this.querySelector(".js-player-info-timeline-indicator");
    this._time = this.querySelector(".js-player-info-time");
    this._playlist = this.querySelector(".js-player-playlist-content");
    this._controller = this.querySelector(".js-player-controller");
    this._icons[0] = this.querySelector("#js-player-icon-play");
    this._icons[1] = this.querySelector("#js-player-icon-pause");

    const buttons = this.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switch (btn.getAttribute("data-type")) {
          case "backward":
            this._onBackward();
            break;
          case "play-pause":
            this._onPlayPause();
            break;
          case "forward":
            this._onForward();
            break;
        }
      });
    });
  }

  /**
   *
   * @param {{index: number, title: string, author: string, file: string, picture: string, active: boolean, audio: HTMLAudioElement}[]} playlist
   */
  updatePlaylist(playlist) {
    for (const song of this._songs) {
      song.remove();
    }

    this._songs = [];

    for (const song of playlist) {
      const songElement = document.createElement("div");
      songElement.classList.add("js-player-playlist-song");

      if (song.active) songElement.classList.add("js-player-song-active");
      else songElement.classList.remove("js-player-song-active");

      this._playlist.appendChild(songElement);

      songElement.innerHTML = `
        <img class="js-player-playlist-song-img js-player-element" src="${song.picture}" />
        <div class="js-player-playlist-song-info js-player-element">
          <p class="js-player-playlist-song-info-title js-player-element">${song.title}</p>
          <p class="js-player-playlist-song-info-author js-player-element">${song.author}</p>
        </div>
      `;

      this._songs.push(songElement);

      songElement.onclick = () => {
        this._onSelectSong(song.index);
      };
    }
  }

  play() {
    this._disk.classList.add("play");
    const [playIcon, pauseIcon] = this._icons;
    playIcon.classList.add("js-player-none");
    pauseIcon.classList.remove("js-player-none");
  }

  pause() {
    const [playIcon, pauseIcon] = this._icons;
    playIcon.classList.remove("js-player-none");
    pauseIcon.classList.add("js-player-none");
  }

  isLoad() {
    this._controller.style.display = "flex";
  }

  /* Setters */

  set OnBackward(exec) {
    this._onBackward = exec;
  }

  set OnPlayPause(exec) {
    this._onPlayPause = exec;
  }

  set OnForward(exec) {
    this._onForward = exec;
  }

  set OnSelectSong(exec) {
    this._onSelectSong = exec;
  }
}

export default JsPlayerElement;
