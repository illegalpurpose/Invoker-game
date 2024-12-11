import React from 'react'
import './StartedGame.scss';

import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';
import old_quas from '../../img/icons_old_invoker/quas.jpg';
import old_wex from '../../img/icons_old_invoker/wex.jpg';
import old_exort from '../../img/icons_old_invoker/exort.jpg';
import old_invoke from '../../img/icons_old_invoker/invoke.png';

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

import icy_path from '../../img/icons_old_invoker/icy_path.png';
import portal from '../../img/icons_old_invoker/portal.png';
import betrayal from '../../img/icons_old_invoker/betrayal.png';
import mana_burn from '../../img/icons_old_invoker/mana_burn.png';
import tornado_blast from '../../img/icons_old_invoker/tornado.png';
import old_emp from '../../img/icons_old_invoker/emp.png';
import telelightning from '../../img/icons_old_invoker/telelightning.png';
import shock from '../../img/icons_old_invoker/shock.png';
import frost_nova from '../../img/icons_old_invoker/frost_nova.png';
import power_word from '../../img/icons_old_invoker/power_word.png';
import old_chaos_meteor from '../../img/icons_old_invoker/chaos_meteor.png';
import shroud_of_flames from '../../img/icons_old_invoker/shroud_of_flames.png';
import disarm from '../../img/icons_old_invoker/disarm.png';
import old_deafening_blast from '../../img/icons_old_invoker/deafening_blast.png';
import firebolt from '../../img/icons_old_invoker/firebolt.png';
import arcane_arts from '../../img/icons_old_invoker/arcane_arts.png';
import energy_ball from '../../img/icons_old_invoker/energy_ball.png';
import firestorm from '../../img/icons_old_invoker/firestorm.png';
import lightning_shield from '../../img/icons_old_invoker/lightning_shield.png';
import incinerate from '../../img/icons_old_invoker/incinerate.png';
import inferno from '../../img/icons_old_invoker/inferno.png';
import levitation from '../../img/icons_old_invoker/levitation.png';
import invisibility_aura from '../../img/icons_old_invoker/invisibility_aura.png';
import soul_reaver from '../../img/icons_old_invoker/soul_reaver.png';
import confuse from '../../img/icons_old_invoker/confuse.png';
import scout from '../../img/icons_old_invoker/scout.png';
import soul_blast from '../../img/icons_old_invoker/soul_blast.png';


