import React, {Component}  from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XpContext } from '../xpContext';
import GlobalVariables from '../createVariables';
import useTypingGame from "react-typing-game-hook";
import { textSpanContainsTextSpan } from 'typescript';
import affTrack from '../audio/Strategist.wav';
import Button from "../customButton";
import warn from '../audio/warn.wav';
import xpGain from '../audio/xpmagic.wav';
import endAudio from '../audio/endStrat.wav';
import lvl from '../audio/levelup.wav';
import '../App.css';
import expGain from '../images/expGain.gif';
import affTrackLow from '../audio/Strat2.wav';

var xpM = 0;
var i = 0;
var err = 0;
var xp = 1;
var currXP = 0;
var addXP = 1;

var bonus = 0;
var bonusCounter = 0;
var started = 0;

var ended = 0;
var bonusXP = 0;
var errors = 0;
var corrects = 0;
var corPercent = 0;
var tmr = null;
var totalChar = 0;
var rank = '';
var critM = 0;

const TypeSt = () => {
  var tXP = GlobalVariables.getXP();
  var level = GlobalVariables.getLevel();
  var xpNeed = GlobalVariables.getNeed();
  var uXP = GlobalVariables.getuXP();
  var xpPercent = Math.ceil((GlobalVariables.getxpPercent() * 100) );
  var myVar;

  let text_array = [
    "I accept responsibility",
    "This is my responsibility, and therefore mine to fix",
    "How I react is my choice",
    "I am protective of my inner world",
    "My value is decided by me",
    "I am the only person responsible for my decisions and actions",
    "I choose to empower myself",
    "I create an environment that empowers me",
    "I make it happen.",
    "I have everything in me",
    "I am self-validated, and self-defined",
    "My confidence is derived from within",
    "I am a tiger in the jungle of life",
    "I am a splinter-cell. Drop me anywhere, and I thrive."
  ];
 
  let text = text_array[i];

  const {
    states: {
      charsState,
      length,
      currIndex,
      currChar,
      correctChar,
      errorChar,
      phase,
      startTime,
      endTime
    },
    actions: { insertTyping, resetTyping, deleteTyping }
  } = useTypingGame(text, {
    skipCurrentWordOnSpace: false,
    pauseOnError: false,
    countErrors: 'everytime',
  });

  const handleKey = (key: any) => {
    if (key === "Escape") {
      resetTyping();
    } else if (key === "Backspace") {
      deleteTyping(false);
    } else if (key.length === 1) {
      insertTyping(key);
    }
  };
  function magicAdd() {
    myVar = setTimeout(hideMagic, 1000);
  }
  function hideMagic() {
    document.getElementById('gain')!.className = 'hide';
  }
  if (started === 1) { 
    var gain = document.getElementById('line'); 
    if (currIndex + 1 === length) {
      xpM = xpM + .25;
      bonusCounter = bonusCounter + 1;
      totalChar = totalChar + length;
      
      corrects = corrects + correctChar;
      var errornumb = document.getElementsByClassName("red").length;
      err = err + errornumb;
      currXP = xp * correctChar;
      addXP = Math.round((currXP - (errorChar * 3)) * xpM);
      //xpPercent = Math.round((uXP/xpNeed) * 100);
      (gain as HTMLAudioElement).volume = .1;
      (gain as HTMLAudioElement).play();
      if (errorChar > correctChar) {
        addXP = Math.round(correctChar * xpM);
      }
      if (errornumb === 0) {
      document.getElementById('hit')!.className = 'crithit';
      document.getElementById('mult')!.className = 'multhit';
      critM = critM + 1;
     
      GlobalVariables.addXP(Math.round(addXP = addXP * (critM / 2)));
      }
      else {
        document.getElementById('hit')!.className = 'hit';
        GlobalVariables.addXP(addXP);
        critM = 0;
      }
      
     // document.getElementById('gain')!.className = 'see';
      
      uXP = (GlobalVariables.getuXP());
     // magicAdd();
      if (bonusCounter >= 5) {
        bonus = bonus + .25;
        bonusCounter = 0;
      }
     
      errors = errors + errorChar;
      setTimeout(() => {
        document.getElementById('mult')!.className = 'hithide';}, 2000);     
        
      setTimeout(() => {
        document.getElementById('hit')!.className = 'hithide';}, 2000);
       
      resetTyping();
    }
    
  } 

  /*setTimeout(() => {
    document.getElementById('overlay_blk_fast')!.setAttribute("style","opacity:0; -moz-opacity:0; filter:alpha(opacity=0)");
    setTimeout(() => {
      document.getElementById('overlay_blk_fast')!.style.display = 'none';
    }, 1000);
  }, 10);*/

  function spawnDialog() {
    
      document.getElementById('overlay_1')!.setAttribute("style","display: block; opacity:1; -moz-opacity:1; filter:alpha(opacity=100); z-index: 20");
 
  }

  function destroyDialog() {
    document.getElementById('overlay_1')!.setAttribute("style","display: none; opacity:0; -moz-opacity:0; filter:alpha(opacity=0)");
    document.getElementById('overlay_3')!.setAttribute("style","display: none; opacity:0; -moz-opacity:0; filter:alpha(opacity=0)");
  }

  function repeat() {
    i=0;
    critM = 0;
    document.getElementById('overlay_2')!.setAttribute("style","display: none; opacity:0; -moz-opacity:0; filter:alpha(opacity=0)");
    playTrack();
    return i;
  }

  var tmr;
  var cd = 18;

  function stopTimer() {
    clearInterval(tmr);
    ended = 1;
}
function endGame() {
  stopTimer();
  i = 0;
  critM = 0;
   var end = document.getElementById('audio_end')!;
   (end as HTMLAudioElement).play();
   var fdbk = document.getElementById('fdbkbtn')!;
   fdbk.click();
   document.getElementById('overlay_2').setAttribute("style","display: block; opacity:1; -moz-opacity:1; filter:alpha(opacity=100); z-index: 20");
   
}
function endGameEarly() {

 stopTimer();
 i = 0;
 critM = 0;
 resetTyping();
 var trackStop = document.getElementById('aff');
 (trackStop as HTMLAudioElement).pause();
 var end = document.getElementById('audio_end')!;
 (end as HTMLAudioElement).play();
 var fdbk = document.getElementById('fdbkbtn')!;
   fdbk.click();
 //document.getElementById('overlay_2').setAttribute("style","display: block; opacity:1; -moz-opacity:1; filter:alpha(opacity=100); z-index: 20");
 
}
  function affTimer() {
    ended = 0;
    tmr = setInterval(tock, 1000);
    if (ended === 1) {
      clearInterval(tmr);
    }
  }  

  function tock() {
    if (ended === 0) {
      corPercent = (corrects/totalChar) * 100;
      GlobalVariables.setcorPercent(corPercent);
      uXP = GlobalVariables.getuXP();
      tXP = GlobalVariables.getXP();
      xpPercent = Math.ceil((GlobalVariables.getxpPercent() * 100) );  
      bonusXP = bonus * corrects;
      var barfill = document.getElementById('xpBar')!;
      if (cd >= 3) {
        var field = document.getElementById('start')!;
        field.className = 'typing-test visible';
        var field = document.getElementById('start')!;
        field.focus();
        cd = cd - 1;
      }
      else if (cd < 3 && cd > 1) {
        cd = cd - 1;
        var soul = document.getElementById('soul')!;
        var field = document.getElementById('start')!;
        field.className = 'typing-test hidden';
        var warn = document.getElementById('warn')!;
        (warn as HTMLAudioElement).play();
        xpPercent = Math.ceil((GlobalVariables.getxpPercent() * 100) );
     
      
      }
      else if (cd <= 1 && cd > 0) {
        cd = cd - 1;
       
        var field = document.getElementById('start')!;
        field.blur();
      }
      else if (cd <= 0) {
        if (i < text_array.length - 1) {
          i = i + 1;
          cd = 17;
          resetTyping();
          var field = document.getElementById('start')!;
          field.focus();
        }
        else {
          if (ended === 0) {
          i = 0;          
          GlobalVariables.addXP(bonusXP);
          GlobalVariables.getuXP();
          GlobalVariables.getxpPercent();
         
          endGame();
          ended = 1;
        }        
      }
    }
    var soul = document.getElementById('soul')!;
    if (level < 5) {
      soul.className = 'lvl1';
    }
    else if (level >=5 && level < 10) {
      soul.className = 'lvl5';
    }
    else if (level >=10 && level < 15) {
      soul.className = 'lvl10';
    }
    else {
      soul.className = 'lvl15';
    }
    xpPercent = Math.ceil((GlobalVariables.getxpPercent() * 100));
    if (xpPercent === 0) {
      barfill.className = "bar0";
    }
    else if (xpPercent === 1) {
      barfill.className = "bar1";
    }else if (xpPercent === 2) {
      barfill.className = "bar2";
    }else if (xpPercent === 3) {
      barfill.className = "bar3";
    }else if (xpPercent === 4) {
      barfill.className = "bar4";
    }else if (xpPercent === 5) {
      barfill.className = "bar5";
    }else if (xpPercent === 6) {
      barfill.className = "bar6";
    }else if (xpPercent === 7) {
      barfill.className = "bar7";
    }else if (xpPercent === 8) {
      barfill.className = "bar8";
    }else if (xpPercent === 9) {
      barfill.className = "bar9";
    }else if (xpPercent === 10) {
      barfill.className = "bar10";
    }else if (xpPercent === 11) {
      barfill.className = "bar11";
    }else if (xpPercent === 12) {
      barfill.className = "bar12";
    }else if (xpPercent === 13) {
      barfill.className = "bar13";
    }else if (xpPercent === 14) {
      barfill.className = "bar14";
    }else if (xpPercent === 15) {
      barfill.className = "bar15";
    }else if (xpPercent === 16) {
      barfill.className = "bar16";
    }else if (xpPercent === 17) {
      barfill.className = "bar17";
    }else if (xpPercent === 18) {
      barfill.className = "bar18";
    }else if (xpPercent === 19) {
      barfill.className = "bar19";
    }else if (xpPercent === 20) {
      barfill.className = "bar20";
    }else if (xpPercent === 21) {
      barfill.className = "bar21";
    }else if (xpPercent === 22) {
      barfill.className = "bar22";
    }else if (xpPercent === 23) {
      barfill.className = "bar23";
    }else if (xpPercent === 24) {
      barfill.className = "bar24";
    }else if (xpPercent === 25) {
      barfill.className = "bar25";
    }else if (xpPercent === 26) {
      barfill.className = "bar26";
    }else if (xpPercent === 27) {
      barfill.className = "bar27";
    }else if (xpPercent === 28) {
      barfill.className = "bar28";
    }else if (xpPercent === 29) {
      barfill.className = "bar29";
    }else if (xpPercent === 30) {
      barfill.className = "bar30";
    }else if (xpPercent === 31) {
      barfill.className = "bar31";
    }else if (xpPercent === 32) {
      barfill.className = "bar32";
    }else if (xpPercent === 33) {
      barfill.className = "bar33";
    }else if (xpPercent === 34) {
      barfill.className = "bar34";
    }else if (xpPercent === 35) {
      barfill.className = "bar35";
    }else if (xpPercent === 36) {
      barfill.className = "bar36";
    }else if (xpPercent === 37) {
      barfill.className = "bar37";
    }else if (xpPercent === 38) {
      barfill.className = "bar38";
    }else if (xpPercent === 39) {
      barfill.className = "bar39";
    }else if (xpPercent === 40) {
      barfill.className = "bar40";
    }else if (xpPercent === 41) {
      barfill.className = "bar41";
    }else if (xpPercent === 42) {
      barfill.className = "bar42";
    }else if (xpPercent === 43) {
      barfill.className = "bar43";
    }else if (xpPercent === 44) {
      barfill.className = "bar44";
    }else if (xpPercent === 45) {
      barfill.className = "bar45";
    }else if (xpPercent === 46) {
      barfill.className = "bar46";
    }else if (xpPercent === 47) {
      barfill.className = "bar47";
    }else if (xpPercent === 48) {
      barfill.className = "bar48";
    }else if (xpPercent === 49) {
      barfill.className = "bar49";
    }else if (xpPercent === 50) {
      barfill.className = "bar50";
    }else if (xpPercent === 51) {
      barfill.className = "bar51";
    }else if (xpPercent === 52) {
      barfill.className = "bar52";
    }else if (xpPercent === 53) {
      barfill.className = "bar53";
    }else if (xpPercent === 54) {
      barfill.className = "bar54";
    }else if (xpPercent === 55) {
      barfill.className = "bar55";
    }else if (xpPercent === 56) {
      barfill.className = "bar56";
    }else if (xpPercent === 57) {
      barfill.className = "bar57";
    }else if (xpPercent === 58) {
      barfill.className = "bar58";
    }else if (xpPercent === 59) {
      barfill.className = "bar59";
    }else if (xpPercent === 60) {
      barfill.className = "bar60";
    }else if (xpPercent === 61) {
      barfill.className = "bar61";
    }else if (xpPercent === 62) {
      barfill.className = "bar62";
    }else if (xpPercent === 63) {
      barfill.className = "bar63";
    }else if (xpPercent === 64) {
      barfill.className = "bar64";
    }else if (xpPercent === 65) {
      barfill.className = "bar65";
    }else if (xpPercent === 66) {
      barfill.className = "bar66";
    }else if (xpPercent === 67) {
      barfill.className = "bar67";
    }else if (xpPercent === 68) {
      barfill.className = "bar68";
    }else if (xpPercent === 69) {
      barfill.className = "bar69";
    }else if (xpPercent === 70) {
      barfill.className = "bar70";
    }else if (xpPercent === 71) {
      barfill.className = "bar71";
    }else if (xpPercent === 72) {
      barfill.className = "bar72";
    }else if (xpPercent === 73) {
      barfill.className = "bar73";
    }else if (xpPercent === 74) {
      barfill.className = "bar74";
    }else if (xpPercent === 75) {
      barfill.className = "bar75";
    }else if (xpPercent === 76) {
      barfill.className = "bar76";
    }else if (xpPercent === 77) {
      barfill.className = "bar77";
    }else if (xpPercent === 78) {
      barfill.className = "bar78";
    }else if (xpPercent === 79) {
      barfill.className = "bar79";
    }else if (xpPercent === 80) {
      barfill.className = "bar80";
    }else if (xpPercent === 81) {
      barfill.className = "bar81";
    }else if (xpPercent === 82) {
      barfill.className = "bar82";
    }else if (xpPercent === 83) {
      barfill.className = "bar83";
    }else if (xpPercent === 84) {
      barfill.className = "bar84";
    }else if (xpPercent === 85) {
      barfill.className = "bar85";
    }else if (xpPercent === 86) {
      barfill.className = "bar86";
    }else if (xpPercent === 87) {
      barfill.className = "bar87";
    }else if (xpPercent === 88) {
      barfill.className = "bar88";
    }else if (xpPercent === 89) {
      barfill.className = "bar89";
    }else if (xpPercent === 90) {
      barfill.className = "bar90";
    }else if (xpPercent === 91) {
      barfill.className = "bar91";
    }else if (xpPercent === 92) {
      barfill.className = "bar92";
    }else if (xpPercent === 93) {
      barfill.className = "bar93";
    }else if (xpPercent === 94) {
      barfill.className = "bar94";
    }else if (xpPercent === 95) {
      barfill.className = "bar95";
    }else if (xpPercent === 96) {
      barfill.className = "bar96";
    }else if (xpPercent === 97) {
      barfill.className = "bar97";
    }else if (xpPercent === 98) {
      barfill.className = "bar98";
    }else if (xpPercent === 99) {
      barfill.className = "bar99";
    }else if (xpPercent >= 100) {
      barfill.className = "bar100";      
      var lvlSnd = document.getElementById('lvl');
      (lvlSnd as HTMLAudioElement).play();
      GlobalVariables.addLevel();
      level = GlobalVariables.getLevel();
      
      uXP = GlobalVariables.setuXP();
      GlobalVariables.updateNeed();
      xpNeed = GlobalVariables.getNeed();
    }
    var rank = document.getElementById('rankimg');
    if (corPercent === 100) {
      rank.className = 'S3';
    }
    else if (corPercent > 94 && corPercent < 100) {
      rank.className = 'S2';
    }
    else if (corPercent > 89 && corPercent < 95) {
      rank.className = 'S1';
    }
    else if (corPercent > 79 && corPercent < 90) {
      rank.className = 'S';
    }
    else if (corPercent > 69 && corPercent < 80) {
      rank.className = 'A';
    }
    else if (corPercent > 59 && corPercent < 70) {
      rank.className = 'B';
    }
    else if (corPercent >= 0 && corPercent < 60) {
      rank.className = 'C';
    }
   
  }
  
  }

  function playTrack() {
    var track = document.getElementById('aff');
    (track as HTMLAudioElement).play();
    
    var field = document.getElementById('start')!;
    field.className = 'typing-test visible';
    field.focus();
    started = 1;
    destroyDialog();
    affTimer();
  }
  
  return (
  <div>
  <div className="grid-container-player">
  
        <div className="contentplayer">
        <div id='gain' className='hide'></div><div id='soul'><div id='level'>{level}</div><div id='xpBar' className='xpBar'><div className="xp">{Number(GlobalVariables.getuXP()).toLocaleString()} / {Number(GlobalVariables.getNeed()).toLocaleString()} exp</div></div></div>
     <audio id='aff'><source src={affTrack} /></audio>
     <audio id='affL'><source src={affTrackLow} /></audio>
     <audio id='warn'><source src={warn} /></audio>
     <audio id='line'><source src={xpGain} /></audio>
     <audio id='lvl'><source src={lvl} /></audio>
     <audio id='audio_end'><source src={endAudio} /></audio>
     <div className="overlay_blk_fast" id="overlay_blk_fast"></div>
        <div className="overlay" id="overlay_1">
          <div className="dialog">
            <div className="dialogcontainer">
              <img className="dialogbg"/>
              <h3 className="dialogtext">Are you sure you would like to go back to the selection page?</h3>
              <h2 className="no" onClick={repeat}>No</h2>
              <Link to="/affirmation"><h2 className="yes">Yes</h2></Link>
            </div>
          </div>
        </div>
        <div className="overlay" id="overlay_2">
          <div className="dialog">
            <div className="dialogcontainer">
              <img className="dialogbg"/>
              <h3 className="dialogtext">Strength Channelled!<p>Accuracy: {Math.floor(corPercent * 10) / 10}%</p><p>Divine Knowledge Expressed: {xpM*4}</p><p>Bonus XP: {Math.round(bonusXP)} </p><div id='rankimg'><div className="rankspark"></div></div></h3>
              
              <Link to="/affirmation"><h2 className="no">Choose New Sign</h2></Link>
              <h2 className="yes" onClick={repeat}>Repeat</h2>
            </div>
          </div>
        </div>
        <div className="overlay" id="overlay_3">
          <div className="dialog">
            <div className="dialogcontainer">
              <img className="dialogbg"/>
              <h3 className="dialogtext">Channel the Discipline of the Strategist?</h3>
              <Link to="/affirmation"><h2 className="no">Go Back</h2></Link>
              <h2 className="yes" onClick={playTrack}>Begin</h2>
             
            </div>
          </div>
        </div>
        <div></div>
        
        <div
    className="typing-test"
    id="start"
    onKeyDown={(e) => {
        handleKey(e.key);
        e.preventDefault();
      }
    }
    tabIndex={0}
  >
     
     {text.split("").map((char: string, index: number) => {
      let state = charsState[index];
      let color = state === 0 ? "white" : state === 1 ? "green" : "red";
      
     
      return (
        <span
          key={char + index}
          //style={{color}}
          className={currIndex + 1 === index ? "curr-letter" : `${color}`}
        >
          {char}
          
        </span>
      );
    })}
    <div id="hit" className="hithide">+{Math.round(addXP)}XP</div><div id="mult" className='hithide'>x{critM}</div>
  </div>
  
  </div>
  
        <div className="aligntopright" onClick={spawnDialog}>
          <div className="backbtn-white" onClick={endGameEarly}></div>
        </div>
        
       
</div>
</div>
);
 
var barfill = document.getElementById('xpBar');
xpPercent = Math.ceil((GlobalVariables.getxpPercent() * 100) );
    if (xpPercent === 0) {
      barfill.className = "bar0";
    }
    else if (xpPercent === 1) {
      barfill.className = "bar1";
    }else if (xpPercent === 2) {
      barfill.className = "bar2";
    }else if (xpPercent === 3) {
      barfill.className = "bar3";
    }else if (xpPercent === 4) {
      barfill.className = "bar4";
    }else if (xpPercent === 5) {
      barfill.className = "bar5";
    }else if (xpPercent === 6) {
      barfill.className = "bar6";
    }else if (xpPercent === 7) {
      barfill.className = "bar7";
    }else if (xpPercent === 8) {
      barfill.className = "bar8";
    }else if (xpPercent === 9) {
      barfill.className = "bar9";
    }else if (xpPercent === 10) {
      barfill.className = "bar10";
    }else if (xpPercent === 11) {
      barfill.className = "bar11";
    }else if (xpPercent === 12) {
      barfill.className = "bar12";
    }else if (xpPercent === 13) {
      barfill.className = "bar13";
    }else if (xpPercent === 14) {
      barfill.className = "bar14";
    }else if (xpPercent === 15) {
      barfill.className = "bar15";
    }else if (xpPercent === 16) {
      barfill.className = "bar16";
    }else if (xpPercent === 17) {
      barfill.className = "bar17";
    }else if (xpPercent === 18) {
      barfill.className = "bar18";
    }else if (xpPercent === 19) {
      barfill.className = "bar19";
    }else if (xpPercent === 20) {
      barfill.className = "bar20";
    }else if (xpPercent === 21) {
      barfill.className = "bar21";
    }else if (xpPercent === 22) {
      barfill.className = "bar22";
    }else if (xpPercent === 23) {
      barfill.className = "bar23";
    }else if (xpPercent === 24) {
      barfill.className = "bar24";
    }else if (xpPercent === 25) {
      barfill.className = "bar25";
    }else if (xpPercent === 26) {
      barfill.className = "bar26";
    }else if (xpPercent === 27) {
      barfill.className = "bar27";
    }else if (xpPercent === 28) {
      barfill.className = "bar28";
    }else if (xpPercent === 29) {
      barfill.className = "bar29";
    }else if (xpPercent === 30) {
      barfill.className = "bar30";
    }else if (xpPercent === 31) {
      barfill.className = "bar31";
    }else if (xpPercent === 32) {
      barfill.className = "bar32";
    }else if (xpPercent === 33) {
      barfill.className = "bar33";
    }else if (xpPercent === 34) {
      barfill.className = "bar34";
    }else if (xpPercent === 35) {
      barfill.className = "bar35";
    }else if (xpPercent === 36) {
      barfill.className = "bar36";
    }else if (xpPercent === 37) {
      barfill.className = "bar37";
    }else if (xpPercent === 38) {
      barfill.className = "bar38";
    }else if (xpPercent === 39) {
      barfill.className = "bar39";
    }else if (xpPercent === 40) {
      barfill.className = "bar40";
    }else if (xpPercent === 41) {
      barfill.className = "bar41";
    }else if (xpPercent === 42) {
      barfill.className = "bar42";
    }else if (xpPercent === 43) {
      barfill.className = "bar4";
    }else if (xpPercent === 44) {
      barfill.className = "bar44";
    }else if (xpPercent === 45) {
      barfill.className = "bar45";
    }else if (xpPercent === 46) {
      barfill.className = "bar46";
    }else if (xpPercent === 47) {
      barfill.className = "bar47";
    }else if (xpPercent === 48) {
      barfill.className = "bar48";
    }else if (xpPercent === 49) {
      barfill.className = "bar49";
    }else if (xpPercent === 50) {
      barfill.className = "bar50";
    }else if (xpPercent === 51) {
      barfill.className = "bar51";
    }else if (xpPercent === 52) {
      barfill.className = "bar52";
    }else if (xpPercent === 53) {
      barfill.className = "bar53";
    }else if (xpPercent === 54) {
      barfill.className = "bar54";
    }else if (xpPercent === 55) {
      barfill.className = "bar55";
    }else if (xpPercent === 56) {
      barfill.className = "bar56";
    }else if (xpPercent === 57) {
      barfill.className = "bar57";
    }else if (xpPercent === 58) {
      barfill.className = "bar58";
    }else if (xpPercent === 59) {
      barfill.className = "bar59";
    }else if (xpPercent === 60) {
      barfill.className = "bar60";
    }else if (xpPercent === 61) {
      barfill.className = "bar61";
    }else if (xpPercent === 62) {
      barfill.className = "bar62";
    }else if (xpPercent === 63) {
      barfill.className = "bar63";
    }else if (xpPercent === 64) {
      barfill.className = "bar64";
    }else if (xpPercent === 65) {
      barfill.className = "bar65";
    }else if (xpPercent === 66) {
      barfill.className = "bar66";
    }else if (xpPercent === 67) {
      barfill.className = "bar67";
    }else if (xpPercent === 68) {
      barfill.className = "bar68";
    }else if (xpPercent === 69) {
      barfill.className = "bar69";
    }else if (xpPercent === 70) {
      barfill.className = "bar70";
    }else if (xpPercent === 71) {
      barfill.className = "bar71";
    }else if (xpPercent === 72) {
      barfill.className = "bar72";
    }else if (xpPercent === 73) {
      barfill.className = "bar73";
    }else if (xpPercent === 74) {
      barfill.className = "bar74";
    }else if (xpPercent === 75) {
      barfill.className = "bar75";
    }else if (xpPercent === 76) {
      barfill.className = "bar76";
    }else if (xpPercent === 77) {
      barfill.className = "bar77";
    }else if (xpPercent === 78) {
      barfill.className = "bar78";
    }else if (xpPercent === 79) {
      barfill.className = "bar79";
    }else if (xpPercent === 80) {
      barfill.className = "bar80";
    }else if (xpPercent === 81) {
      barfill.className = "bar81";
    }else if (xpPercent === 82) {
      barfill.className = "bar82";
    }else if (xpPercent === 83) {
      barfill.className = "bar83";
    }else if (xpPercent === 84) {
      barfill.className = "bar84";
    }else if (xpPercent === 85) {
      barfill.className = "bar85";
    }else if (xpPercent === 86) {
      barfill.className = "bar86";
    }else if (xpPercent === 87) {
      barfill.className = "bar87";
    }else if (xpPercent === 88) {
      barfill.className = "bar88";
    }else if (xpPercent === 89) {
      barfill.className = "bar89";
    }else if (xpPercent === 90) {
      barfill.className = "bar90";
    }else if (xpPercent === 91) {
      barfill.className = "bar91";
    }else if (xpPercent === 92) {
      barfill.className = "bar92";
    }else if (xpPercent === 93) {
      barfill.className = "bar93";
    }else if (xpPercent === 94) {
      barfill.className = "bar94";
    }else if (xpPercent === 95) {
      barfill.className = "bar95";
    }else if (xpPercent === 96) {
      barfill.className = "bar96";
    }else if (xpPercent === 97) {
      barfill.className = "bar97";
    }else if (xpPercent === 98) {
      barfill.className = "bar98";
    }else if (xpPercent === 99) {
      barfill.className = "bar99";
    }
}


export default TypeSt;