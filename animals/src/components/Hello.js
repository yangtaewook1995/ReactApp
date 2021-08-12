import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
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
            <button onClick={showName}>Show Name</button>
            {/* <div className={styles.box}>Hello</div> */}
            <input type="text" onChange={showText} />
        </div>
    );

}
