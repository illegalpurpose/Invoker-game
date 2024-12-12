import React from 'react';
import PreviusGameState from './pages/PreviusGameState/PreviusGameState.js';
import StartedGame from './pages/StartedGame/StartedGame.js';
import FinishedGame from './pages/FinishedGame/FinishedGame.js';
import ReactGA from 'react-ga4';
import { Routes, Route } from 'react-router-dom';

import './app.scss';

import quas from './img/invoker_quas.png';
import wex from './img/invoker_wex.png';
import exort from './img/invoker_exort.png';
import invokeImg from './img/invoker_invoke.png';
import old_quas from './img/icons_old_invoker/quas.jpg';
import old_wex from './img/icons_old_invoker/wex.jpg';
import old_exort from './img/icons_old_invoker/exort.jpg';
import old_invoke from './img/icons_old_invoker/invoke.png';
import nospell from './img/no_spell.png';
import cold_snap from './img/invoker_cold_snap.png';
import ghost_walk from './img/invoker_ghost_walk.png';
import ice_wall from './img/invoker_ice_wall.png';
import emp from './img/invoker_emp.png';
import tornado from './img/invoker_tornado.png';
import alacrity from './img/invoker_alacrity.png';
import sun_strike from './img/invoker_sun_strike.png';
import forge_spirit from './img/invoker_forge_spirit.png';
import chaos_meteor from './img/invoker_chaos_meteor.png';
import deafening_blast from './img/invoker_deafening_blast.png';

import icy_path from './img/icons_old_invoker/icy_path.png';
import portal from './img/icons_old_invoker/portal.png';
import betrayal from './img/icons_old_invoker/betrayal.png';
import mana_burn from './img/icons_old_invoker/mana_burn.png';
import tornado_blast from './img/icons_old_invoker/tornado.png';
import old_emp from './img/icons_old_invoker/emp.png';
import telelightning from './img/icons_old_invoker/telelightning.png';
import shock from './img/icons_old_invoker/shock.png';
import frost_nova from './img/icons_old_invoker/frost_nova.png';
import power_word from './img/icons_old_invoker/power_word.png';
import old_chaos_meteor from './img/icons_old_invoker/chaos_meteor.png';
import shroud_of_flames from './img/icons_old_invoker/shroud_of_flames.png';
import disarm from './img/icons_old_invoker/disarm.png';
import old_deafening_blast from './img/icons_old_invoker/deafening_blast.png';
import firebolt from './img/icons_old_invoker/firebolt.png';
import arcane_arts from './img/icons_old_invoker/arcane_arts.png';
import energy_ball from './img/icons_old_invoker/energy_ball.png';
import firestorm from './img/icons_old_invoker/firestorm.png';
import lightning_shield from './img/icons_old_invoker/lightning_shield.png';
import incinerate from './img/icons_old_invoker/incinerate.png';
import inferno from './img/icons_old_invoker/inferno.png';
import levitation from './img/icons_old_invoker/levitation.png';
import invisibility_aura from './img/icons_old_invoker/invisibility_aura.png';
import soul_reaver from './img/icons_old_invoker/soul_reaver.png';
import confuse from './img/icons_old_invoker/confuse.png';
import scout from './img/icons_old_invoker/scout.png';
import soul_blast from './img/icons_old_invoker/soul_blast.png';

import { Overlay } from './components/Overlay/Overlay.js';

