// useState解説
// 左は値、右は関数って感じかな

// useState("Guest")これはinitial valueがGuestになる




import React, {useState} from 'react';
function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);


    const updateName = () => {
        setName("Spongebob")
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>increment Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>)
}
export default MyComponent
