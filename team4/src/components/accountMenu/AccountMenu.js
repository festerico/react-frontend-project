import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import './AccountMenu.css'
import AccountMenuList from "./AccountMenuList";


const AccountMenu = ( {children} ) => {
    const { state } = useContext(MainContext)
    
    const [visible, setVisible] = useState(false)    
    
    const openMenu = () => {
        let arrow = document.getElementById('arrow')
        arrow.classList.remove('fa-caret-down')
        arrow.classList.add('fa-caret-up')
        setVisible(true)
    }

    const closeMenu = () => {
        let arrow = document.getElementById('arrow')
        arrow.classList.add('fa-caret-down')
        arrow.classList.remove('fa-caret-up')
        setVisible(false)
    }    
    
    return (
        <div className="d-flex align-items-center justify-content-between me-lg-5 pointer position-relative h-100" onMouseOver={()=>{openMenu()}} onMouseOut={() => {closeMenu()}} >
            <span className={"nav-profile-icon " + state.current_profile.bg}></span>
            <span className="fas fa-caret-down ms-2" id="arrow"></span>
            <AccountMenuList visible={visible}>
                {children}
            </AccountMenuList>
        </div>
    );
};

export default AccountMenu;
