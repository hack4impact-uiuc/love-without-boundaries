import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import './Hover.css';
import lovewithout_white from './lovewithout_white.png';

type Props = {
    /**/
}

const Block = styled.div`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #B33C42;
    color: rgb(255, 255, 255);
    height: 80px;
    position sticky;
`;

// const ImageStyle= styled.div`
//     margin-right: 5rem ;
// `;

const Text = styled.a`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom-style: solid;
    display: inline-block;
    padding: .7rem 0;
    margin: 0.5rem 2rem ;
    right: 10%;
    position: absolute;
`;

const HomeText = styled.a`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom: 3px solid white;
    display: inline-block;
    padding: .6rem 0;
    margin: 0.5rem 2rem ;
    right: 32%;
    position: absolute;
`;

const LessonText = styled.a`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom: 3px solid white;
    display: inline-block;
    padding: .6rem 0;
    margin: 0.5rem 2rem ;
    right: 19%;
    position: absolute;
`;
const LogText = styled.a`
    padding: 8px;
    color: #FFFFFF;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 18px;
    border-bottom: 3px solid white;
    display: inline-block;
    padding: .6rem 0;
    margin: 0.5rem 1rem ;
    right: 8%;
    position: absolute;
`;




class NavBar extends React.Component<Props> {
    render(){
        return(
            <div>
                <head>
                    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Tangerine"></link>
                </head>
                <Block>
                    <Image className="img-fluid"  src = {lovewithout_white} height="100%" />
                    <HomeText className="navbar" >Home</HomeText>
                    <LessonText className="navbar">Lessons</LessonText>
                    <LogText className="navbar">Logout</LogText>
                </Block>
            </div>
        );
    }
}
export default NavBar;
