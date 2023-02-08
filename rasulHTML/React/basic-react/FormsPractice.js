import { useEffect, useState } from "react";

export default function FormsPractice() {
  const [textBox, setTextBox] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(()=>{
    if(textBox.length < 5){
      setMsg('Invalid')
    }else{
      setMsg('')
    }
  },[textBox])  /// the code will execute whenever textBox changes

  return (
    <div>
      <input
        type={"text"}
        value={textBox}
        onChange={(e) => setTextBox(e.target.value)}
      />
      <br></br>
      
      <br></br>
      {msg}
    </div>
  );
}
