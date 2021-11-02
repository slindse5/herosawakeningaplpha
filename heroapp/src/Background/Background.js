import React, {Component}  from 'react';

import { Link } from 'react-router-dom';



import ParticleBg from './Particles/Particles';


class Background extends Component {

  constructor(props) {

    super(props);

  }



  async componentDidMount() {

  }





  render() {

    return (
      
      <>

        < video autoPlay loop muted >

          <source src={Video} type="video/mp4" />

        </video>

<ParticleBg />

       </>

        

    )

  }

}



export default Background;