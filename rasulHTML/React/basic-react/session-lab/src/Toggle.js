import { useState } from "react";

export default function Toggle(){

    let pi = 3.14

    const [value,setValue] = useState("Ekta");
    const [age,setAge] = useState(35);
    const [year,setYear] = useState(2023);

    function doSomething(){
        setValue("Shahnaz")
    }

    function doSomething2(){
        setAge(32)
        setValue("Sagar")
    }


    return (<div>
        {pi}
        <button onClick={doSomething}>Toggle</button>
        <button onClick={doSomething2}>Toggle2</button>
        {value}
    </div>)
}