import React from 'react'
import { ReactComponent as AKSLogo } from '../images/aks.svg';
import classes from "./Header.module.css"
// import { AiFillGithub } from 'react-icons/ai';
const Header = () => {
    return (<>
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <AKSLogo className={classes.logo}></AKSLogo>
                <h1 className={classes.name}>AKS Sizing Calculator</h1>
                {/* <AiFillGithub className={classes.github}></AiFillGithub> */}
            </nav>
            {/* <LineSegment></LineSegment> */}
        </header>

        </>
    )
}

export default Header
