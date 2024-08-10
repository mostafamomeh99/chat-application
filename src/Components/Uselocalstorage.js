import { useState, useEffect } from "react";

function Uselocalstorage(key, initialValue) {
    const [data, setData] = useState(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            return initialValue; 
        }
    }
    );

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.log("Error writing to localStorage key:", key, error);
        }

    }, [key, data]);

    const update = (newValue) => {
        setData(newValue);
    };

    return [data, update];
}

export default Uselocalstorage;