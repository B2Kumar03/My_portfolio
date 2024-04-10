import React from 'react'
import {
    Flex,
    Box,
    Image,
    Spacer,
    Button,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import {Element} from 'react-scroll'

const GihubCountributor = () => {
  return (
     <Element >
      <Heading color={"#497E83"} textAlign={"center"} className="roboto-bold">
      Github Most Used Languages
      </Heading>
      <Flex
        alignItems={"center"}
        w={"65%"}
        margin={"auto"}
        mb={40}
        mt={20}
        justifyContent={"center"}
        color={"white"}
        bg={"#497E83"}
        p={10}
        
      >
        <Image src="https://camo.githubusercontent.com/47f808e60eee7d23b99ce8746b6214825eae0113a05747741544a86ee9cf7e58/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d62326b756d617230332673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" w={"50%"} borderRadius={10} />
       
      </Flex>
      </Element>
    
  )
}

export default GihubCountributor