function App() {
  ReactGA.initialize('G-26SK3D39ZL');
  const [gameState, setGameState] = React.useState('Waiting');
  const [firstCircle, setFirstCircle] = React.useState('');
  const [secondCircle, setSecondCircle] = React.useState('');
  const [thirdCircle, setThirdCircle] = React.useState('');
  const [spell1, setSpell1] = React.useState('nospell');
  const [spell2, setSpell2] = React.useState('nospell');
  const [update, setUpdate] = React.useState(0);
  const [randomSpell, setRandomSpell] = React.useState();
  const [resultGame, setResultGame] = React.useState();
  const [record, setRecord] = React.useState(999999);
  const [keyQuas, setKeyQuas] = React.useState(81);
  const [keyWex, setKeyWex] = React.useState(87);
  const [keyExort, setKeyExort] = React.useState(69);
  const [keyInvoke, setKeyInvoke] = React.useState(82);
  const [onClickOverlay, setOnClickOverlay] = React.useState(false);
  const [bindKeyName, setBindKeyName] = React.useState('QUAS');
  const [mode, setMode] = React.useState('new');
  const [arr, setArr] = React.useState([
    'cold snap',
    'ghost walk',
    'ice wall',
    'emp',
    'tornado',
    'alacrity',
    'sun strike',
    'forge spirit',
    'chaos meteor',
    'deafening blast',
  ]);
  const [oldSpellsArr, setOldSpellsArr] = React.useState([
    'icy path',
    'portal',
    'betrayal',
    'mana burn',
    'tornado blast',
    'emp',
    'telelightning',
    'shock',
    'frost nova',
    'power word',
    'chaos meteor',
    'shroud of flames',
    'disarm',
    'deafening blast',
    'firebolt',
    'arcane arts',
    'energy ball',
    'firestorm',
    'lightning shield',
    'incinerate',
    'inferno',
    'levitation',
    'invisibility aura',
    'soul reaver',
    'confuse',
    'scout',
    'soul blast'
  ]);
  const [stop, setStop] = React.useState(false);
  const updateRef = React.useRef(update);
  const stopRef = React.useRef(stop);

  React.useEffect(() => {
    updateRef.current = update;
  }, [update]);
  React.useEffect(() => {
    stopRef.current = stop;
  }, [stop]);
  const stopTimer = (timerId) => {
    clearInterval(timerId);
  };
  const [valueTimer, setValueTimer] = React.useState(0);

  const startTimer = () => {
    let value = 0;
    const timerI = setInterval(function () {
      value = value + 1 / 60;
      setValueTimer(value.toFixed(2));
      if (updateRef.current > (mode === 'new' ? 9 : 26)) {
        setResultGame(value.toFixed(2));
        setGameState('Finished');
        if (value < record && updateRef.current > (mode === 'new' ? 9 : 26)) {
          setRecord(value.toFixed(2));
        }
        stopTimer(timerI);
      }
      if (stopRef.current) {
        stopTimer(timerI);
      }
    }, 1000 / 60);
  };

  const generateSpell = () => {
    let rndIndex = Math.floor(Math.random() * arr.length);
    setArr(arr.filter((el) => el !== arr[rndIndex]));
    setRandomSpell(arr[rndIndex]);
  };

  const generateOldSpell = () => {
    let rndIndex = Math.floor(Math.random() * oldSpellsArr.length);
    setOldSpellsArr(oldSpellsArr.filter((el) => el !== oldSpellsArr[rndIndex]));
    setRandomSpell(oldSpellsArr[rndIndex]);
  };

  const verifingSpell = (spell) => {
    if (spell === randomSpell) {
      generateSpell();

      setUpdate(update + 1);
    }
  };

  const verifingOldSpell = (spell) => {
    if (spell === randomSpell) {
      generateOldSpell();

      setUpdate(update + 1);
    }
  };

  const invokeSpell = (key) => {
    if (key === keyInvoke) {
      let spell = `${firstCircle}${secondCircle}${thirdCircle}`;

      if (spell === `${keyQuas}${keyQuas}${keyQuas}`) {
        setSpell1(`cold snap`);
        spell = `cold snap`;
        if (spell1 !== `cold snap`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyQuas}${keyQuas}${keyExort}` ||
        spell === `${keyQuas}${keyExort}${keyQuas}` ||
        spell === `${keyExort}${keyQuas}${keyQuas}`
      ) {
        setSpell1(`ice wall`);
        spell = `ice wall`;
        if (spell1 !== `ice wall`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyQuas}${keyQuas}${keyWex}` ||
        spell === `${keyQuas}${keyWex}${keyQuas}` ||
        spell === `${keyWex}${keyQuas}${keyQuas}`
      ) {
        setSpell1(`ghost walk`);
        spell = `ghost walk`;
        if (spell1 !== `ghost walk`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyWex}${keyWex}`) {
        setSpell1(`emp`);
        spell = `emp`;
        if (spell1 !== `emp`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyWex}${keyWex}${keyQuas}` ||
        spell === `${keyWex}${keyQuas}${keyWex}` ||
        spell === `${keyQuas}${keyWex}${keyWex}`
      ) {
        setSpell1(`tornado`);
        spell = `tornado`;
        if (spell1 !== `tornado`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyWex}${keyWex}${keyExort}` ||
        spell === `${keyWex}${keyExort}${keyWex}` ||
        spell === `${keyExort}${keyWex}${keyWex}`
      ) {
        setSpell1(`alacrity`);
        spell = `alacrity`;
        if (spell1 !== `alacrity`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyExort}${keyExort}`) {
        setSpell1(`sun strike`);
        spell = `sun strike`;
        if (spell1 !== `sun strike`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyExort}${keyExort}${keyQuas}` ||
        spell === `${keyExort}${keyQuas}${keyExort}` ||
        spell === `${keyQuas}${keyExort}${keyExort}`
      ) {
        setSpell1(`forge spirit`);
        spell = `forge spirit`;
        if (spell1 !== `forge spirit`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyExort}${keyExort}${keyWex}` ||
        spell === `${keyExort}${keyWex}${keyExort}` ||
        spell === `${keyWex}${keyExort}${keyExort}`
      ) {
        setSpell1(`chaos meteor`);
        spell = `chaos meteor`;
        if (spell1 !== `chaos meteor`) {
          setSpell2(spell1);
        }
      }

      if (
        spell === `${keyQuas}${keyWex}${keyExort}` ||
        spell === `${keyQuas}${keyExort}${keyWex}` ||
        spell === `${keyWex}${keyQuas}${keyExort}` ||
        spell === `${keyWex}${keyExort}${keyQuas}` ||
        spell === `${keyExort}${keyQuas}${keyWex}` ||
        spell === `${keyExort}${keyWex}${keyQuas}`
      ) {
        setSpell1(`deafening blast`);
        spell = `deafening blast`;
        if (spell1 !== `deafening blast`) {
          setSpell2(spell1);
        }
      }

      verifingSpell(spell);
    }
  };

  const invokeOldInvokerSpells = (key) => {
    if (key === keyInvoke) {
      let spell = `${firstCircle}${secondCircle}${thirdCircle}`;

      if (spell === `${keyQuas}${keyQuas}${keyQuas}`) {
        setSpell1(`icy path`);
        spell = `icy path`;
        if (spell1 !== `icy path`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyQuas}${keyWex}`) {
        setSpell1(`portal`);
        spell = `portal`;
        if (spell1 !== `portal`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyWex}${keyQuas}`) {
        setSpell1(`betrayal`);
        spell = `betrayal`;
        if (spell1 !== `betrayal`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyQuas}${keyQuas}`) {
        setSpell1(`mana burn`);
        spell = `mana burn`;
        if (spell1 !== `mana burn`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyWex}${keyWex}`) {
        setSpell1(`tornado blast`);
        spell = `tornado blast`;
        if (spell1 !== `tornado blast`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyQuas}${keyWex}`) {
        setSpell1(`emp`);
        spell = `emp`;
        if (spell1 !== `emp`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyWex}${keyQuas}`) {
        setSpell1(`telelightning`);
        spell = `telelightning`;
        if (spell1 !== `telelightning`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyWex}${keyWex}`) {
        setSpell1(`shock`);
        spell = `shock`;
        if (spell1 !== `shock`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyQuas}${keyExort}`) {
        setSpell1(`frost nova`);
        spell = `frost nova`;
        if (spell1 !== `frost nova`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyExort}${keyQuas}`) {
        setSpell1(`power word`);
        spell = `power word`;
        if (spell1 !== `power word`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyQuas}${keyQuas}`) {
        setSpell1(`chaos meteor`);
        spell = `chaos meteor`;
        if (spell1 !== `chaos meteor`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyExort}${keyExort}`) {
        setSpell1(`shroud of flames`);
        spell = `shroud of flames`;
        if (spell1 !== `shroud of flames`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyQuas}${keyExort}`) {
        setSpell1(`disarm`);
        spell = `disarm`;
        if (spell1 !== `disarm`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyExort}${keyQuas}`) {
        setSpell1(`deafening blast`);
        spell = `deafening blast`;
        if (spell1 !== `deafening blast`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyExort}${keyExort}`) {
        setSpell1(`firebolt`);
        spell = `firebolt`;
        if (spell1 !== `firebolt`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyExort}${keyExort}`) {
        setSpell1(`firebolt`);
        spell = `firebolt`;
        if (spell1 !== `firebolt`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyWex}${keyExort}`) {
        setSpell1(`arcane arts`);
        spell = `arcane arts`;
        if (spell1 !== `arcane arts`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyExort}${keyWex}`) {
        setSpell1(`energy ball`);
        spell = `energy ball`;
        if (spell1 !== `energy ball`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyWex}${keyWex}`) {
        setSpell1(`firestorm`);
        spell = `firestorm`;
        if (spell1 !== `firestorm`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyExort}${keyExort}`) {
        setSpell1(`lightning shield`);
        spell = `lightning shield`;
        if (spell1 !== `lightning shield`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyWex}${keyExort}`) {
        setSpell1(`incinerate`);
        spell = `incinerate`;
        if (spell1 !== `incinerate`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyExort}${keyWex}`) {
        setSpell1(`inferno`);
        spell = `inferno`;
        if (spell1 !== `inferno`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyWex}${keyExort}`) {
        setSpell1(`levitation`);
        spell = `levitation`;
        if (spell1 !== `levitation`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyQuas}${keyExort}${keyWex}`) {
        setSpell1(`invisibility aura`);
        spell = `invisibility aura`;
        if (spell1 !== `invisibility aura`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyWex}${keyQuas}`) {
        setSpell1(`soul reaver`);
        spell = `soul reaver`;
        if (spell1 !== `soul reaver`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyExort}${keyQuas}${keyWex}`) {
        setSpell1(`confuse`);
        spell = `confuse`;
        if (spell1 !== `confuse`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyExort}${keyQuas}`) {
        setSpell1(`scout`);
        spell = `scout`;
        if (spell1 !== `scout`) {
          setSpell2(spell1);
        }
      }

      if (spell === `${keyWex}${keyQuas}${keyExort}`) {
        setSpell1(`soul blast`);
        spell = `soul blast`;
        if (spell1 !== `soul blast`) {
          setSpell2(spell1);
        }
      }

      verifingOldSpell(spell);
    }
  }

  const setCircles = (key) => {
    if ((key === keyQuas || key === keyWex || key === keyExort) && gameState === 'Started') {
      setFirstCircle(secondCircle);
      setSecondCircle(thirdCircle);
      setThirdCircle(key);
    }
  };

  const startGame = () => {
    setGameState('Started');
    mode === 'new' ? generateSpell() : generateOldSpell()
    setStop(false);
    startTimer();
  };

  const endGame = () => {
    setGameState('Waiting');
    setSpell1('nospell');
    setSpell1('nospell');
    setSpell2('nospell');
    setFirstCircle('');
    setSecondCircle('');
    setThirdCircle('');
    setUpdate(0);
    setArr([
      'cold snap',
      'ghost walk',
      'ice wall',
      'emp',
      'tornado',
      'alacrity',
      'sun strike',
      'forge spirit',
      'chaos meteor',
      'deafening blast',
    ]);
    setOldSpellsArr([
      'icy path',
    'portal',
    'betrayal',
    'mana burn',
    'tornado blast',
    'emp',
    'telelightning',
    'shock',
    'frost nova',
    'power word',
    'chaos meteor',
    'shroud of flames',
    'disarm',
    'deafening blast',
    'firebolt',
    'arcane arts',
    'energy ball',
    'firestorm',
    'lightning shield',
    'incinerate',
    'inferno',
    'levitation',
    'invisibility aura',
    'soul reaver',
    'confuse',
    'scout',
    'soul blast'
    ]);
    setStop(true);
    console.log('Game waiting');
  };

  const changingGameState = (key) => {
    if (key === 13 && gameState === 'Waiting') {
      startGame();
    }
    if (key === 13 && (gameState === 'Started' || gameState === 'Finished')) {
      endGame();
    }
  };

  const handleKeyClick = (event) => {
    changingGameState(event.keyCode);
    setCircles(event.keyCode);
    mode === 'new' ? invokeSpell(event.keyCode) : invokeOldInvokerSpells(event.keyCode)
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyClick);
    return () => {
      document.removeEventListener('keydown', handleKeyClick);
    };
  });

  const setKeyBinds = (key) => {
    const setKey = (event) => {
      key(event.keyCode);
      setOnClickOverlay(false);
      document.removeEventListener('keydown', setKey);
    };
    document.addEventListener('keydown', setKey);
  };
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <div id="yandex_rtb_R-A-13260354-1" style={{backgroundColor: '#fff', width: '100%', height: '120px'}}></div>
            <div className="firstBlock">
              {onClickOverlay ? <Overlay keyName={bindKeyName} /> : null}
              <div className="controlls">
                <h2>Controlls</h2>
                <ul className="controll__list">
                  <li>
                    <img src={mode === 'new' ? quas : old_quas} alt="quas"></img>
                    <p>{String.fromCharCode(keyQuas)} - Quas</p>
                  </li>
                  <li>
                    <img src={mode === 'new' ? wex : old_wex} alt="wex"></img>
                    <p>{String.fromCharCode(keyWex)} - Wex</p>
                  </li>
                  <li>
                    <img src={mode === 'new' ? exort : old_exort} alt="exort"></img>
                    <p>{String.fromCharCode(keyExort)} - Exort</p>
                  </li>
                  <li>
                    <img src={nospell} alt="spell1"></img>
                    <p>D - Spell 1 </p>
                  </li>
                  <li>
                    <img src={nospell} alt="spell2"></img>
                    <p>F - Spell 2 </p>
                  </li>
                  <li>
                    <img src={mode === 'new' ? invokeImg : old_invoke} alt="invoke"></img>
                    <p>{String.fromCharCode(keyInvoke)} - Invoke</p>
                  </li>
                </ul>
                <h3 className="h3__keybinds">
                  Set keybinds{' '}
                  <button
                    className="key__binds__button"
                    onClick={() => {
                      setKeyQuas(81);
                      setKeyWex(87);
                      setKeyExort(69);
                      setKeyInvoke(82);
                    }}
                  >
                    Reset
                  </button>
                </h3>
                <div className="keybinds">
                  <button
                    className="key__binds__button"
                    onClick={() => {
                      setOnClickOverlay(true);
                      setKeyBinds(setKeyQuas);
                      setBindKeyName('QUAS');
                    }}
                  >
                    QUAS
                  </button>
                  <button
                    className="key__binds__button"
                    onClick={() => {
                      setOnClickOverlay(true);
                      setKeyBinds(setKeyWex);
                      setBindKeyName('WEX');
                    }}
                  >
                    WEX
                  </button>
                  <button
                    className="key__binds__button"
                    onClick={() => {
                      setOnClickOverlay(true);
                      setKeyBinds(setKeyExort);
                      setBindKeyName('EXORT');
                    }}
                  >
                    EXORT
                  </button>
                  <button
                    className="key__binds__button"
                    onClick={() => {
                      setOnClickOverlay(true);
                      setKeyBinds(setKeyInvoke);
                      setBindKeyName('INVOKE');
                    }}
                  >
                    INVOKE
                  </button>
                </div>
              </div>
              {gameState === 'Waiting' ? (
                <PreviusGameState
                  gameState={gameState}
                  startGame={startGame}
                  endGame={endGame}
                  keyQuas={keyQuas}
                  keyWex={keyWex}
                  keyExort={keyExort}
                  keyInvoke={keyInvoke}
                  setGameState={setGameState}
                  record={record}
                  setRecord={setRecord}
                  randomSpell={randomSpell}
                  setResultGame={setResultGame}
                  setRandomSpell={setRandomSpell}
                  spell1={spell1}
                  spell2={spell2}
                  setSpell1={setSpell1}
                  setSpell2={setSpell2}
                  firstCircle={firstCircle}
                  setFirstCircle={setFirstCircle}
                  secondCircle={secondCircle}
                  setSecondCircle={setSecondCircle}
                  thirdCircle={thirdCircle}
                  setThirdCircle={setThirdCircle}
                  update={update}
                  setUpdate={setUpdate}
                  mode={mode}
                  setMode={setMode}
                />
              ) : null}
              {gameState === 'Started' ? (
                <StartedGame
                  setGameState={setGameState}
                  endGame={endGame}
                  keyQuas={keyQuas}
                  keyWex={keyWex}
                  keyExort={keyExort}
                  keyInvoke={keyInvoke}
                  randomSpell={randomSpell}
                  spell1={spell1}
                  spell2={spell2}
                  firstCircle={firstCircle}
                  setFirstCircle={setFirstCircle}
                  secondCircle={secondCircle}
                  setSecondCircle={setSecondCircle}
                  thirdCircle={thirdCircle}
                  setThirdCircle={setThirdCircle}
                  update={update}
                  setUpdate={setUpdate}
                  valueTimer={valueTimer}
                  mode={mode}
                />
              ) : null}
              {gameState === 'Finished' ? (
                <FinishedGame
                  setGameState={setGameState}
                  endGame={endGame}
                  record={record}
                  setRecord={setRecord}
                  resultGame={resultGame}
                  mode={mode}
                />
              ) : null}
              <div className="spells">
                <h2>Spells</h2>
                {
                  mode === 'new' ?
                  <ul className="spell__list">
                    <li>
                      <img src={cold_snap} alt="cold_snap"></img>
                      <p>
                        Cold Snap - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}{' '}
                        {String.fromCharCode(keyQuas)}
                      </p>
                    </li>
                    <li>
                      <img src={ghost_walk} alt="ghost_walk"></img>
                      <p>
                        Ghost Walk - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}{' '}
                        {String.fromCharCode(keyWex)}
                      </p>
                    </li>
                    <li>
                      <img src={ice_wall} alt="ice_wall"></img>
                      <p>
                        Ice Wall - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}{' '}
                        {String.fromCharCode(keyExort)}
                      </p>
                    </li>
                    <li>
                      <img src={emp} alt="emp"></img>
                      <p>
                        EMP - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}{' '}
                        {String.fromCharCode(keyWex)}
                      </p>
                    </li>
                    <li>
                      <img src={tornado} alt="tornado"></img>
                      <p>
                        Tornado - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}{' '}
                        {String.fromCharCode(keyQuas)}
                      </p>
                    </li>
                    <li>
                      <img src={alacrity} alt="alacrity"></img>
                      <p>
                        Alacrity - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}{' '}
                        {String.fromCharCode(keyExort)}
                      </p>
                    </li>
                    <li>
                      <img src={sun_strike} alt="sun_strike"></img>
                      <p>
                        Sun Strike - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}{' '}
                        {String.fromCharCode(keyExort)}
                      </p>
                    </li>
                    <li>
                      <img src={forge_spirit} alt="forge_spirit"></img>
                      <p>
                        Forge Spirit - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}{' '}
                        {String.fromCharCode(keyQuas)}
                      </p>
                    </li>
                    <li>
                      <img src={chaos_meteor} alt="chaos_meteor"></img>
                      <p>
                        Chaos Meteor - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}{' '}
                        {String.fromCharCode(keyWex)}
                      </p>
                    </li>
                    <li>
                      <img src={deafening_blast} alt="deafening_blast"></img>
                      <p>
                        Deafening Blast - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)}{' '}
                        {String.fromCharCode(keyExort)}
                      </p>
                    </li>
                  </ul>
                  :
                  <ul className="spell__list" style={{overflowX: 'hidden', overflowY: 'scroll'}}>
                    <li>
                      <img src={icy_path} alt="icy_path"></img>
                      <p>
                        Icy Path - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={portal} alt="portal"></img>
                      <p>
                        Portal - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={betrayal} alt="betrayal"></img>
                      <p>
                        Betrayal - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={mana_burn} alt="mana_burn"></img>
                      <p>
                        Mana Burn - {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={tornado_blast} alt="tornado_blast"></img>
                      <p>
                        Tornado Blast - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={old_emp} alt="old_emp"></img>
                      <p>
                        EMP - {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={telelightning} alt="telelightning"></img>
                      <p>
                        Telelightning - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={shock} alt="shock"></img>
                      <p>
                        Shock - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={frost_nova} alt="frost_nova"></img>
                      <p>
                        Frost Nova - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={power_word} alt="power_word"></img>
                      <p>
                        Power Word - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={old_chaos_meteor} alt="old_chaos_meteor"></img>
                      <p>
                        Chaos Meteor - {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={shroud_of_flames} alt="shroud_of_flames"></img>
                      <p>
                        Shroud of Flames - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={disarm} alt="disarm"></img>
                      <p>
                        Disarm - {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={old_deafening_blast} alt="old_deafening_blast"></img>
                      <p>
                        Deafening Blast - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={firebolt} alt="firebolt"></img>
                      <p>
                        Firebolt - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={arcane_arts} alt="arcane_arts"></img>
                      <p>
                        Arcane Arts - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={energy_ball} alt="energy_ball"></img>
                      <p>
                        Energy Ball - {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={firestorm} alt="firestorm"></img>
                      <p>
                        Firestorm - {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={lightning_shield} alt="lightning_shield"></img>
                      <p>
                        Lightning Shield - {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={incinerate} alt="incinerate"></img>
                      <p>
                        Incinerate - {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={inferno} alt="inferno"></img>
                      <p>
                        Inferno - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={levitation} alt="levitation"></img>
                      <p>
                        Levitation - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>

                    <li>
                      <img src={invisibility_aura} alt="invisibility_aura"></img>
                      <p>
                        Invisibility Aura - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={soul_reaver} alt="soul_reaver"></img>
                      <p>
                        Soul Reaver - {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={confuse} alt="confuse"></img>
                      <p>
                        Confuse - {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)}
                      </p>
                    </li>

                    <li>
                      <img src={scout} alt="scout"></img>
                      <p>
                        Scout - {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)}
                      </p>
                    </li>

                    <li>
                      <img src={soul_blast} alt="soul_blast"></img>
                      <p>
                        Soul Blast - {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)}
                      </p>
                    </li>
                  
                  </ul>
                }
              </div>
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
