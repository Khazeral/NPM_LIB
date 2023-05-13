import React from "react";
import "./modal.css";
type ModalProps = {
    title: string;
    description: string;
    displayed: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare const Modal: ({ title, description, displayed, onClick, }: ModalProps) => JSX.Element;
export {};
