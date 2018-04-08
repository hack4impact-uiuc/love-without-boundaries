import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

type Props = {
    /**/
}

const Block = styled.div`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: rgb(192, 68, 72);
    color: rgb(255, 255, 255);
    height: 200px;
`;

const Image= styled.div`
    height: 200px;
`;




class NavBar extends React.Component<Props> {
    render(){
        return(
            <div>
                <Block>
                <Image src = "https://www.lovewithoutboundaries.com/sites/lwb3/templates/default/images/logo.svg" />
                </Block>
            </div>
        );
    }
}
export default NavBar;
