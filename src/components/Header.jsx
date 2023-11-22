import { useNavigate } from "react-router-dom";

function Header() {

  const redirect = useNavigate();

  return (
    <header>
      <h1 onClick={() => redirect("/")}>My Shop</h1>
    </header>
  )
}

export default Header;