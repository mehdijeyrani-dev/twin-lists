import React, { useEffect, type ReactNode } from "react";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKey);

    return window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;


  return createPortal(
    <Backdrop isOpen={isOpen} onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-lg bg-neutral-900 shadow-2xl border border-neutral-700"
      >
        {children}
      </div>
    </Backdrop>,
    document.body,
  );
};

export default Modal;
