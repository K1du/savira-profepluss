import React from "react";
import "./SparkleButton.css";

export default function SparkleButton({ children, ...props }) {
  return (
    <a {...props} className={"sparkle-btn "+(props.className||"")}> 
      <span>{children}</span>
      <span>{children}</span>
      {/* Sparkle SVGs */}
      <svg viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>
      <svg viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>
      <svg viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>
      <svg viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>
      <svg viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"/></svg>
    </a>
  );
}
