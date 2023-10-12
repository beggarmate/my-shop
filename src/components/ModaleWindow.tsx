import React from "react";

interface ModaleWindowProps {
  children: React.ReactNode;
}

const modaleHandler = (e: React.MouseEvent<HTMLDivElement>) => {};

const ModaleWindow = ({ children }: ModaleWindowProps) => {
  return (
    <div onClick={modaleHandler} className="modale-window">
      {children}
    </div>
  );
};

export default ModaleWindow;
