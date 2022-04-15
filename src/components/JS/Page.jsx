import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import {Link, useHistory} from "react-router-dom";
import { useStates } from './provider';

const Central = styled.div`
    margin-top: 5%;
    background-color: grey;
    padding: 10px;
    width: 50rem;
    height: 41rem;
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 15px solid #fff;
    h1{
        margin-top: 0;
        margin-bottom: 0;
        background-color: #020801;
        height: 7%;
        width: 100%;
        text-align: center;
        padding: 2px;
        border-radius: 25px;
        border: 2px solid black;
        color: white;
    }

    div{
        display: flex;
        gap: 20px 100px;
        width: 50rem;
        text-align: center;
        flex-wrap: wrap;
        height: 60rem;
        justify-content: center;
        text-align: center;
        align-items: center;


        .money{
            background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFtVblacQd5DSUMu2eqx2TjiK6dtDw3YvZA&usqp=CAU');
            font-size: 3rem;
            font-family: "Times New Roman";
            :hover{
                transform: scale(1.1);
                box-shadow: inset 0 0 1em black, 0 0 2em yellow;
                color: yellow;
            }
        }
        .medidas{
            background-image: url('https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2021/05/tape-measure-3859795_1920-e1622076689846-1024x662.jpg');
            font-size: 2.5rem;
            :hover{
                transform: scale(1.1);
                box-shadow: inset 0 0 1em black, 0 0 2em yellow;
                color: yellow;
            }
        }
        .pesos{
            background-image: url("https://s1.static.brasilescola.uol.com.br/be/conteudo/images/as-unidades-sistema-internacional-foram-definidas-durante-14-conferencia-geral-pesos-medidas-cgpm-em-1971-56d85caec3534.jpg");
            font-size: 3rem;
            :hover{
                transform: scale(1.1);
                box-shadow: inset 0 0 1em black, 0 0 2em yellow;
                color: yellow;
            }
        }
        .temperaturas{
            background-image: url('https://i.pinimg.com/550x/3a/c2/92/3ac2928f1b13d23aaaff2211870e8f17.jpg');
            font-size: 2rem;
            :hover{
                transform: scale(1.1);
                box-shadow: inset 0 0 1em black, 0 0 2em yellow;
                color: yellow;
            }
        }
    }
    button{
        border-radius: 25px;
        width: 18rem;
        height: 15rem;
        box-shadow: inset 0 0 1em black, 0 0 2em white;
        font-size: 1.5rem;
        font-weight: 700;
        color: white;
        text-align: center;
        align-items: flex-start;
        span{
            background: black;
            padding: 2px;
        }
    }
`



export default function Page(){
    const history = useHistory()
    
    return (
        <Fragment>

            <Central>
                <h1>CONVERSOR UNIVERSAL</h1>
                <div>
                    <button className='money' onClick={() => history.push('/money')}><span>M O E D A S</span></button>
                    <button className='pesos' onClick={() => history.push('/peso')}><span>P E S O S</span></button>
                    <button className='medidas' onClick={() => history.push('/medida')}><span>M E D I D A S</span></button>
                    <button className='temperaturas' onClick={() => history.push('/temps')}><span>TEMPERATURAS</span></button>
                </div>
            </Central>

        </Fragment>
    );
}