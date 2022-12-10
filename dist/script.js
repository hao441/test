const Test = () => {

  let [inter, setInter] = React.useState(null);
  let [turn, setTurn] = React.useState('stop');
  let [sessionTimer, setSessionTimer] = React.useState(3);
  let [breakTimer, setBreakTimer] = React.useState(3);
  let [reseta, setReseta] = React.useState(false);
  let [countDown, setcountDown] = React.useState(Date.now());

  let sessionInterval = () => {
    setTurn(turn === 'start' ? 'stop' : 'start');
    // const countDown = Date.now()
    if (turn === 'start') {
      sessionTimer + Math.round((countDown - Date.now()) / 1000);
    } else if (turn === 'stop') {
      clearInterval(inter);
      setSessionTimer(sessionTimer);
    }
  };

  let breakInterval = () => {
    setTurn(turn === 'start' ? 'stop' : 'start');
    const countDown = Date.now();
    if (turn === 'start') {
      breakTimer + Math.round((countDown - Date.now()) / 1000);
    } else if (turn === 'stop') {
      clearInterval(inter);
      setBreakTimer(breakTimer);
    }
  };

  let commenceIntervals = () => {
    setSessionTimer(4);

    let xd = setInterval(sessionInterval, 10);
  };

  // resetHandler = () => {
  //   clearInterval(sessionTimer)
  // }

  return /*#__PURE__*/(
    React.createElement("div", { id: "container" }, /*#__PURE__*/
    React.createElement("div", { id: "displayer" }), /*#__PURE__*/
    React.createElement("div", { id: "display" }, sessionTimer), /*#__PURE__*/
    React.createElement("button", { id: "on", onClick: commenceIntervals }, "start"), /*#__PURE__*/
    React.createElement("button", { id: "reset", onClick: this.resetHandler }, "Reset")));


};

ReactDOM.render( /*#__PURE__*/React.createElement(Test, null), document.getElementById('root'));