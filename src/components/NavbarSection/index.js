import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarMenu,
  NavLogo,
  Nav,
  NavbarSearch,
  SearchInput,
  SearchLogo,
  NavLink,
  NavbarItem,
  BtnWrapper,
  Button,
  HamburgerWrap,
} from "./navbarElements";

const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    const toggleOpen = () => {
      setOpen(!open);
    };
    return (
      <>
        <NavbarContainer active={open}>
          <Nav>
            <NavLogo to="/home">Akashic</NavLogo>
  
            <HamburgerWrap>
              {open ? (
                <FaTimes onClick={toggleOpen} />
              ) : (
                <FaBars onClick={toggleOpen} />
              )}
            </HamburgerWrap>
  
            <NavbarMenu active={open}>
              <NavbarItem>
                <NavLink to="/games">Games</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/category">Category</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/news">News</NavLink>
              </NavbarItem>
              <NavbarItem>
                <NavLink to="/rasberry">Rasberry</NavLink>
              </NavbarItem>
              <BtnWrapper>
                <Button to="/signup">Sign up</Button>
              </BtnWrapper>
            </NavbarMenu>
            <NavbarSearch active={open}>
              <SearchLogo />
              <SearchInput typr="text" placeholder="Search Games" />
            </NavbarSearch>
          </Nav>
        </NavbarContainer>
      </>
    );
  };
  
  export default Navbar;