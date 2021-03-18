import React from 'react';
import { Image } from 'react-bootstrap';
import banner from './header_assets/banner.jpeg';

const Header = () =>{
    return(
        <div>
            <Image src={ banner } fluid />
        </div>

    )
}
export default Header;