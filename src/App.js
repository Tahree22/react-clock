import React, {useState, useEffect} from 'react'
 

function App() {
  const currentDate = new Date ()
  const [clockHand, setClockHand] = useState({
    hourHand: currentDate.getHours() * 30,
    minuteHand: currentDate.getMinutes() * 6,
    secondHand: currentDate.getSeconds() * 6
  })

  useEffect(()=>{
    const currentDate = new Date ()
    setTimeout(function(){
      setClockHand({
      hourHand: currentDate.getHours() * 30,
      minuteHand: currentDate.getMinutes() * 6,
      secondHand: currentDate.getSeconds() * 6
      })
    }, 1000)
  },[clockHand])
  
  return (
    <div style={{height:window.innerHeight}} className="flex w-full h-full justify-center items-center bg-black">
      <div style={{backgroundColor:"#C4C4C4"}} className="w-52 h-52 rounded-full flex flex-col items-center justify-between p-2">
        
          <p className="">12</p>
          <div className="flex justify-between items-center w-full">
            <div className="w-0.5 h-24 absolute" style={{transform:`translate(94px) rotate(${clockHand.secondHand}deg)`, background: `linear-gradient(red 50%, transparent 45%)`}}/>
            <div className="w-1 h-24 bg-white absolute" style={{transform:`translate(94px) rotate(${clockHand.minuteHand}deg)`, background: `linear-gradient(#FFF 50%, transparent 45%)`}}/>
            <div className="w-1 h-20 bg-white absolute" style={{transform:`translate(94px) rotate(${clockHand.hourHand}deg)`, background: `linear-gradient(#FFF 50%, transparent 45%)`}}/>
            <p>9</p>
            <div style={{backgroundColor:"#FFF"}} className="w-2 h-2 rounded-full"/>
            <p>3</p>
            </div>
          <p>6</p>
        

      </div>

    </div>
  );
}

export default App;
