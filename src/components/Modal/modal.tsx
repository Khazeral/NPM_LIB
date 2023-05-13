import React from "react";
import "./modal.css";

type ModalProps = {
  title: string;
  description: string;
  displayed: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Modal({ title, description, displayed, onClick }: ModalProps) {
  return (
    <div className="full-screen" data-display={displayed}>
      <div className="modale">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={onClick ?? undefined}>OK</button>
      </div>
    </div>
  );
}
