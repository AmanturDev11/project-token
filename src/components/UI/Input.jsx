import { Input as MuiInput } from "@mui/material";

const Input = ({ type = "text", variant, ...rest }) => {
  return <MuiInput type={type} variant={variant} {...rest} />;
};

export default Input;
