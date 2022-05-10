import logo from "./logo.png";

const Header = (props) => (
  <header className="row">
    <div className="col-md-5">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="col-md-7 mt-5 subtitle">{props.mytitle}</div>
  </header>
);

export default Header;
