import React, { type ReactNode } from "react";

type BackdropProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Backdrop: React.FC<BackdropProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="absolute inset-0 z-40 flex items-center justify-center bg-neutral-900/70 backdrop-blur-xs"
    >
      {children}
    </div>
  );
};

export default Backdrop;
