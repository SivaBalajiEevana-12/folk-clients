import React from "react";
import { Box, Text,Heading } from "@chakra-ui/react";
import quoteimage1 from "../../Assets/sosquoteimage1.jpg";
import quoteimage2 from '../../Assets/sosquoteimage2.jpeg';
import quoteimage3 from '../../Assets/sosquoteimage3.jpg';
import theme from "../../theme";
const SecretofSuccessSection3 = () => {
  return (
    <>
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
          {/* wisdomSection */}
        <Box
          w={{ base: "90%", md: "95%", lg: "80%", xl: "65%" }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          gap="30px"
        >
          <Box  mt='70px'>
        <Heading fontSize={{base:'2rem',md:'3rem'}}>Wisdom of Success from the <span style={{color:theme.colors.col.text}}>Gita</span></Heading>
          </Box>
          {/* quote1 */}
          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap={{ base: "none", md: "1%", lg: "3%", xl: "3%" }}
          >
            {/* image */}
            <Box
              w={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
              h="235px"
              borderTopRadius={{ base: "30px" }}
              borderBottomRadius={{ base: "none", md: "30px" }}
              backgroundImage={quoteimage1}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>
            {/* text */}
            <Box
              w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
              h="235px"
              borderTopRadius={{ base: "none", md: "30px" }}
              borderBottomRadius={{ base: "30px" }}
              bg="rgba(246,247,249)"
              color="black"
              p="25px"
              textAlign="justify"
              fontSize={{ base: "0.8rem", md: "1rem" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Text
                  fontSize={{
                    base: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  color={theme.colors.col.secondary}
                  fontWeight="600"
                >
                  Detachment from results
                </Text>
                <br />
                <Text color={theme.colors.col.secondary}>
                  Bhagavad Gita 2.47
                </Text>
                <br />
                <Text>
                  <span style={{ color: theme.colors.col.secondary }}>
                    &#x22;
                  </span>
                  You have the right to perform your prescribed duties, but you
                  are not entitled to the fruits of your actions. Never consider
                  yourself the cause of the results of your activities, nor be
                  attached to inaction.
                  <span style={{ color: theme.colors.col.secondary }}>
                    &#x22;
                  </span>
                </Text>
              </Box>
            </Box>
          </Box>

          {/* quote2 */}

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap={{ base: "none", md: "1%", lg: "3%", xl: "3%" }}
          >
            {/* image */}
            <Box
              w={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
              h="235px"
              borderTopRadius={{ base: "30px" }}
              borderBottomRadius={{ base: "none", md: "30px" }}
              backgroundImage={quoteimage2}
              backgroundSize="cover"
              backgroundPosition="center"
              order={{ base: "1", md: "2" }}
            ></Box>
            {/* text */}
            <Box
              w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
              h="235px"
              borderTopRadius={{ base: "none", md: "30px" }}
              borderBottomRadius={{ base: "30px" }}
              bg="rgba(246,247,249)"
              color="black"
              p="25px"
              textAlign="justify"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              order={{ base: "2", md: "1" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Text
                  fontSize={{
                    base: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  color={theme.colors.col.secondary}
                  fontWeight="600"
                >
                  Selfless Action
                </Text>
                <br />
                <Text color={theme.colors.col.secondary}>
                  Bhagavad Gita 2.48
                </Text>
                <br />
                <Text>
                  <span style={{ color: theme.colors.col.secondary }}>
                    &#x22;
                  </span>
                  Perform your duty equipoised, O Arjuna, abandoning all
                  attachment to success or failure. Such equanimity is called
                  yoga.
                  <span style={{ color: theme.colors.col.secondary }}>
                    &#x22;
                  </span>
                </Text>
              </Box>
            </Box>
          </Box>

          {/* quote3 */}

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            justifyContent="center"
            alignItems="center"
            w="100%"
            gap={{ base: "none", md: "1%", lg: "3%", xl: "3%" }}
          >
            {/* image */}
            <Box
              w={{ base: "100%", md: "30%", lg: "30%", xl: "30%" }}
              h="235px"
              borderTopRadius={{ base: "30px" }}
              borderBottomRadius={{ base: "none", md: "30px" }}
              backgroundImage={quoteimage3}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>
            {/* text */}
            <Box
              w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
              h="235px"
              borderTopRadius={{ base: "none", md: "30px" }}
              borderBottomRadius={{ base: "30px" }}
              bg="rgba(246,247,249)"
              color="black"
              p="25px"
              textAlign="justify"
              fontSize={{ base: "0.8rem", md: "1rem" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Text
                  fontSize={{
                    base: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  color={theme.colors.col.secondary}
                  fontWeight="600"
                >
                  Steadfastness in Duty
                </Text>
                <br />
                <Text color={theme.colors.col.secondary}>Bhagavad Gita 3.35</Text>
                <br />
                <Text>
                <span style={{ color: theme.colors.col.secondary }}>&#x22;</span>It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.<span style={{ color: theme.colors.col.secondary }}>
                    &#x22;
                  </span>
                </Text>
              </Box>
            </Box>
          </Box>
          
        </Box>
      </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection3;
