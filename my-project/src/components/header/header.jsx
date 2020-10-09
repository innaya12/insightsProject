import React from 'react';
import './style.css';
import Logo from '../../assets/headerImg.png';

class Header extends React.Component{

    render(){
        return (
            <div className={"header-wrapper container-fluid"}>
                <div className={"d-none d-lg-flex desktop justify-content-center"}>
                    <h5>לגבש אסטרטגיה</h5>
                </div>
                <div className={"d-block d-lg-none mobile"}>
                    <img src={Logo} alt={"headerImg"} width={"55px"}></img>
                </div>
            </div>
        )
    }
};

export default Header;