import React, { useState, useEffect } from "react";

function MyComponent() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight); // 修正: innerHeightの"i"を小文字に
        };

        window.addEventListener("resize", handleResize);
        console.log("event listener added");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    },[width, height])

    return (
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    );
}

export default MyComponent;
