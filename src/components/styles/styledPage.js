
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
            width: 20rem;
            height: 28rem;
            background-color: green;
            border: solid 1.5px black;
            border-radius: 25px;
        }
        .value2{
            width: 20rem;
            height: 28rem;
            background-color: yellow;
            border: solid 1.5px black;
            border-radius: 25px;
        }
        span{
            margin: 0;
            padding: 0;
            img{
                width: 75px;
                height: 75px;
            }
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        button{
            padding: 10px;
            border-radius: 25px;
        }
    }
`