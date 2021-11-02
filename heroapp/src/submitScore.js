import React, {Component}  from 'react';
import { useContext } from 'react';
import GlobalVariables from './createVariables';
import { Link } from 'react-router-dom';
import { XpContext } from './xpContext';
import axios from 'axios';
import sign from './audio/scribble.mp3';

export default class SubmitScore extends Component {

    componentDidMount = () => {
        this.getScores();
        console.log('Mounted');
    }
    state = {
        level: GlobalVariables.getLevel(),
        name: '',
        score: GlobalVariables.getXP(),
        players: []
    };
    

    getScores = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({players: data});
                console.log('Data get!')  ;            
            })
            .catch(() => {
                alert('Cant get to data!');
            });
    }


    handleChange = ({ target }) => {
        const {name, value} = target;
        const score = GlobalVariables.getXP();
        const level = GlobalVariables.getLevel();
        this.setState({ [level]: level, [name]: value, [score]: score });
    };

    submit = (event) => {
        event.preventDefault();

        const payload = {
            level: this.state.level,
            name: this.state.name,
            score: this.state.score
        };

        axios({
            url: '/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log("Data sent!!!!!");
                this.resetInput();
                this.getScores();
            })
            .catch(() => {
                console.log('Server error! FIX IT!')
            });
            document.getElementById('signed').play();
            document.getElementById('submit').style = 'display: none; padding: 0;'; 
            document.getElementById('inname').style = 'display: none; padding: 0;';  
            document.getElementById('frmtxt').style = 'display: none; padding: 0;';          
    };

    resetInput = () => {
        this.setState({
            name: ''
        });
    }

    displayScores = (players) => {

        if (!players.length) return null;
    
    
        return players.map((player, index) => (
          <div key={index}>
            <div className="rank">{index + 1}.</div>
            
            <div className="names">{player.name}</div>
            <div className='level'>{player.level}</div>
            <div className="scores">{player.score}</div>
            
          </div>
        ));
      };

    render() {
        
        console.log('State: ', this.state);

        return(
            
            <div className='bgleaders'>
                <audio src={sign} id='signed'></audio>
                <form  className='subform' onSubmit={this.submit}>
                    <div  id='inname' className="form-input">
                        <input 
                        type="text"
                        placeholder='Enter Name:'
                        name="name"
                       
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div id='frmtxt' className="form-input">
                        <h3  className='scoretxt'>Soul Lvl: {GlobalVariables.getLevel()}  <br></br><br></br>   Experience: {GlobalVariables.getXP()}</h3>
                    </div>
                    <button id="submit">SUBMIT</button>
                    <button><Link to='/affirmation'>Return to Game</Link></button>
                </form>
                <div className="leaders">
                    <h3>Renown Honor Roll</h3>
                <div className='rank'>Rank:</div><div className='names'>Name:</div><div className='level'>Soul Lvl:</div><div className="scores">Experience:</div><br></br><br></br>
                    {this.displayScores(this.state.players)}
                </div><div className='leadbottom'></div>
                
            </div>
        );
    }
}