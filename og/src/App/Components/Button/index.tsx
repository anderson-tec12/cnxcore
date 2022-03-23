import { Container } from "./style";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ viewName, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {viewName}
    </Container>
  );
};

export default Button;
