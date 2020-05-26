import React from "react";
import { Button as SemButton, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Button = ({
  handleClick = () => "",
  content = "Button Text",
  color = "",
  circular = false,
  loading = false,
  disabled = false,
  icon,
  children,
}) => (
  <SemButton
    loading={loading}
    disabled={disabled}
    color={color}
    circular={circular}
    onClick={handleClick}
    icon={icon ? true : false}
    labelPosition={icon ? "right" : false}
  >
    {children ? children : content}
    <Icon name={icon} />
  </SemButton>
);

export default Button;