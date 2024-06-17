// import icon
import "./src/import-icon.js";
import JsPlayerElement, { players } from "./src/js-player-element.js";

customElements.define("js-player", JsPlayerElement);

class JsPlayer {
  /**
   * @type {JsPlayerElement} _element
   */
  _element;

  /**
   * @type {{volume: number, style: "basic" | "compact", color: {r: number, g: number, b: number, changeTitle: boolean, changeFavicon: boolean}} _config
   */
  _config;

  /**
   * @type {{index: number, title: string, author: string, file: string, picture: string, active: boolean, audio: HTMLAudioElement}[]} _playlist;
   */
  _playlist = [];

  /**
   * @type {{index: number, title: string, author: string, file: string, picture: string, active: boolean, audio: HTMLAudioElement}} _currentSong;
   */
  _currentSong;

  /**
   *
   * @param {string} id
   * @param {{volume: number, style: "basic" | "compact", color: {r: number, g: number, b: number}, changeTitle: boolean, changeFavicon: boolean}} config
   */
  constructor(id, config) {
    this._element = players.find((e) => e.id === id);
    this._config = config;
    this._element.start(this._config.style || "basic", this._config.color);
  }

  /**
   * @private
   */
  main() {
    this._currentSong = this._playlist[0];
    this._currentSong.active = true;
    this.setSongInfo();
    this.updatePlaylist();

    this.buttonHandler();
    this.songManager();
  }

  /**
   * @private
   */
  songManager() {
    this._currentSong.audio.oncanplaythrough = this.OnSongIsLoad(this);
    this._currentSong.audio.ontimeupdate = this.OnSongTimeUpdate(this);
    document.addEventListener("keydown", (e) => {
      if (e.key === "MediaPlayPause") {
        if (this._currentSong.audio.paused) this.OnPlayPress();
        else this.OnPausePress();
      }
    });

    this._currentSong.audio.onended = () => {
      this.OnPlayNext();
    };
  }

  /**
   * @private
   */
  buttonHandler() {
    // Play/Pause Button
    this._element.OnPlayPause = () => {
      if (this._currentSong.audio.paused) this.OnPlayPress();
      else this.OnPausePress();
    };

    // Next Button
    this._element.OnForward = () => {
      this.OnPlayNext();
    };

    // Previous Button
    this._element.OnBackward = () => {
      this.OnPlayPrevious();
    };

    // Select Song
    this._element.OnSelectSong = (index) => {
      this.OnSelectSong(index);
    };
  }

  /* Song Event */

  /**
   * @private
   */
  OnSongIsLoad(_this) {
    return () => {
      _this._element.isLoad();
    };
  }

  /**
   * @private
   */
  OnSongTimeUpdate(_this) {
    return () => {
      _this.updateTime();
      _this.updateTimeLine();
    };
  }

  /**
   * @private
   */
  OnPlayPress() {
    this._element.play();
    this._currentSong.audio.play();
  }

  /**
   * @private
   */
  OnPausePress() {
    this._element.pause();
    this._currentSong.audio.pause();
  }

  /**
   * @private
   */
  OnPlayNext() {
    const nextSong = this._playlist.find(
      (el) => el.index === this._currentSong.index + 1
    );

    this.OnPausePress();
    this._currentSong.active = false;
    this._currentSong.audio.currentTime = 0;

    if (nextSong) this._currentSong = nextSong;
    else this._currentSong = this._playlist[0];

    this._currentSong.active = true;
    this.songManager();
    this.setSongInfo();
    this.updatePlaylist();
    this.OnPlayPress();
  }

  /**
   * @private
   */
  OnPlayPrevious() {
    const previouSong = this._playlist.find(
      (el) => el.index === this._currentSong.index - 1
    );

    if (!previouSong) return;

    this.OnPausePress();
    this._currentSong.active = false;
    this._currentSong.audio.currentTime = 0;

    this._currentSong = previouSong;

    this._currentSong.active = true;
    this.songManager();
    this.setSongInfo();
    this.updatePlaylist();
    this.OnPlayPress();
  }

  /**
   * @private
   */
  OnSelectSong(index) {
    const song = this._playlist.find((el) => el.index === index);

    if (!song) return;

    this.OnPausePress();
    this._currentSong.active = false;
    this._currentSong.audio.currentTime = 0;

    this._currentSong = song;

    this._currentSong.active = true;
    this.songManager();
    this.setSongInfo();
    this.updatePlaylist();
    this.OnPlayPress();
  }

  /* Private Methods */

  /**
   * @private
   */
  setSongInfo() {
    const { title, author, picture } = this._currentSong;

    this._element._title.innerHTML = title;
    this._element._author.innerHTML = author;
    this._element._disk.src = picture;

    if (this._config.changeFavicon) {
      const fav = document.querySelector(`link[type="image/x-icon"]`);
      fav.href = picture;
    }

    if (this._config.changeTitle) {
      document.title = `${title} - ${author}`;
    }
  }

  /**
   * @private
   */
  updatePlaylist() {
    this._element.updatePlaylist(this._playlist);
  }

  /**
   * @private
   */
  updateTime() {
    const { currentTime, duration } = this._currentSong.audio;
    const currentTimeFormat = this.formatTime(currentTime);
    const durationTimeFormat = this.formatTime(duration);
    this._element._time.innerHTML = `${currentTimeFormat} - ${durationTimeFormat}`;
  }

  /**
   * @private
   */
  updateTimeLine() {
    const { currentTime, duration } = this._currentSong.audio;
    const percentage = this.percentage(currentTime, duration);
    this._element._timeline.style.width = `${percentage}%`;
  }

  /* Private Methods Fonctionnal */

  /**
   * @private
   * @param {number} time
   */
  formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  /**
   * @private
   * @param {number} partialValue
   * @param {number} totalValue
   */
  percentage(partialValue, totalValue) {
    return 100 * (partialValue / totalValue);
  }

  /* Public Methods */

  /**
   *
   * @param {{title: string, author: string, file: string, picture: string}[]} playlist
   */
  setPlayList(playlist) {
    let index = 0;
    for (const song of playlist) {
      const audio = new Audio(song.file);
      audio.volume = this._config.volume;
      song["audio"] = audio;
      song["index"] = index;
      song["active"] = false;
      index++;
    }
    this._playlist = playlist;
    this.main();
  }
}

export default JsPlayer;
