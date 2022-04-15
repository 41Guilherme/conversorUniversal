
import styled from 'styled-components';

export  const Central = styled.div`
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
        
        width: 50rem;
        text-align: center;
        flex-wrap: wrap;
        height: 60rem;
        justify-content: space-between;;
        text-align: center;
        align-items: center;
        margin-bottom: 2px;
        .value1{
            display: flex;
            justify-content: center;
            text-align: center;
            width: 20rem;
            height: 28rem;
            background-color: white;
            border: solid 1.5px black;
            border-radius: 25px;
            flex-direction: column;
            select{
                width: 15rem;
                height: 2.2rem;
                margin-bottom: 2rem;
            }
            hr{
                width: 18rem;
            }
            input{
                width: 15rem;
                height: 1.8rem;
                font-size: 2rem;
                text-align: center;
            }
        }
        .value2{
            display: flex;
            justify-content: center;
            text-align: center;
            width: 20rem;
            height: 28rem;
            background-color: white;
            border: solid 1.5px black;
            border-radius: 25px;
            flex-direction: column;
            select{
                width: 15rem;
                height: 2.2rem;
                margin-bottom: 2rem;
            }
            hr{
                width: 18rem;
            }
            input{
                width: 15rem;
                height: 1.8rem;
                font-size: 2rem;
                text-align: center;
            }
        }
        span{
            margin: 0;
            padding: 0;
            img{
                width: 75px;
                height: 75px;
                border: solid 1px black;
                border-radius: 25px;
                :hover{
                transform: scale(1.1);
                box-shadow: inset 0 0 1em black, 0 0 2em green;
                color: red;
            }
            }
            
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        button{
            padding: 10px;
            border-radius: 25px;
            :hover{
                transform: scale(1.1);
                box-shadow: inset 0 0 1em black, 0 0 2em green;
                color: green;
            
            }
            
            
        }
        .back{
            :hover{
            transform: scale(1.1);
            box-shadow: inset 0 0 1em black, 0 0 2em red;
            color: red;
        }
        `