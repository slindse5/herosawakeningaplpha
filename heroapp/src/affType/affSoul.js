import React, { forwardRef, Component}  from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import affirmationService from '../Services/requestService'
import videoBG from '../videos/Soulguard.mp4';
import Type from '../Type/TypeSoul.tsx';



class affSoul extends Component {
  constructor(props) {
    super(props);
    this.state = {character: undefined};   
  }
  
  async componentDidMount() {
    const { match: { params } } = this.props;

    setTimeout(() => {
      document.getElementById('overlay_blk_fast').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('overlay_blk_fast').style.display = 'none';
      }, 500);
    }, 10);
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function(event) {
       window.history.pushState(null, document.title, window.location.href);
    });
  }


  spawnDialog() {
    document.getElementById('overlay_1').style.display = 'block';
    setTimeout(() => {
      document.getElementById('overlay_1').style.opacity = 1;
    }, 10);

  }

  destroyDialog() {
    document.getElementById('overlay_1').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('overlay_1').style.display = 'none';
    }, 1000);
  }
  repeat() {
    document.getElementById('overlay_2').style.opacity = 0;
    document.querySelector('video').play();
    setTimeout(() => {
      document.getElementById('overlay_2').style.display = 'none';
    }, 1000);
  }

  test_ended() {
    document.getElementById('overlay_2').style.display = 'block';
    setTimeout(() => {
      document.getElementById('audio_end').play();
      document.getElementById('overlay_2').style.opacity = 1;
    }, 10);
  }
  startGame = () =>  {
      var track = document.getElementById('aff');
      track.play();
      this.child.current.affTimer();
  }

  render() {
      
    return ( 
        <div>
             <Type>
           
           </Type>
        <div className="contentplayer">
            
            <video autoPlay muted loop id="myVideo">
           <source src={videoBG} type="video/mp4" />
            </video>
         </div>    
       

        
    </div>
    )
  }
}

export default affSoul;