import { useEffect } from "react";
import Header from "./Header";
export default function Gallery() {
  useEffect(() => {
    // you come to gallery
    alert("Loading.....");


    return ()=>{
        // you leave gallery
        // basically when destroy
        alert("Now leaving.....");
    }

  }, []);
  return (
    <div>
      <Header />
      <h1>This is Gallery</h1>
      <img src="p1.jpg" width="200" style={{ margin: "20px" }}></img>
      <img src="p1.jpg" width="200" style={{ margin: "20px" }}></img>
      <img src="p1.jpg" width="200" style={{ margin: "20px" }}></img>
      <img src="p1.jpg" width="200" style={{ margin: "20px" }}></img>
    </div>
  );
}
