import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import theme from "../../theme";
import DonationHeaderImage from '../../Assets/DonationPageImages/DonationHeaderImage/Donation_Header.webp'


const DonationHeader = () => {
  return (
    <Box
      style={{ backgroundImage: `url(${DonationHeaderImage})` }}
      w={"100%"}
      h={["30vh", "40vh", "50vh", "75vh", "90vh"]}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center bottom"}
      mt={['6rem']}
    
    >
      <Box
        gap={['0.5rem','0.6rem','0.8rem','1rem']}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        bgColor={"rgb(0,0,0,0.65)"}
        w={"100%"}
        h={"100%"}
        color={"white"}
        overflowX={"hidden"}
        px={["1rem",'0.7rem','1.5rem','1.5rem','1.8rem','3rem']}
      >
   
        <VStack  alignItems={'flex-start'} gap={['0.5rem','0.9rem','1.5rem','1.8rem','2rem','2.5rem']} ml={{xl:'3rem'}}  w={['300px','400px','500px','600px','850px','950px']}>
          <VStack gap={['0.5rem','0.9rem','1rem','1.5rem','1.5rem','2rem']} alignItems={'flex-start'}>
          <Box
            className="yoga-heading"
            fontSize={['1.2rem','2rem','3rem','3.5rem','5rem']}
            lineHeight={['2rem','2.8rem','3.7rem','4.8rem','6rem']}
            fontWeight={"500"}
            display={"inline-block"}
            fontFamily={theme.fonts.body}
          >
           Support Our Mission of Love and Service
          </Box>
          <Box>
            <Text fontFamily={theme.fonts.body} fontSize={["0.6rem","0.7rem",'0.9rem','1rem','1.1rem','1.2rem']} fontWeight={'300'}  display={"inline-block"} lineHeight={['1rem','1.2rem','1.5rem','1.7rem','2rem']}>
            "Join us in spreading joy and spirituality through the teachings of the Hare Krishna movement. Your generous donation fuels our efforts to promote peace, compassion, and cultural understanding worldwide. Together, we nurture hearts and minds, embodying the spirit of devotion and service to humanity."
            </Text>
          </Box>

          </VStack>


        <Box> 
        <Link to={'/donation/:singlePage'}> 
          <Button
           
           fontSize={["0.7rem", "0.8rem", "1rem", "0.9rem", "1rem"]}
           p={["0.9rem", "1.2rem", "1.5rem", "2rem"]}
           colorScheme="orange"
           display={"flex"}
           alignItems={"center"}
           borderRadius={"10px"}
          >
            Support Now
          </Button>
          </Link>
        </Box>
        </VStack>

        </Box>      
    </Box>
  )
}

export default DonationHeader
