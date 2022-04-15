import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";
import { useStates } from './provider';
import { Central } from '../styles/styledPage';
import axios, { Axios } from 'axios';


export default function Money(){
    const history = useHistory()
    
    const [type1 , setType1] = useState('')
    const [type2 , setType2] = useState('')
    const [valueAux , setValueAux] = useState(0)
    const [valueFix, setValueFix]  = useState(0)

    async function convertMoney(value , Type1, Type2) {
        if (Type1 === Type2){
            setValueFix(valueAux)
            return
        }
        const resp = await axios.get(`https://economia.awesomeapi.com.br/${Type1}-${Type2}/1`)
        const value2 = resp.data[0].ask * value
        setValueFix(value2.toFixed(2))
    }
    function clear(){
        setValueAux(0)
        setValueFix(0)
    }
    return (
        <Fragment>
            <Central>
                <h1>CONVERSOR UNIVERSAL</h1>
                <div>
                    <div className='value1'>

                        <h2>Selecione sua Moeda</h2>
                      
                        <select onChange={(e) => setType1(e.target.value)}>
                            <option></option>
                            <option value='USD'>Dolar</option>
                            <option value='BRL'>Real</option>
                            <option value='EUR'>Euro</option>
                            <option value='RUB'>Rublo</option>
                            <option value='JPY'>Yene</option>
                        </select>
                        <hr/>
                        <h2>Coloque o Valor a ser convertido</h2>
                        <input placeholder="Ex: 200.20" type="number" onChange={(e) =>setValueAux(e.target.value)}></input>
                    </div>
                    <span>< img onClick={() => convertMoney(valueAux, type1, type2)} src="https://static.vecteezy.com/ti/vetor-gratis/p2/553925-icone-de-seta-gr%C3%A1tis-vetor.jpg" alt="seta" /></span>
                    <div className='value2'>
                        <h2>Selecione sua Moeda</h2>
                        
                        <select onChange={(e) => setType2(e.target.value)}>
                            <option></option>
                            <option value='USD'>Dolar</option>
                            <option value='BRL'>Real</option>
                            <option value='EUR'>Euro</option>
                            <option value='RUB'>Rublo</option>
                            <option value='JPY'>Yene</option>
                        </select>
                        <hr/>
                        <h2>Resultado do Valor da Moeda Convertida</h2>
                        <input value={valueFix} ></input>
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