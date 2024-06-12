import { Button as MuiButton } from "@mui/material";

const Button = ({ children, type, variant, onClik, ...rest }) => {
  return (
    <MuiButton type={type} variant={variant} onClick={onClik} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
