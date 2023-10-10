import React from "react";

interface IUIButton {
  children: React.ReactNode;
  onClick: () => void;
  type?: string;
}

const UIButton = ({ children, onClick, type }: IUIButton) => {
  return <div onClick={onClick}>{children}</div>;
};

export default UIButton;
