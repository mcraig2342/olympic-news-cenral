import { React } from 'react'
import './Header.css'
import logo from '../../Utils/logo.png';

const Header = ({}) => {

    return (
      <div className='headerContainer'>
          <img className='logo' src={logo} alt='Olympic News Center logo'/>
      </div>
    );
}

export default Header;
