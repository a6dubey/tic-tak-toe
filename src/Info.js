
// Importing the css for the info
import "./css/info.css";
  
const Info = () => {
    // const[size,setSize]=useState('3');
    return (
        <div className="info">
            <div className="player">Player 1: X</div>
            <div className="player">Player 2: O</div>
        </div>
    )
}
  
export default Info;