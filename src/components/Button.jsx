import PropTypes from "prop-types";
import { Btn } from "../styles/styled";
// import { Link } from "react-router-dom";

export default function Button({ textContent, onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      {textContent}
    </Btn>
  );
}

Button.protTypes = {
  textContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
