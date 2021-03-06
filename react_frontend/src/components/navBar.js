import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './../../assets/Hover.css';

import jwtDecode from 'jwt-decode';


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

    right:0%;
    margin-left: 0%;
    left:0%;


`;

// const ImageStyle= styled.div`
//     margin-right: 5rem ;
// `;

const Text = styled.div`
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

const HomeText = styled.div`
    color: #FFFFFF;
	font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 100;
    font-size: 20px;
    margin: 20px;
    max-width: 100px;
`;


const ImageBox = styled.div`
    background: url("https://file-gupzgikpce.now.sh/");
    background-size: cover;  
    height: 70px;
    width: 200px;
    position: relative;
    margin-left: 0%;
    margin-top: 10px;
    display: inline-block;
`;


class NavBar extends React.Component<Props> {
    getPath = () => {
        if (sessionStorage.getItem('token') !== null) {
            if ((jwtDecode(sessionStorage.getItem('token'))).userType === 'student') {
                return '/student';
            } else if ((jwtDecode(sessionStorage.getItem('token'))).userType === 'teacher') {
                return '/teacher';
            } else if ((jwtDecode(sessionStorage.getItem('token'))).userType === 'admin') {
                return '/admin/list';
            }
        }
        return '';
    }

    logoutFunc = () => {
        sessionStorage.clear();
    }

    render() {
        return (
            <div>
                <nav className="navbar" style={{ borderRadius: '0' }}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link to="/"><ImageBox /></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link className="hometext" onClick={this.logoutFunc}to="/"> Logout </Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a className="hometext" href={this.getPath()} > Profile </a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a className="hometext" href="/"> Home </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default NavBar;
