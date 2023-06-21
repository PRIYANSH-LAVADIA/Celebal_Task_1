import Trip from "./Trip";
import './css/Trip.css';
 function Trip_data(props){
    return(
        <div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="image"></img>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>

        </div>
    )
 }

 export default Trip_data;