const StartedGame = (props) => {
  return (
     <div className='mainSection'>
        <h1 style={{fontSize: '60px', marginTop: '70px', marginBottom: '70px'}}>{props.valueTimer}</h1>
        {
          props.mode === 'new' ?
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
          :
            <div className='curent__spell'>
              {props.randomSpell === 'icy path' ? <><img src={icy_path} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'portal' ? <><img src={portal} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'betrayal' ? <><img src={betrayal} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'mana burn' ? <><img src={mana_burn} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'tornado blast' ? <><img src={tornado_blast} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'emp' ? <><img src={old_emp} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'telelightning' ? <><img src={telelightning} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'shock' ? <><img src={shock} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'frost nova' ? <><img src={frost_nova} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'power word' ? <><img src={power_word} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'chaos meteor' ? <><img src={old_chaos_meteor} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'shroud of flames' ? <><img src={shroud_of_flames} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'disarm' ? <><img src={disarm} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'deafening blast' ? <><img src={old_deafening_blast} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'firebolt' ? <><img src={firebolt} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'arcane arts' ? <><img src={arcane_arts} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'energy ball' ? <><img src={energy_ball} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'firestorm' ? <><img src={firestorm} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'lightning shield' ? <><img src={lightning_shield} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'incinerate' ? <><img src={incinerate} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'inferno' ? <><img src={inferno} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'levitation' ? <><img src={levitation} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'invisibility aura' ? <><img src={invisibility_aura} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'soul reaver' ? <><img src={soul_reaver} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'confuse' ? <><img src={confuse} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'scout' ? <><img src={scout} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
              {props.randomSpell === 'soul blast' ? <><img src={soul_blast} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
            </div>
        }
        <button className='restart' onClick={props.endGame}>Restart</button>
        <ul className='window'>
          <li className='circle'>
            {props.firstCircle === props.keyQuas ? <img src={props.mode === 'new' ? quas : old_quas} alt="quas"></img> : undefined}
            {props.firstCircle === props.keyWex ? <img src={props.mode === 'new' ? wex : old_wex} alt="wex"></img> : null}
            {props.firstCircle === props.keyExort ? <img src={props.mode === 'new' ? exort : old_exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.secondCircle === props.keyQuas ? <img src={props.mode === 'new' ? quas : old_quas} alt="quas"></img> : undefined}
            {props.secondCircle === props.keyWex ? <img src={props.mode === 'new' ? wex : old_wex} alt="wex"></img> : null}
            {props.secondCircle === props.keyExort ? <img src={props.mode === 'new' ? exort : old_exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.thirdCircle === props.keyQuas ? <img src={props.mode === 'new' ? quas : old_quas} alt="quas"></img> : undefined}
            {props.thirdCircle === props.keyWex ? <img src={props.mode === 'new' ? wex : old_wex} alt="wex"></img> : null}
            {props.thirdCircle === props.keyExort ? <img src={props.mode === 'new' ? exort : old_exort} alt="exort"></img> : null}
          </li>
        </ul>
        <ul className='spells__group'>
          <li className='square'><img src={props.mode === 'new' ? quas : old_quas} alt="quas"></img><span>{String.fromCharCode(props.keyQuas)}</span></li>
          <li className='square'><img src={props.mode === 'new' ? wex : old_wex} alt="wex"></img><span>{String.fromCharCode(props.keyWex)}</span></li>
          <li className='square'><img src={props.mode === 'new' ? exort : old_exort} alt="exort"></img><span>{String.fromCharCode(props.keyExort)}</span></li>
          { 
            props.mode === 'new' ?
            <li className='square'>
              {props.spell1 === 'cold snap' ? <img src={cold_snap} alt="spell2"></img> : null}
              {props.spell1 === 'ghost walk' ? <img src={ghost_walk} alt="spell2"></img> : null}
              {props.spell1 === 'ice wall' ? <img src={ice_wall} alt="spell2"></img> : null}
              {props.spell1 === 'emp' ? <img src={emp} alt="spell2"></img> : null}
              {props.spell1 === 'tornado' ? <img src={tornado} alt="spell2"></img> : null}
              {props.spell1 === 'alacrity' ? <img src={alacrity} alt="spell2"></img> : null}
              {props.spell1 === 'sun strike' ? <img src={sun_strike} alt="spell2"></img> : null}
              {props.spell1 === 'forge spirit' ? <img src={forge_spirit} alt="spell2"></img> : null}
              {props.spell1 === 'chaos meteor' ? <img src={chaos_meteor} alt="spell2"></img> : null}
              {props.spell1 === 'deafening blast' ? <img src={deafening_blast} alt="spell2"></img> : null}
              {props.spell1 === 'nospell' ? <img src={nospell} alt="spell2"></img> : null}
            <span>D</span></li>
            :
            <li className='square'>
              {props.spell1 === 'icy path' ? <img src={icy_path} alt="spell2"></img> : null}
              {props.spell1 === 'portal' ? <img src={portal} alt="spell2"></img> : null}
              {props.spell1 === 'betrayal' ? <img src={betrayal} alt="spell2"></img> : null}
              {props.spell1 === 'mana burn' ? <img src={mana_burn} alt="spell2"></img> : null}
              {props.spell1 === 'tornado blast' ? <img src={tornado_blast} alt="spell2"></img> : null}
              {props.spell1 === 'emp' ? <img src={old_emp} alt="spell2"></img> : null}
              {props.spell1 === 'telelightning' ? <img src={telelightning} alt="spell2"></img> : null}
              {props.spell1 === 'shock' ? <img src={shock} alt="spell2"></img> : null}
              {props.spell1 === 'frost nova' ? <img src={frost_nova} alt="spell2"></img> : null}
              {props.spell1 === 'power word' ? <img src={power_word} alt="spell2"></img> : null}
              {props.spell1 === 'chaos meteor' ? <img src={chaos_meteor} alt="spell2"></img> : null}
              {props.spell1 === 'shroud of flames' ? <img src={shroud_of_flames} alt="spell2"></img> : null}
              {props.spell1 === 'disarm' ? <img src={disarm} alt="spell2"></img> : null}
              {props.spell1 === 'deafening blast' ? <img src={old_deafening_blast} alt="spell2"></img> : null}
              {props.spell1 === 'firebolt' ? <img src={firebolt} alt="spell2"></img> : null}
              {props.spell1 === 'arcane arts' ? <img src={arcane_arts} alt="spell2"></img> : null}
              {props.spell1 === 'energy ball' ? <img src={energy_ball} alt="spell2"></img> : null}
              {props.spell1 === 'firestorm' ? <img src={firestorm} alt="spell2"></img> : null}
              {props.spell1 === 'lightning shield' ? <img src={lightning_shield} alt="spell2"></img> : null}
              {props.spell1 === 'incinerate' ? <img src={incinerate} alt="spell2"></img> : null}
              {props.spell1 === 'inferno' ? <img src={inferno} alt="spell2"></img> : null}
              {props.spell1 === 'levitation' ? <img src={levitation} alt="spell2"></img> : null}
              {props.spell1 === 'invisibility aura' ? <img src={invisibility_aura} alt="spell2"></img> : null}
              {props.spell1 === 'soul reaver' ? <img src={soul_reaver} alt="spell2"></img> : null}
              {props.spell1 === 'confuse' ? <img src={confuse} alt="spell2"></img> : null}
              {props.spell1 === 'scout' ? <img src={scout} alt="spell2"></img> : null}
              {props.spell1 === 'soul blast' ? <img src={soul_blast} alt="spell2"></img> : null}
              {props.spell1 === 'nospell' ? <img src={nospell} alt="spell2"></img> : null}
            <span>D</span></li>
          }
          { 
            props.mode === 'new' ?
            <li className='square'>
              {props.spell2 === 'cold snap' ? <img src={cold_snap} alt="spell2"></img> : null}
              {props.spell2 === 'ghost walk' ? <img src={ghost_walk} alt="spell2"></img> : null}
              {props.spell2 === 'ice wall' ? <img src={ice_wall} alt="spell2"></img> : null}
              {props.spell2 === 'emp' ? <img src={emp} alt="spell2"></img> : null}
              {props.spell2 === 'tornado' ? <img src={tornado} alt="spell2"></img> : null}
              {props.spell2 === 'alacrity' ? <img src={alacrity} alt="spell2"></img> : null}
              {props.spell2 === 'sun strike' ? <img src={sun_strike} alt="spell2"></img> : null}
              {props.spell2 === 'forge spirit' ? <img src={forge_spirit} alt="spell2"></img> : null}
              {props.spell2 === 'chaos meteor' ? <img src={chaos_meteor} alt="spell2"></img> : null}
              {props.spell2 === 'deafening blast' ? <img src={deafening_blast} alt="spell2"></img> : null}
              {props.spell2 === 'nospell' || props.spell2 === '' ? <img src={nospell} alt="spell2"></img> : null}
            <span>F</span></li>
            :
            <li className='square'>
              {props.spell2 === 'icy path' ? <img src={icy_path} alt="spell2"></img> : null}
              {props.spell2 === 'portal' ? <img src={portal} alt="spell2"></img> : null}
              {props.spell2 === 'betrayal' ? <img src={betrayal} alt="spell2"></img> : null}
              {props.spell2 === 'mana burn' ? <img src={mana_burn} alt="spell2"></img> : null}
              {props.spell2 === 'tornado blast' ? <img src={tornado_blast} alt="spell2"></img> : null}
              {props.spell2 === 'emp' ? <img src={old_emp} alt="spell2"></img> : null}
              {props.spell2 === 'telelightning' ? <img src={telelightning} alt="spell2"></img> : null}
              {props.spell2 === 'shock' ? <img src={shock} alt="spell2"></img> : null}
              {props.spell2 === 'frost nova' ? <img src={frost_nova} alt="spell2"></img> : null}
              {props.spell2 === 'power word' ? <img src={power_word} alt="spell2"></img> : null}
              {props.spell2 === 'chaos meteor' ? <img src={chaos_meteor} alt="spell2"></img> : null}
              {props.spell2 === 'shroud of flames' ? <img src={shroud_of_flames} alt="spell2"></img> : null}
              {props.spell2 === 'disarm' ? <img src={disarm} alt="spell2"></img> : null}
              {props.spell2 === 'deafening blast' ? <img src={old_deafening_blast} alt="spell2"></img> : null}
              {props.spell2 === 'firebolt' ? <img src={firebolt} alt="spell2"></img> : null}
              {props.spell2 === 'arcane arts' ? <img src={arcane_arts} alt="spell2"></img> : null}
              {props.spell2 === 'energy ball' ? <img src={energy_ball} alt="spell2"></img> : null}
              {props.spell2 === 'firestorm' ? <img src={firestorm} alt="spell2"></img> : null}
              {props.spell2 === 'lightning shield' ? <img src={lightning_shield} alt="spell2"></img> : null}
              {props.spell2 === 'incinerate' ? <img src={incinerate} alt="spell2"></img> : null}
              {props.spell2 === 'inferno' ? <img src={inferno} alt="spell2"></img> : null}
              {props.spell2 === 'levitation' ? <img src={levitation} alt="spell2"></img> : null}
              {props.spell2 === 'invisibility aura' ? <img src={invisibility_aura} alt="spell2"></img> : null}
              {props.spell2 === 'soul reaver' ? <img src={soul_reaver} alt="spell2"></img> : null}
              {props.spell2 === 'confuse' ? <img src={confuse} alt="spell2"></img> : null}
              {props.spell2 === 'scout' ? <img src={scout} alt="spell2"></img> : null}
              {props.spell2 === 'soul blast' ? <img src={soul_blast} alt="spell2"></img> : null}
              {props.spell2 === 'nospell' || props.spell2 === '' ? <img src={nospell} alt="spell2"></img> : null}
            <span>F</span></li>
          }
          <li className='square'><img src={props.mode === 'new' ? invoke : old_invoke} alt="invoke"></img><span>{String.fromCharCode(props.keyInvoke)}</span></li>
        </ul>
      </div>


  )
}

export default StartedGame
