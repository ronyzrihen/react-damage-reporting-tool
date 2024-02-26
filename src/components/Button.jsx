import { useEffect } from "react";

const Button = ({ btnVal, onClick }) => {
  return <button onClick={onClick}>{btnVal}</button>;
};
export default Button;
