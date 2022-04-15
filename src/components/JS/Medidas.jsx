import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";
import { useStates } from './provider';
import { Central } from '../styles/styledPage';
import axios, { Axios } from 'axios';

export default function Medidas(){
    const history = useHistory()
    return (
        <Fragment>
            <Central>
                <h1>CONVERSOR UNIVERSAL </h1>
                <div>
                    <div className='value1'>

                        
                    </div>
                    <span>< img src="https://static.vecteezy.com/ti/vetor-gratis/p2/553925-icone-de-seta-gr%C3%A1tis-vetor.jpg" alt="seta" /></span>
                    <div className='value2'>
                       
                    </div>
                </div>
                <footer> 
                    <button className='back'onClick={() => history.push('/')}>Voltar ao Menu</button> 
                    <button >Limpar valor convertido</button> 
                </footer>
            </Central>

        </Fragment>
    )
}