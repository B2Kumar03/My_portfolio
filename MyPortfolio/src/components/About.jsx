import React from "react";
import {
  Flex,
  Box,
  Image,
  Spacer,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import image1 from "../assets/image1.png";
import { CiChat1 } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";
import {Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about"  >
      <Heading color={"#497E83"} textAlign={"center"} className="roboto-bold" >
        About me
      </Heading>
      <Flex
        alignItems={"center"}
        w={"65%"}
        margin={"auto"}
        mb={40}
        mt={20}
        justifyContent={"center"}
        color={"white"}
      >
        <Box w={"50%"}>
          <Image src={image1} w={"50%"} h={"50%"} borderTopRadius={10} className="img" />
          <Button
            mt={10}
            w={"50%"}
            bg={"#171F38"}
            color={"#497E83"}
            border={"2px solid #497E83"}
            p={6}
            className="roboto-blod"
            fontWeight={700}
            fontSize={20}
            _hover={{ color: "white" }}
          >
            Let's talk &nbsp;<IoChatboxOutline />
          </Button>
        </Box>
        <Box w={"50%"}>
          <Heading className="roboto-bold" fontSize={40}>
            i'm Bittu and i'm a programmer
          </Heading>
          <Text fontSize={20} mt={5} color={'#ccc'} className="roboto-regular" fontWeight={500}>
            I am diligent front-end developer with robust HTML, CSS, and
            JavaScript expertise. Proficient in Git and DOM manipulation. Adept
            at Python and fundamental data structures/algorithms. Committed to
            delivering engaging user experiences, eager to leverage skills in an
            internship role.
          </Text>
        </Box>
      </Flex>
    </Element>
  );
};

export default About;
