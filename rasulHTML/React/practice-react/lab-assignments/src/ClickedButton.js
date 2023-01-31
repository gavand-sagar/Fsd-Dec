import { useState } from "react";
export default function ClickedButton({ name, status }) {
  function toggle() {
    status = true;
  }

  return (
    <button
      onClick={toggle}
      className={status ? "orange-button" : "black-button"}
    >
      {name}
    </button>
  );
}
