import stl from "./NavBar.module.css";
import logo from "../../assets/Logo.jpg";

const NavBar = () => {
  return (
    <div className={stl.navbar}>
      <div className={stl.innerbar}>
        <img src={logo} alt="Logo" className={stl.logo} />
        <div className={stl.navlinks}>
          {/* <span className={stl.linkspan}>Image</span>
          <span className={stl.linkspan}>Audio</span>
          <span className={stl.linkspan}>Video</span>
          <span className={stl.linkspan}>Document</span> */}
        </div>
        <div className={stl.loginbox}>
          {/* <button className={stl.ctabtn}>Sign Up</button>
          <button className={`${stl.ctabtn} ${stl.loginbtn}`}>Login</button> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
