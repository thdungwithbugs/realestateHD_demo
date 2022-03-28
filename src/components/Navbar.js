import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { menuData } from "../data/MenuData";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import Bars from "../images/menu.png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  height: 60px;
  /* background: #0096c7; */
  position: fixed;
  z-index: 99;
  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
  font-weight: 900;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s linear;
  }
`;
const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
const NavMenu = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
  &:hover {
    font-size: 1.1rem;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    transition: all 0.2s linear;
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const changeBackground = () => {
    if (window.pageYOffset >= 650) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#CD853F" : "transparent",
    transition: "0.4s linear 0.1s",
  };
  return (
    <Nav style={style}>
      <Logo to="/">HDŨNG ESTATE</Logo>
      <MenuBars onClick={toggle}></MenuBars>
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
