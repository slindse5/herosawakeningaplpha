import React, {Component}  from 'react';
import { useContext } from 'react';
import ListItemRight from './ListItemRight';
import ListItemLeft from './ListItemLeft';
import ListItemDetail from './ListItemDetail';
import GlobalVariables from '../createVariables';
import { Link } from 'react-router-dom';
import { XpContext } from '../xpContext';
import begin from '../audio/paper.wav';

class AffirmationSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0, characters: [], selected: undefined}
    
  }
  
  async componentDidMount() {
    
    this.setState({affLinks: ['/affExplorer', '/affSoul', '/affDruid', '/affChosen', '/affSpirit', '/affStrat']})
    var level = GlobalVariables.getLevel();
    var barfill = document.getElementById('xpBar');
    var soul = document.getElementById('soulAff');
    var xpPercent = Math.ceil(GlobalVariables.getxpPercent() * 100);
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
    var play = document.getElementById('begin');
    play.play();
    this.setState({characters: [
      {
        big_src: '/Images/select/explorerwithstars.png',
        birthsign_src: '/Images/select/explorerwithstars.png',
        title: '"I am enamored by the magic around me"',
        quotes: ['Cultivate a sense of wonder', 'Reconnect with your inner child', 'Appreciate the little things in life'],
        src: '/Images/select/explorericon.png',
        mini: '/Images/select/exsparkle.png',
        name: 'The Explorer',
        link: '/affExplorer',
        preview: '/Audio/preExplorer.wav',
        startQ: '/Audio/startExplorer.wav'
        },
        {
        big_src: '/Images/select/soulguard2withstars.png',
        birthsign_src: '/Images/select/soulguard2withstars.png',
        title: '"I choose to focus only on things that matter"',
        quotes: ['Create your reality', 'Write your own legendary story', 'Develop incredible self-control'],
        src: '/Images/select/soulguard2icon.png',
        mini: '/Images/select/exsparkle.png',
        name: 'The Soulguard',
        link: '/affSoul',
        preview: '/Audio/preSoul.wav',
        startQ: '/Audio/startSoul.wav'
      },
      {
        big_src: '/Images/select/thedruidwithstars.png',
        birthsign_src: '/Images/select/thedruidwithstars.png',
        title: '"All I need is within me"',
        quotes: ['Give yourself permission to be you', 'Release everything, and live with peace', 'Allow your unique self to shine through'],
        src: '/Images/select/thedruidicon.png',
        mini: '/Images/select/exsparkle.png',
        name: 'The Druid',
        link: '/affDruid',
        preview: '/Audio/preDruid.wav',
        startQ: '/Audio/startDruid.wav'
      },
      {
        big_src: '/Images/select/thechosenwithstars.png',
        birthsign_src: '/Images/select/thechosenwithstars.png',
        title: '"There is a divinity within"',
        quotes: ['Embrace your inner strength', 'Open yourself up to your own power', 'Bring your dream to life'],
        src: '/Images/select/thechosenicon.png',
        mini: '/Images/select/exsparkle.png',
        name: 'The Chosen',
        link: '/affChosen',
        preview: '/Audio/preChosen.wav',
        startQ: '/Audio/startChosen.wav'
      },
      {
        big_src: '/Images/select/thespiritedwithstars.png',
        birthsign_src: '/Images/select/thespiritedwithstars.png',
        title: '"Action is everything"',
        quotes: ['Make your own opportunity', 'Grind it out and put in the effort', 'Reach your dream with massive action'],
        src: '/Images/select/thespiritedicon.png',
        mini: '/Images/select/exsparkle.png',
        name: 'The Spirited',
        link: '/affSpirit',
        preview: '/Audio/preSpirit.wav',
        startQ: '/Audio/startSpirit.wav'
      },
      {
        big_src: '/Images/select/strategistwithstars.png',
        birthsign_src: '/Images/select/strategistwithstars.png',
        title: '"I am a splinter-cell. Drop me anywhere, and I thrive"',
        quotes: ['Take extreme ownership', 'Choose to empower yourself', 'Captain your ship, direct the sail'],
        src: '/Images/select/strategisticon.png',
        mini: '/Images/select/exsparkle.png',
        name: 'The Strategist',
        link: '/affStrat',
        preview: '/Audio/preStrat.wav',
        startQ: '/Audio/startStrat.wav'
      }
    ]})
    document.getElementById('listcontainer').addEventListener('scroll', (ev) => this.handleScrollMouse(ev));
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function(event) {
       window.history.pushState(null, document.title, window.location.href);
    });
  }

  async componentWillUnmount() {
    var old_element = document.getElementById("listcontainer");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
  }

  handleScrollMouse(event) {
      let scrollTop = event.srcElement.scrollTop // 0 - 1800
      let clientHeight = event.srcElement.clientHeight // 600
      let scrollHeigth = event.srcElement.scrollHeight  // 2400

      let percentage = parseInt((scrollTop / (scrollHeigth - clientHeight)) * 100);

      this.setState({value: percentage})
  }

  handleScroll(event) {
    let percentage = event.target.value;
    let clientHeight = document.getElementById('listcontainer').clientHeight // 600
    let scrollHeigth = document.getElementById('listcontainer').scrollHeight  // 2400
    
    let scrollTop = (percentage/100) * (scrollHeigth - clientHeight);
    document.getElementById('listcontainer').scrollTo(0, scrollTop)

    this.setState({value: event.target.value});
  }

  selectAffirmation(index) {
    this.setState({selected: this.state.characters[index]})
  }

  render() {
    var uXP = GlobalVariables.getuXP();
    var level = GlobalVariables.getLevel();
    var xpNeed = GlobalVariables.getNeed();
    var xpPercent = Math.ceil((GlobalVariables.getxpPercent() * 100) );

    return (
      <div id="container">
      <div id='level'>{level}</div><div id='soulAff'><div id='xpBar' className='xpBarAff'><div className="xp">{Number(uXP).toLocaleString()} / {Number(xpNeed).toLocaleString()} exp</div></div></div>
      <div className="grid-container">
         
        <div className="topleft"></div>
        <div className="top"></div>
       
        <div className="topright"></div>
        
        <div className="left"></div>
        
        <div className="content container-fluid row">
        
          <div className="col-4 h-100 row">
          <div className="listcontainer" id="listcontainer">
            {this.state.characters && this.state.characters.length > 0 && this.state.characters.map((e,i) => (
              <div key={e.name + i} onClick={() => this.selectAffirmation(i)}>
              {
              i%2==0
              ?
              <ListItemLeft selected={this.state.selected && this.state.selected.name == e.name} src={e.src} name={e.name}/>
              :
              <ListItemRight selected={this.state.selected && this.state.selected.name == e.name} src={e.src} name={e.name}></ListItemRight>
              }
              {i==this.state.characters.length - 1 ? <div></div> : <div className="ruler"></div>}
              </div>
            ))}
          
          </div>
          <audio id="begin" src={begin}></audio>
          <div className="scrollcontainer">
            <div className="scroller">
              <div className="scrollbar" id="scrollbar">
                <div className="scrollbartop"></div>
                <div className="scrollbarbody">
                  <input 
                    type="range" 
                    min="0" 
                    max="100"  
                    value={this.state.value} 
                    onChange={(ev) => this.handleScroll(ev)}
                    className="slider" 
                    id="scrollbarbody">
                  </input>
                </div>
                <div className="scrollbarbottom"></div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-8 h-100">
            {this.state.selected && (
              <ListItemDetail character={this.state.selected}></ListItemDetail>
            )}
            
            
          </div>
        </div>
        <div className="right"></div>
        <div className="bottomleft"></div>
        <div className="bottom"></div>
        <div className="bottomright"></div>
      </div>
      </div>
    )
   
    
  }
}

export default AffirmationSelection;