



export default function Toggle() {

    let value = "Sagar"

    function doSomething() {
        alert(value)
    }

    return (<div>
        <button onClick={doSomething}>Toggle</button>
    </div>)
}