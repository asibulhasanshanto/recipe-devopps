import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div className="w-full bg-cyan-950 flex text-white justify-end items-center h-16">
      <div className="navItems pr-10 md:pr-80">
        <button onClick={logOutHandler}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
