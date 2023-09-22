import stl from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={stl.navbar}>
      <div className={stl.innerbar}></div>
    </div>
  );
};

export default NavBar;
