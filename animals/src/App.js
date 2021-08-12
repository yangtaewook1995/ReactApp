import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import styles from './App.module.css';

function App() {
    return (
        <div className="App">
            <Hello />
            {/* <div className = {styles.box}>App</div> */}
        </div>
    );
}

export default App;
