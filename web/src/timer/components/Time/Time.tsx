import "./style.scss";

export function Time(props: any) {
  function msToTime(s: number) {
    // Pad to 2 or 3 digits, default is 2
    function pad(n: number, z?: number) {
      z = z || 2;
      return ("00" + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ":" + pad(mins) + ":" + pad(secs) + "." + pad(ms, 3);
  }

  return <div className="timer__time time">{msToTime(props.time)}</div>;
}
