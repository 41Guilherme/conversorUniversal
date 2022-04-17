import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";
import { useStates } from './provider';
import { Central } from '../styles/styledPage';
import axios, { Axios } from 'axios';

export default function Pesos(){
    const history = useHistory()

    const [peso1, setPeso1] = useState(1)
    const [peso2, setPeso2] = useState(1)
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(0)
    function clear(){
        setValue2(0)
    }
    function convertValue(valor, tipo1, tipo2){
        if (tipo1 == tipo2){
            setValue2(valor)

        }else if ( tipo1 == 1 && tipo2 == 2){
            setValue2((valor * 1000).toFixed(3))
        }else if ( tipo1 == 1 && tipo2 == 3){
            setValue2((valor / 1000).toFixed(3))
        }else if ( tipo1 == 1 && tipo2 == 4){
            setValue2((valor / 15).toFixed(3))
        }else if ( tipo1 == 1 && tipo2 == 5){
            setValue2((valor / 2.205).toFixed(3))

        }else if ( tipo1 == 2 && tipo2 == 1){
            setValue2((valor / 1000).toFixed(3))
        }else if ( tipo1 == 2 && tipo2 == 3){
            setValue2((valor / 1000 * 1000).toFixed(3))
        }else if ( tipo1 == 2 && tipo2 == 4){
            setValue2((valor / 15000).toFixed(3))
        }else if ( tipo1 == 2 && tipo2 == 5){
            setValue2((valor / 2205).toFixed(3))
        }
        
        else if ( tipo1 == 3 && tipo2 == 1){
            setValue2((valor * 1000).toFixed(3))
        }else if ( tipo1 == 3 && tipo2 == 2){
            setValue2((valor * 1000 * 1000).toFixed(3))
        }else if ( tipo1 == 3 && tipo2 == 4){
            setValue2(((valor / 15) * 1000).toFixed(3))
        }else if ( tipo1 == 3 && tipo2 == 5){
            setValue2(((valor / 2.205) * 1000).toFixed(3))
        }

        else if ( tipo1 == 4 && tipo2 == 1){
            setValue2((valor * 15).toFixed(3))
        }else if ( tipo1 == 4 && tipo2 == 2){
            setValue2((valor * 15 * 1000).toFixed(3))
        }else if ( tipo1 == 4 && tipo2 == 3){
            setValue2(((valor * 15) / 1000).toFixed(3))
        }else if ( tipo1 == 4 && tipo2 == 5){
            setValue2((valor * 25).toFixed(3))
        }

        else if ( tipo1 == 5 && tipo2 == 1){
            setValue2((valor * 2205).toFixed(3))
        }else if ( tipo1 == 5 && tipo2 == 2){
            setValue2((valor * 2205 * 1000).toFixed(3))
        }else if ( tipo1 == 5 && tipo2 == 3){
            setValue2((valor * 2205 / 1000).toFixed(3))
        }else if ( tipo1 == 5 && tipo2 == 4){
            setValue2((valor / 25).toFixed(3))
        }
    }
    return (
        <Fragment>
            <Central>
                <h1>CONVERSOR UNIVERSAL </h1>
                <div>
                    <div className='value1'>
                        <h2>Selecione sua Unidade de Peso</h2>
                        
                        <select onChange={(e) => setPeso1(e.target.value)}>
                            <option></option>
                            <option value='1'>Quilograma</option>
                            <option value='2'>Grama</option>
                            <option value='3'>Tonelada</option>
                            <option value='4'>Arroba</option>
                            <option value='5'>Libra</option>
                        </select>
                        <hr/>
                        <h2>Coloque o Valor a ser convertido</h2>
                        <input placeholder="Ex: 200.20" type="number" onChange={(e) => setValue1(e.target.value)} ></input>
                        
                    </div>
                    <span>< img onClick={() => convertValue(value1, peso1,peso2)} src="https://static.vecteezy.com/ti/vetor-gratis/p2/553925-icone-de-seta-gr%C3%A1tis-vetor.jpg" alt="seta" /></span>
                    <div className='value2'>
                        <h2>Selecione sua Unidade de Peso</h2>
                        
                        <select onChange={(e) => setPeso2(e.target.value)}>
                            <option></option>
                            <option value='1'>Quilograma</option>
                            <option value='2'>Grama</option>
                            <option value='3'>Tonelada</option>
                            <option value='4'>Arroba</option>
                            <option value='5'>Libra</option>
                        </select>
                        <hr/>
                        <h2>Resultado do Valor do Peso convertido</h2>
                        <input value={value2} ></input>
                    </div>
                </div>
                <footer> 
                    <button className='back'onClick={() => history.push('/')}>Voltar ao Menu</button> 
                    <button onClick={() => clear()}>Limpar valor convertido</button> 
                </footer>
            </Central>

        </Fragment>
    )
}