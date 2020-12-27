import "./loader.scss";

const iconPath = "../../../../images/svg/loader1.svg";
export const Loader = () => (
  <div className="loader">
    <img src={iconPath} className="loader__image" alt="loader"></img>
  </div>
);
