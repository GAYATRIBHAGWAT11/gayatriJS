import "./styles.css";
import React, {useState} from 'react'


let timeToday=new Date().toLocaleTimeString()


let settingInterval;
export default function App() {
const [time, setTime]=useState(timeToday)

function showTime(){
settingInterval=setInterval(()=>{
  timeToday=new Date().toLocaleTimeString()
  setTime(timeToday)
}, 1000)
}

function stopTimer(){
  clearInterval(settingInterval)
}


  return (
    <div className="App">
      <h1>{time}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={showTime}>Clock</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  )
}