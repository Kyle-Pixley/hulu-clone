import React, { useState } from 'react';
import './Nav.css';

function Nav() {

    const [ home, setHome ] = useState<boolean>(false);
    const [ myStuff, setMyStuff ] = useState<boolean>(false);

    type Page = 'home' | 'my-stuff';

    const handleNavButtonClick = (page: Page) => {
        if(page === 'home') {
            setHome(true);
            setMyStuff(false);
        } else {
            setMyStuff(true);
            setHome(false);
        }
    }
  return (
    <div id='nav-component'>
        <div id='logo'>Cinepix</div>

        <div id='nav-buttons-parent'>
            <div 
                className='nav-buttons'
                onClick={() => handleNavButtonClick('home')}
                style={{fontWeight: home ? 'bold' : undefined,
                color: home ? 'white' : undefined}}>
                    Home</div>
            <div 
                className='nav-buttons'
                onClick={() => handleNavButtonClick('my-stuff')}
                style={{fontWeight: myStuff ? 'bold' : undefined, 
                color: myStuff ? 'white' : undefined}}>
                    MyStuff</div>
        </div>
        <div id='account-button'>
            Account
        </div>
    </div>
  )
}

export default Nav