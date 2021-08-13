import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";

export default function Hello(props) {
    // let name = "Mike";
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);

    const msg = age > 19 ? "성인입니다" : "미성년자입니다";
    function changeName() {
        let newName;
        if(name == "Mike") newName = "Jane";
        else newName = "Mike";
        setName(newName);
        setAge(age+1);
    }

    function showName() {
        console.log("Mike");
    }

    function showText(e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <h1 
                // style = {{
                //     color : '#f00',
                // }}
            >
                Hello
            </h1>
            <h2>
                {name}({age}) : {msg}
            </h2>
            <button onClick={changeName}>Change Name</button>
            {/* <div className={styles.box}>Hello</div> */}
        </div>
    );

}
