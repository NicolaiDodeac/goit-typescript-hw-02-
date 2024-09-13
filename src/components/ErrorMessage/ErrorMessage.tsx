import React from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => (
  <div className={s.error}>
    <p>{text}</p>
  </div>
);

export default ErrorMessage;
