import React, { useState ,useEffect} from "react";
import Sunny from './sunny.png'
import Cloudy from './cloudy.png'
import Rainy from './rainy.png'
function EmojeeCounter(props){
console.log("pic is ",props.pic)
const [pic, setPic]=useState(Sunny)
const [count,setCount]=useState(0)
useEffect(()=>{
console.log ("function called",props.pic)
if (props.pic==="Sunny")
 setPic(Sunny) 
if (props.pic==="Cloudy")
 setPic(Cloudy)
else if (props.pic==="Rainy")
 setPic(Rainy)
})
const ClickHandle=() =>
 {
 setCount(count+1)
 }
 return (
    <div className="App">
      <p>
        {props.pic}{" "}
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt="" style={{ width: "50px", marginLeft: "10px" }} />
        </button>
      </p>
    </div>
)
}
export default EmojeeCounter;