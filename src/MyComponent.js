import React, {useState} from 'react';

function MyComponent() {
    let [name, setName] = useState();

    const updateName = () => {
        name = "Spongebob";
        console.log(name);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>)
}

export default MyComponent

//test pushing