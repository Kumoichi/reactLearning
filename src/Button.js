function Button() {
    const handleClick = (i) => i.target.textContent = "OUCH";
    return(<button onDoubleClick={(i) => handleClick(i)}>Click me</button>);
}

export default Button

