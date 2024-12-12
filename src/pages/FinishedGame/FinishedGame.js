import React from 'react'
import './FinishedGame.scss';

import invoker1 from '../../img/invoker1.gif';
import herald from '../../img/herald.webp';
import guardian from '../../img/guardian.webp';
import crusader from '../../img/crusader.webp';
import archon from '../../img/archon.webp';
import legend from '../../img/legend.webp';
import ancient from '../../img/ancient.webp';
import devine from '../../img/devine.webp';
import imortal from '../../img/imortal.webp';

const FinishedGame = (props) => {
console.log(props.resultGame, props.record)
  return (
     <div className='mainSection'>
        <h1>Invoker Game by <a href='https://twitter.com/iturturika'>ozzy</a></h1>
        <img src={invoker1} alt='invoker' className='img'></img>
        <h2>Game finished!</h2>
        {props.mode === 'new' && props.resultGame >= 25 ? <img src={herald} style={{width: '90px'}} alt='herald'></img> : null}
        {props.mode === 'new' && props.resultGame >= 20 && props.resultGame < 25 ? <img src={guardian} style={{width: '90px'}} alt='guardian'></img> : null}
        {props.mode === 'new' && props.resultGame >= 15 && props.resultGame < 20 ? <img src={crusader} style={{width: '90px'}} alt='crusader'></img> : null}
        {props.mode === 'new' && props.resultGame >= 10 && props.resultGame < 15 ? <img src={archon} style={{width: '90px'}} alt='archon'></img> : null}
        {props.mode === 'new' && props.resultGame >= 9 && props.resultGame < 10 ? <img src={legend} style={{width: '90px'}} alt='legend'></img> : null}
        {props.mode === 'new' && props.resultGame >= 8 && props.resultGame < 9 ? <img src={ancient} style={{width: '90px'}} alt='ancient'></img> : null}
        {props.mode === 'new' && props.resultGame >= 7 && props.resultGame < 8 ? <img src={devine} style={{width: '90px'}} alt='devine'></img> : null}
        {props.mode === 'new' && props.resultGame < 7 ? <img src={imortal} style={{width: '90px'}} alt='ancient'></img> : null}

        {props.mode === 'old' && props.resultGame >= 95 ? <img src={herald} style={{width: '90px'}} alt='herald'></img> : null}
        {props.mode === 'old' && props.resultGame >= 90 && props.resultGame < 95 ? <img src={guardian} style={{width: '90px'}} alt='guardian'></img> : null}
        {props.mode === 'old' && props.resultGame >= 75 && props.resultGame < 90 ? <img src={crusader} style={{width: '90px'}} alt='crusader'></img> : null}
        {props.mode === 'old' && props.resultGame >= 65 && props.resultGame < 75 ? <img src={archon} style={{width: '90px'}} alt='archon'></img> : null}
        {props.mode === 'old' && props.resultGame >= 60 && props.resultGame < 65 ? <img src={legend} style={{width: '90px'}} alt='legend'></img> : null}
        {props.mode === 'old' && props.resultGame >= 55 && props.resultGame < 60 ? <img src={ancient} style={{width: '90px'}} alt='ancient'></img> : null}
        {props.mode === 'old' && props.resultGame >= 50 && props.resultGame < 55 ? <img src={devine} style={{width: '90px'}} alt='devine'></img> : null}
        {props.mode === 'old' && props.resultGame < 50 ? <img src={imortal} style={{width: '90px'}} alt='ancient'></img> : null}
        <h3>{props.resultGame} seconds</h3>
        <p>{props.resultGame === props.record ? 'New record!' : null}</p>
        <button className='button' onClick={props.endGame}>Restart</button>
      </div>


  )
}

export default FinishedGame
