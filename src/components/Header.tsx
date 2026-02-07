import logo from "../assets/ms-logo.svg";

export function Header(){
  return(
    <header className="p-6">
      <img src={logo} alt="logo ms" className="mx-auto block" />
    </header>
  )
}