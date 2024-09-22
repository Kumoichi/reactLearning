function Button() {
    const handleClick = () => console.log("OUCH!");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    return(<button onClick={() => handleClick2("Bro")}>Click me</button>);
}

export default Button



//     const handleClick = () => console.log("OUCH!");
//  this is ↓

// function handleClick() {
//     console.log("OUCH!");
// }
