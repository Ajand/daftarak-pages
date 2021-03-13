import { useRef, Fragment } from "react";

const TextField = ({
  id,
  label,
  value,
  margin,
  error,
  helperText,
  Icon,
  ...rest
}) => {
  const input = useRef(null);

  const handleMargin = () => {
    switch (margin) {
      case "normal":
        return "16px 0px";
      case "dense":
        return "2px 0px";
      default:
        return "8px 0px";
    }
  };

  return (
    <div style={{ margin: handleMargin() }}>
      <div
        onClick={() => input.current.focus()}
        className={`text-field-container ${
          error && "text-field-container-error"
        }`}
      >
        <input
          className="text-field-input"
          value={value}
          id={id}
          ref={input}
          {...rest}
        />
        <label
          className={`text-field-label ${
            !!value && "text-field-label-active"
          } ${error && "text-field-label-error"}`}
          htmlFor={id}
        >
          {label}
        </label>
        {Icon && (
          <Icon
            className={`text-field-icon ${error && "text-field-icon-error"}`}
          />
        )}
      </div>
      {helperText && (
        <div
          className={`text-field-helper ${error && "text-field-helper-error"}`}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default TextField;
