import React from "react";
import { ReactComponent as AKSLogo } from "../images/aks.svg";
import classes from "./Header.module.css";
import Button from "./Button";
import { AiFillGithub } from "react-icons/ai";
import Link from "react-csv/lib/components/Link";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.section1}>
            <AKSLogo className={classes.logo}></AKSLogo>
            <h1 className={classes.name}>AKS Sizing Calculator</h1>
          </div>
          <a href="https://github.com/kebroad/aks-sizing-calculator">
            <Button>
              {/* <Link to="https://github.com/kebroad/aks-sizing-calculator"> */}
              <div className={classes.section2}>
                <h2>View Source Code</h2>
                <AiFillGithub className={classes.github}></AiFillGithub>
              </div>
              {/* </Link> */}
            </Button>
          </a>
        </nav>
        {/* <LineSegment></LineSegment> */}
      </header>
    </>
  );
};

export default Header;
