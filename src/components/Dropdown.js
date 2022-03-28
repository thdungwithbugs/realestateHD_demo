import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import Button from "./Button";
import {FaTimes} from 'react-icons/fa'

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 900;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({isOpen})=>isOpen?'1':'0'};
  top: ${({isOpen})=>isOpen?'0':'-100%'};
`;
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon=styled(FaTimes)`
    color: #000d1a;
`
const DropdownWrapper=styled.div`

`
const DropdownMenu=styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(4,60px);
    }
`
const DropdownLink=styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    list-style: none;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover{
        color: #000d1a;
    }
`
const BtnWrap=styled.div`
    display: flex;
    justify-content: center;
`
const Dropdown = ({isOpen,toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>;
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
