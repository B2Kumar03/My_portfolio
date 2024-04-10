import React, { useRef, useState } from "react";
import {
  Flex,
  Box,
  Image,
  Spacer,
  Button,
  Heading,
  Text,

} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { Element } from "react-scroll";
import emailjs from '@emailjs/browser';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { FaS, FaXTwitter } from "react-icons/fa6";

const ContactMe = () => {
   const form =useRef({
    user_name:"",
    user_email:"",
    message:""
   })
   const [loading,setLoading]=useState(false)
   const [Error,setError]=useState(false)
   const toast=useToast()
 
  const handleSubmit=()=>{
    console.log(form.current);
   setLoading((prev)=>!prev)
    emailjs
      .send('service_e3nkhbl', 'template_gtj1am2', form.current, {
        publicKey: 'pIhUwxCHfPbgHipoB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading((prev)=>!prev)
          showToast()
        },
        (error) => {
          setLoading((prev)=>!prev)
          setError((prev)=>!prev)
          console.log('FAILED...', error.text);
        },
      );
  }

  const showToast=()=>{
    toast({
      title: `Thank You ${form.current.user_name} .`,
      description: "Your message send successfully .",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    form.current.user_name=""
    form.current.user_email=""
    form.current.message=""
    setError((prev)=>!prev)
  }


  return (
    <Element name="contact">
      <Heading color={"#497E83"} textAlign={"center"} className="roboto-bold">
        Contact
      </Heading>
      <Flex
        alignItems={"center"}
        w={"65%"}
        margin={"auto"}
        mb={40}
        mt={20}
        // justifyContent={"center"}
        justifyContent={"space-between"}
        color={"white"}
        
      >
        <Box  className="shadow" p={7}>
          <Heading>Contact with me</Heading>
          <Text fontSize={20} color={"#ccc"}>
            If you want to know more about me or my work, or if you would <br />{" "}
            just like to say hello, send me a message. I'd love to hear from
            you.
          </Text>
          <br />
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter you name" onChange={(e)=>form.current.user_name=e.target.value}/>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Enter Email" onChange={(e)=>form.current.user_email=e.target.value}/>
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your Message" onChange={(e)=>form.current.message=e.target.value}/>
          </FormControl>
          <br />
          <Box display={"flex"} justifyContent={"space-between"}>
            {" "}
            <a href="mailto:example@example.com"><u>Send me email directly</u></a>
            <Button onClick={handleSubmit} isDisabled={loading}>{loading?"Submitting...":"Submit"}</Button>
          </Box>
        </Box>
        <Box>
         <Box>
         <Heading display={"flex"} justifyContent={"flex-end"}>Email</Heading>
         <Text fontSize={25} mt={2} color={"gray"}>bk7355583@gmail.com</Text>
         </Box>
         <Box mt={7}>
         <Heading display={"flex"} justifyContent={"flex-end"}>Address</Heading>
         <Text fontSize={25} mt={2} color={"gray"}>Madhepura,Bihar ,India</Text>

         </Box>
         <Box mt={5}>
         <Heading display={"flex"} justifyContent={"flex-end"}>Scocial</Heading>
         <Box mt={3}    fontSize={35} display={"flex"} justifyContent={"space-around"} color={"#ccc"}>
           <a href="https://github.com/B2Kumar03">
           <Box pb={10}  ><BiLogoGithub  class="a"/></Box>
           </a>
           <a href='https://www.linkedin.com/in/bittu-kumar-2b54b0267/' class="a"><Box pb={10} ><BiLogoLinkedin/></Box></a>
           <a href='https://twitter.com/BittuKumar9504' class="a"><Box pb={10} ><FaXTwitter/></Box></a>
        </Box>
         </Box>
        </Box>
      </Flex>
    </Element>
  );
};

export default ContactMe;
