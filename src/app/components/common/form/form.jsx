import React, { useState, useEffect } from "react";
import PropTypes, { object } from "prop-types";
import { validator } from "../../../utils/validator";
const FormComponent = ({ children, validatorConfig }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  //   return <form>{children}</form>;
  // };
  useEffect(() => validate(), [data]);
  const isValid = Object.keys(errors).length === 0;
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const clonedElements = React.Children.map(children, (child) => {
    const childType = typeof child.type;
    let config = {};
    if (childType === "object") {
      config = { ...child.props, onChange: handleChange };
    }
    if (childType === "string") {
      if (child.type === "button") {
        if (child.props.type === "submit" || child.props.type === undefined) {
          config = { ...child.props, disabled: isValid };
        }
      }
    }
    return React.cloneElement(child, config);
  });
  return <form>{clonedElements}</form>;
};
FormComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  validatorConfig: PropTypes.object,
};

export default FormComponent;
