import React from "react";
import "./Toggle.scss";

interface ToggleProps {
  value: "es" | "en";
  onToggle: () => void;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({
  value,
  onToggle,
  leftContent,
  rightContent,
}) => {
  return (
    <div className="toggle">
      <div className="toggle__flag toggle__flag--left">
        {leftContent}
      </div>

      <div
        className={`toggle__switch ${
          value === "en" ? "toggle__switch--right" : "toggle__switch--left"
        }`}
        onClick={onToggle}
      >
        <div className="toggle__thumb" />
      </div>

      <div className="toggle__flag toggle__flag--right">
        {rightContent}
      </div>
    </div>
  );
};

export default Toggle;
