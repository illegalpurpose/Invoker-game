import React from 'react'
import './StartedGame.scss';
import invoker from '../../img/invoker.jpg';
import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';

import cold_snap from '../../img/invoker_cold_snap.png';
import ghost_walk from '../../img/invoker_ghost_walk.png';
import ice_wall from '../../img/invoker_ice_wall.png';
import emp from '../../img/invoker_emp.png';
import tornado from '../../img/invoker_tornado.png';
import alacrity from '../../img/invoker_alacrity.png';
import sun_strike from '../../img/invoker_sun_strike.png';
import forge_spirit from '../../img/invoker_forge_spirit.png';
import chaos_meteor from '../../img/invoker_chaos_meteor.png';
import deafening_blast from '../../img/invoker_deafening_blast.png';


import { restartGame } from '../../actions/restartGame';
const StartedGame = (props) => {

  return (
     <div className='mainSection'>
        <h1>Invoker Game by undefined</h1>
        <img src={invoker} alt='invoker' className='img'></img>
        <div className='curent__spell'>
          {props.randomSpell === 'cold snap' ? <><img src={cold_snap} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'ghost walk' ? <><img src={ghost_walk} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'ice wall' ? <><img src={ice_wall} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'emp' ? <><img src={emp} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'tornado' ? <><img src={tornado} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'alacrity' ? <><img src={alacrity} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'sun strike' ? <><img src={sun_strike} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'forge spirit' ? <><img src={forge_spirit} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'chaos meteor' ? <><img src={chaos_meteor} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'deafening blast' ? <><img src={deafening_blast} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
        </div>
        <button className='restart' onClick={() => {restartGame(props.setGameState)}}>Restart</button>
        <ul className='window'>
          <li className='circle'>
            {props.firstCircle === 'q' || props.firstCircle === 'Q' ? <img src={quas} alt="quas"></img> : undefined}
            {props.firstCircle === 'w' || props.firstCircle === 'W' ? <img src={wex} alt="wex"></img> : null}
            {props.firstCircle === 'e' || props.firstCircle === 'E' ? <img src={exort} alt="exort"></img> : null}
            {props.firstCircle === 'й' || props.firstCircle === 'Й' ? <img src={quas} alt="quas"></img> : undefined}
            {props.firstCircle === 'ц' || props.firstCircle === 'Ц' ? <img src={wex} alt="wex"></img> : null}
            {props.firstCircle === 'у' || props.firstCircle === 'У' ? <img src={exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.secondCircle === 'q' || props.secondCircle === 'Q' ? <img src={quas} alt="quas"></img> : null}
            {props.secondCircle === 'w' || props.secondCircle === 'W' ? <img src={wex} alt="wex"></img> : null}
            {props.secondCircle === 'e' || props.secondCircle === 'E' ? <img src={exort} alt="exort"></img> : null}
            {props.secondCircle === 'й' || props.secondCircle === 'Й' ? <img src={quas} alt="quas"></img> : null}
            {props.secondCircle === 'ц' || props.secondCircle === 'Ц' ? <img src={wex} alt="wex"></img> : null}
            {props.secondCircle === 'у' || props.secondCircle === 'У' ? <img src={exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.thirdCircle === 'q' || props.thirdCircle === 'Q' ? <img src={quas} alt="quas"></img> : null}
            {props.thirdCircle === 'w' || props.thirdCircle === 'W' ? <img src={wex} alt="wex"></img> : null}
            {props.thirdCircle === 'e' || props.thirdCircle === 'E' ? <img src={exort} alt="exort"></img> : null}
            {props.thirdCircle === 'й' || props.thirdCircle === 'Й' ? <img src={quas} alt="quas"></img> : null}
            {props.thirdCircle === 'ц' || props.thirdCircle === 'Ц' ? <img src={wex} alt="wex"></img> : null}
            {props.thirdCircle === 'у' || props.thirdCircle === 'У' ? <img src={exort} alt="exort"></img> : null}
          </li>
        </ul>
        <ul className='spells__group'>
          <li className='square'><img src={quas} alt="quas"></img><span>Q</span></li>
          <li className='square'><img src={wex} alt="wex"></img><span>W</span></li>
          <li className='square'><img src={exort} alt="exort"></img><span>E</span></li>
          <li className='square'>
            <img src={props.spell1 ? props.spell1 : nospell} alt="spell1"></img>
          <span>D</span></li>
          <li className='square'><img src={props.spell2 ? props.spell2 : nospell} alt="spell2"></img><span>F</span></li>
          <li className='square'><img src={invoke} alt="invoke"></img><span>R</span></li>
        </ul>
      </div>


  )
}

export default StartedGame
