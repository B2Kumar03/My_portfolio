import React from "react";
import { Flex, Box, Image, Spacer, Button } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Link, Element } from 'react-scroll';
import resume from '../assets/MyResume .pdf'

const Navbar = () => {
  return (
    <Flex alignItems={"center"} w={"98%"} margin={"auto"} mb={20} className="sticky"   backgroundColor={"#171f38"}  >
      <Box>
        <Image src={logo} className="img1"/>
      </Box>
      <Spacer />
      <Box color={"white"} w={"30%"} className="roboto-bold" display={{
  base: "none", 
  sm: "none", 
  md: "none", 
  lg: "none", 
  xl: "block", 

}}>
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
          <Box className="tab" ><Link to="about" smooth={true} duration={500} offset={-100}>About</Link></Box>
          <Box className="tab" ><Link to="project" smooth={true} duration={500} offset={-100}>Projects</Link></Box>
          <Box className="tab" ><Link to="skills" smooth={true} duration={500} offset={-100}>Skills</Link></Box>
          <Box className="tab" ><Link to="contact" smooth={true} duration={500} offset={-100}>Contact</Link></Box>
          
          <Box>
            <Button
              bg={"#171F38"}
              color={"#497E83"}
              border={"2px solid #497E83"}
            >
              <a href={resume} >Resume</a>
            </Button>
          </Box>
        </Flex>
      </Box>
      
    </Flex>
  );
};

export default Navbar;
