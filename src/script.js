const Test = () => {
  
  let [inter, setInter] = React.useState(null)
  let [turn, setTurn] = React.useState('stop')
  let [sessionTimer, setSessionTimer] = React.useState(3)
  let [breakTimer, setBreakTimer] = React.useState(3)
  let [reseta, setReseta] = React.useState(false)
   let [countDown, setcountDown] = React.useState(Date.now())
  
  let sessionInterval = () => {
    setTurn(turn === 'start' ? 'stop' : 'start')
    // const countDown = Date.now()
    if (turn === 'start') {
      sessionTimer + Math.round((countDown - Date.now())/1000)
    } else if (turn === 'stop') {
      clearInterval(inter);
      setSessionTimer(sessionTimer);
    }
  }
  
  let breakInterval = () => {
    setTurn(turn === 'start' ? 'stop' : 'start')
    const countDown = Date.now()
    if (turn === 'start') {
      breakTimer + Math.round((countDown - Date.now())/1000)
    } else if (turn === 'stop') {
      clearInterval(inter);
      setBreakTimer(breakTimer);
    }
  }
  
    let commenceIntervals = () => {
      setSessionTimer(4)
      
      let xd = setInterval(sessionInterval,10)
  }
  
// resetHandler = () => {
//   clearInterval(sessionTimer)
// }

  return (
  <div id="container">
    <div id="displayer"></div>
      <div id="display">{sessionTimer}</div>
      <button id='on' onClick={commenceIntervals}>start</button>
      <button id='reset' onClick={this.resetHandler}>Reset</button>
  </div>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'));