import React from 'react';
import {Link} from '@reach/router';

import RMDBlogo from '../images/reactMovie_logo.png';


import {
    StyledHeader,
    StyledRMDBlogo,
    
} from '../styles/StyledHeader';


// render LOGO Pepi


const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
                <StyledRMDBlogo src={RMDBlogo} alt="rmdb-logo" />
            </Link>
            
        </div>
    </StyledHeader>
)

export default Header;