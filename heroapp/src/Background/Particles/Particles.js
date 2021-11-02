import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Particles from 'react-particles-js';

import ParticlesConfig from '../../config/ParticlesConfig';


class ParticleBg extends Component {

    constructor(props) {

        super(props);

    }



    async componentDidMount() {

    }





    render() {

        return (

            <>

                <Particles

                    params={ParticlesConfig}>

                </Particles>
                
            </>



        )

    }

}



export default ParticleBg;