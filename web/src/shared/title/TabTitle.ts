export class TabTitle {
  private _isBlinking = true;
  blinkingInterval: number = 0;

  get isBlinking() {
    return this._isBlinking;
  }

  set setBlinking(val: boolean) {
    this._isBlinking = val;
  }

  set setTitle(val: string) {
    document.title = val;
  }

  startBlinking() {
    let isTimeVisible = true;

    this.blinkingInterval = window.setInterval(() => {
      isTimeVisible ? (document.title = 'time up') : (document.title = `back to work`);
      isTimeVisible = !isTimeVisible;
    }, 1000);
  }

  stopBlinking() {
    clearInterval(this.blinkingInterval);
  }
}
