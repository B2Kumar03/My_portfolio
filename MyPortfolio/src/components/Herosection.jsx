import React from 'react'
import {Flex,Box,Image,Spacer,Button,Text,Heading} from '@chakra-ui/react'
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { FaXTwitter } from "react-icons/fa6";
import resume from '../assets/MyResume .pdf'
import bgimg from '../assets/bgImage.png'

const Herosection = () => {
  return (
    <Flex  h={760} w={"98%"} margin={"auto"} color={'white'} mb={10}>
        <Box w={"5%"}  display={'flex'} justifyContent={'flex-end'} flexDirection={'column'} alignItems={'center'} fontSize={35}>
           <a href="https://github.com/B2Kumar03">
           <Box pb={10}  ><BiLogoGithub  class="a"/></Box>
           </a>
           <a href='https://www.linkedin.com/in/bittu-kumar-2b54b0267/' class="a"><Box pb={10} ><BiLogoLinkedin/></Box></a>
           <a href='https://twitter.com/BittuKumar9504' class="a"><Box pb={10} ><FaXTwitter/></Box></a>
           <Box w={0.5} h={20} bg={'white'}></Box>
        </Box>
        <Box display={'flex'} justifyContent={'center'}   w={"70%"} mt={20}   >
           <Box>
            <pre style={{color:"#497E83",fontSize:"20px"}}>Hi, My name is</pre>
           
           <Heading fontSize={60} className='roboto-bold'>Bittu kumar</Heading>
           <Heading color={'#ccc'} className='roboto-bold' fontSize={40} >I am Front-End Developer and Problem solver</Heading>
           <Text mt={5} className=''roboto-regular color={'#ccc'} fontWeight={500}>
           Front-end developer with HTML, CSS, JavaScript,React, <br />Git, and Python skills. Eager to create engaging user  <br />experiences through internship opportunities.
            </Text>
            <Box mt={10}><Button bg={'#171F38'} color={'#497E83'} border={'2px solid #497E83'} p={6} className='roboto-blod' fontWeight={700}><a href={resume} download="Bittu_Resume">Dowload Resume</a></Button></Box>
           </Box>
          
        </Box>
        <Box display={'flex'} justifyContent={'center'}   w={"30%"} mt={20} backgroundImage={bgimg} backgroundRepeat={"no-repeat"} bgPosition={'right'} >
           <Box>
            
           </Box>
          
        </Box>
       
    </Flex>
  )
}

export default Herosection