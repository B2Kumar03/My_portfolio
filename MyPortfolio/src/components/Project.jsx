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
import { Grid, GridItem } from "@chakra-ui/react";
import { GrDeploy } from "react-icons/gr";
import {Element } from 'react-scroll'

const project = [
  {
    image:
      "https://github.com/B2Kumar03/Project1Image/blob/main/Home.png?raw=true",
    title: "Cloneof Walmart website React | Chakra ui | JavaScript",
    description:
      "The WalmartClone project is a React-based front-end web application that emulates the core functionalities of an online shopping platform, specifically inspired by Walmart...",
    deployed:
      "https://65e58a10d2776b3ddffb3ab2--cheery-pie-90b05c.netlify.app/",
    gihub: "https://github.com/B2Kumar03/WalmartClone",
  },
  {
    image: "https://guileless-kelpie-2a6bb1.netlify.app/cloneproject.png",
    title: "Cloneof Chargebee Website HTML | CSS3 | JavaScript",
    description:
      "Developed a replica of Chargebee's website with dropdown menus using HTML, CSS, and JavaScript. Added a Demo button and form. Added a dropdown menu on the navbar. Created a form to request a demo. Completed individually within 5 days.",
    deployed:
      "https://65562013e0de6c03ee05223d--celadon-begonia-fcccf8.netlify.app/",
    gihub: "https://github.com/B2Kumar03/Project-CloneOfChargebee-",
  },
  {
    image:
      "https://github.com/B2Kumar03/project2Image/raw/main/Screenshot%202024-03-11%20232813.png?raw=true",
    title: "Vidya Library Project React | Chakra ui | JavaScript",
    description:
      "Welcome to the Vidya Library Project! This project is a library management system built using React. It enables users to explore the library catalog, book seats for reading sessions, and provides an admin panel for efficient management.",
    deployed: "https://resilient-bienenstitch-55abd5.netlify.app/",
    gihub: "https://github.com/B2Kumar03/Project_2",
  },
  {
    image: "https://guileless-kelpie-2a6bb1.netlify.app/ec.png",
    title: "Basic Ecommerce website HTML | CSS | JavaScript",
    description:
      "Platform includes a homepage for an overview, signup/login for secure access, product pages for items, cart page for management, and an admin page for site administration. Strict authentication ensures secure access to specific pages post-login.",
    deployed: "https://elaborate-kheer-671752.netlify.app/",
    github:
      "https://github.com/B2Kumar03/BAsicEcommerceWebsite/tree/main/ECommerceWebsite",
  },
];

const Project = () => {
  return (
    <Element name="project" >
      <Heading color={"#497E83"} textAlign={"center"} className="roboto-bold" top={20}>
        Projects
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
        <Grid templateColumns={`repeat(3, 1fr)`} gap={10} w={"100%"}>
          {project.map((ele, index) => {
            return (
              <a href={ele.deployed} key={index}>
                <GridItem
                h={500}
                className="img"
                p={5}
                border={"1px solid #ccc"}
                borderRadius={5}
                _hover={{ cursor: "pointer", border: "3px solid #497E83" }}
                
              >
                <Image src={ele.image} />

                <Text fontSize={20} className="roboto-bold">
                  {ele.title}
                </Text>
                <Text fontSize={15} className="roboto-regular" color={"#ccc"}>
                  {ele.description}
                </Text>
                <Box
                  w={"100%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  mt={10}
                >
                  <Button
                    w={"60%"}
                    bg={"#171F38"}
                    color={"#497E83"}
                    border={"2px solid #497E83"}
                    p={2}
                  >
                    <a href={ele.deployed} style={{ display: "flex" }}>
                      Deployed &nbsp;
                      <GrDeploy />
                    </a>
                  </Button>
                  <Button
                    w={"30%"}
                    bg={"#171F38"}
                    color={"#497E83"}
                    border={"2px solid #497E83"}
                    p={2}
                  >
                    <a href={ele.github}>Source code</a>
                  </Button>
                </Box>
              </GridItem>
              </a>
            );
          })}
        </Grid>
      </Flex>
    </Element>
  );
};

export default Project;
