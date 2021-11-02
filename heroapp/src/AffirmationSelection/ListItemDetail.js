import React, {Component}  from 'react';
import { Link } from 'react-router-dom';
import GlobalVariables from '../createVariables';
import Player from '../Player/Player';
import preview from '../audio/preview.wav';

class ListItemDetail extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
  }

  playPreview() {
    document.getElementById('audio').play();
  }

  selectBirthsign() {
    document.getElementById('audio_start').play();
    document.getElementById('overlay_blk_slow').style.display = 'block';
    setTimeout(() => {
      document.getElementById('overlay_blk_slow').style.opacity = 1;
      
      setTimeout(() => {
        document.getElementById('link').click();
      }, 4000)
    }, 50)

  }

  render() {
    if (!this.props.character) {
      return <div></div>
    }
    return (
        <div>
            <div className="imgcontainer">

                <img className="detail_image" src="/Images/select/birthsignborder.png"></img>
                <img className="detail_image o97" src={this.props.character.big_src} ></img>
                <img className="detail_image o15" src="/Images/select/grungeoverlay-opacity15v2.png" ></img>
                <img className="detail_image o55" src={this.props.character.birthsign_src} ></img>
                <img className="detail_image 065" id='hovspark' src="/Images/select/sparkle.gif"></img>
            </div>
            <div className="quotecontainer">
                <audio id="audio" src={this.props.character.preview}/>
                <audio id="audio_start" src={this.props.character.startQ}/>
                <div className="head">{this.props.character.title} 
                  <img className="preview" src="/Images/select/previewbutton-opacity95.png" onClick={() => {this.playPreview()}}></img>
                </div>
                {this.props.character.quotes.map(e => (
                  <div className="quote" key={e}>-{e}</div>
                ))}
            </div>

            <div className="alignbottomright">
              <div className="custombtn btn" onClick={() => {this.selectBirthsign()}}><p>Select Birthsign</p></div>
            </div>
            
            <div className="overlay_blk_slow" id="overlay_blk_slow"></div>
            <Link to={this.props.character.link} style={{display: 'none'}} id="link"></Link>

        </div>
        
     
   
    )
  }
}

export default ListItemDetail;