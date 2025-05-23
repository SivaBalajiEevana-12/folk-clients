import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "./folk.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import {
  Box,
  UnorderedList,
  ListItem,
  Image,
  DrawerCloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
} from "@chakra-ui/react";
gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpenAboutUs, setIsOpenAboutUs] = useState(false);
  const [isOpenProgrammes, setIsOpenProgrammes] = useState(false);
  const [isHoveredAboutus, setIsHoveredAboutus] = useState(false);
  const [isHoveredProgrammes, setIsHoveredProgrammes] = useState(false);
  const HoverableListitem = ({ children }) => {
    const hoverableUnderline = useRef();
    const { contextSafe } = useGSAP({ scope: hoverableUnderline });
    const handleMouseEnter = contextSafe(() => {
      gsap.to(hoverableUnderline.current, {
        x: "0",
        backgroundColor: "white",
        duration: "1",
        width: "100%",
      });
    });
    const handleMouseLeave = contextSafe(() => {
      gsap.to(hoverableUnderline.current, { duration: "1", width: "0" });
    });
    return (
      <Box>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          _hover={{ color: "white" }}
        >
          {children}
        </Box>
        <Box ref={hoverableUnderline} height="2px" width="0px"></Box>
      </Box>
    );
  };

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }
  function handleIsOpenAboutUs() {
    setIsOpenAboutUs(!isOpenAboutUs);
  }
  function handleIsOpenProgrammes() {
    setIsOpenProgrammes(!isOpenProgrammes);
  }
  function handleSetAboutUs() {
    setIsHoveredAboutus(true);
  }
  function handleUnsetAboutUs() {
    setIsHoveredAboutus(false);
  }
  function handleSetProgrammes() {
    setIsHoveredProgrammes(true);
  }
  function handleUnsetProgrammes() {
    setIsHoveredProgrammes(false);
  }

  return (
    <Box
      position="fixed"
      top="0"
      zIndex="100"
      width="100%"
      boxShadow="0px 8px 16px 0px rgba(0,0,0,0.2)"
      
    >
      {/*Desktop navbar*/}
      {/* <Box
        w="100%"
        bg="#DE8D38"
        display={{ base: "none", md: "none", lg: "flex" }}
        justifyContent="space-around"
        alignItems="center"
        color="white"
        height="50px"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          gap="50px"
        >
          <Box
            display="flex"
            gap="5px"
            justifyContent="center"
            alignItems="center"
          >
            <MdOutlinePhoneCallback />
            <a href="tel:123-456-7890">123-456-7890</a>
          </Box>
          <Box
            display="flex"
            gap="5px"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <FaRegClock />
            Mon-Sat:<time>9:00-18:00</time>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="15px"
          fontSize="20px"
        >
          <Box>
            <FaTwitter />
          </Box>
          <Box>
            <FaPinterest />
          </Box>
          <Box>
            <FaFacebook />
          </Box>
          <Box>
            <FaInstagramSquare />
          </Box>
          <Box>
            <FaLinkedin />
          </Box>
        </Box>
      </Box> */}
      <Box
        display="flex"
        justifyContent={{
          base: "space-between",
          md: "space-between",
          lg: "space-between",
          xl: 'space-between'
        }}
        alignItems="center"
        bg="#DE8D38"
        w="100%"
        h="100px"
        fontWeight="400"
        color="white"
        boxSizing="border-box"
        padding={{base:'',md:'',lg:'0px 30px',xl:'0px 50px'}}
      >
        <Box>
          <Image
            src={logo}
            alt="FOLK"
            height="60px"
            width={{ base: "200px", md: "200px", lg: "200px", xl: "200px" }}
            ml={{ base: "10px", md: "100px", lg: "0", xl: "0" }}
            mr={{ base: "0", md: "0", lg: "10px", xl: "20px" }}
          />
        </Box>
        <Box
          display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
          alignItems="center"
          fontSize="2rem"
          transition="all 0.5s"
          zIndex="2"
        >
          <Box
            onClick={handleToggleMenu}
            marginRight={{ base: "10px", md: "100px" }}
          >
            {" "}
            <IoMenu style={{ color: "white" }} />
          </Box>

          <Drawer
            isOpen={toggleMenu}
            placement="right"
            onClose={handleToggleMenu}
            cursor="pointer"
            color="black"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>FOLK</DrawerHeader>
                <DrawerBody>
                  <Box spacing={8}>
                    <UnorderedList
                      style={{
                        listStyleType: "none",
                        lineHeight: "3rem",
                        cursor: "pointer",
                      }}
                    >
                      <hr />
                      <ListItem _hover={{ color: "#DE8D38" }}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>AboutUs</Box>
                          <Box
                            onClick={handleIsOpenAboutUs}
                            borderLeft="0.5px solid gray"
                            paddingLeft="5px"
                          >
                            <FaChevronDown fontSize="15px" />
                          </Box>
                        </Box>
                      </ListItem>
                      {isOpenAboutUs && (
                        <Box>
                          <hr />
                          <Link to="/about">
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              AboutUs
                            </ListItem>
                          </Link>
                          <hr />
                          <Link to="/privacy-policy">
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Privacy and Policy
                            </ListItem>
                          </Link>
                          <hr />
                          <Link to="/terms-and-conditions">
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Terms and conditions
                            </ListItem>
                          </Link>
                        </Box>
                      )}
                      <hr />
                      <Link to="/blogs">
                        <ListItem _hover={{ color: "#DE8D38" }}>Blogs</ListItem>
                      </Link>
                      <hr />
                      <Link to="/donation">
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Donation
                        </ListItem>
                      </Link>
                      <hr />
                      <Link to="/festivals">
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          {" "}
                          Festivals
                        </ListItem>
                      </Link>
                      <hr />
                      <Link to="/gallery">
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Gallery
                        </ListItem>
                      </Link>
                      <hr />
                      <Link to="/">
                        <ListItem _hover={{ color: "#DE8D38" }}>Home</ListItem>
                      </Link>
                      <hr />
                      <ListItem _hover={{ color: "#DE8D38" }}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Link to="/programmes">
                            <Box>Programmes</Box>
                          </Link>
                          <Box
                            onClick={handleIsOpenProgrammes}
                            borderLeft="0.5px solid gray"
                            paddingLeft="5px"
                          >
                            <FaChevronDown fontSize="15px" />
                          </Box>
                        </Box>
                      </ListItem>
                      {isOpenProgrammes && (
                        <Box>
                          <Link to="/yogaForHappiness">
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Yoga for Happiness
                            </ListItem>
                          </Link>
                          <hr />
                          <Link to="">
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Art of Control
                            </ListItem>
                          </Link>
                          <hr />
                          <Link to="">
                            <ListItem _hover={{ color: "#DE8D38" }}>
                              Secret of Success
                            </ListItem>
                          </Link>
                        </Box>
                      )}
                      <hr />
                      <Link to="/recidency">
                        <ListItem _hover={{ color: "#DE8D38" }}>
                          Residency
                        </ListItem>
                      </Link>
                      <hr />
                      <Link to="/trips">
                        <ListItem _hover={{ color: "#DE8D38" }}>Trips</ListItem>
                      </Link>
                    </UnorderedList>
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>

        <Box
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          padding="15px"
          fontSize={{ lg: "0.6rem", xl: "1rem" }}
          overflow="hidden"
        >
          <UnorderedList
            style={{
              listStyleType: "none",
              display: "flex",
              padding: "0",
              textAlign: "center",
              overflow: "hidden",
              cursor: "pointer",
            }}
            gap={{ lg: "0.8rem", xl: "1.5rem" }}
          >
            <Link to="/">
              <ListItem>
                <HoverableListitem children="Home" />
              </ListItem>
            </Link>

            <Box
              onMouseLeave={handleUnsetAboutUs}
              onMouseEnter={handleSetAboutUs}
              display="inline-block"
            >
              <ListItem>
                <Link to="/about">
                  <HoverableListitem children="AboutUs" />
                </Link>
                <UnorderedList
                  className="submenu"
                  padding={{ lg: "10px", xl: "20px" }}
                  fontSize={{ lg: "0.8rem", xl: "1rem" }}
                  style={{
                    display: "block",
                    position: "absolute",
                    zIndex: "1",
                    color: "black",
                    backgroundColor: "white",
                    lineHeight: "2.5rem",
                    listStyleType: "none",
                    textAlign: "left",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    opacity: isHoveredAboutus ? "1" : "0",
                    visibility: isHoveredAboutus ? "visible" : "hidden",
                  }}
                >
                  <Link to="/about">
                    <ListItem _hover={{ color: "#DE8D38" }}>AboutUs</ListItem>
                  </Link>
                  <Link to="/privacy-policy">
                    <ListItem _hover={{ color: "#DE8D38" }}>
                      Privacy and Policy
                    </ListItem>
                  </Link>
                  <Link to="/terms-and-conditions">
                    <ListItem _hover={{ color: "#DE8D38" }}>
                      Terms and Conditions
                    </ListItem>
                  </Link>
                </UnorderedList>
              </ListItem>
            </Box>
            <Link to="/blogs">
              <ListItem>
                <HoverableListitem children="Blogs" />
              </ListItem>
            </Link>
            <Link to="/donation">
              <ListItem>
                <HoverableListitem children="Donation" />
              </ListItem>
            </Link>
            <Link to="/festivals">
              <ListItem>
                <HoverableListitem children="Festivals" />
              </ListItem>
            </Link>
            <Link to="/gallery">
              <ListItem>
                <HoverableListitem children="Gallery" />
              </ListItem>
            </Link>

            <Box
              onMouseLeave={handleUnsetProgrammes}
              onMouseEnter={handleSetProgrammes}
              display="inline-block"
            >
              <ListItem>
                <Link to="/programmes">
                  <HoverableListitem children="Programmes" />
                </Link>
                <UnorderedList
                  className="submenu"
                  padding={{ lg: "10px", xl: "20px" }}
                  fontSize={{ lg: "0.8rem", xl: "1rem" }}
                  style={{
                    display: "block",
                    position: "absolute",
                    color: "black",
                    zIndex: "1",
                    backgroundColor: "white",
                    lineHeight: "2.5rem",
                    listStyleType: "none",
                    textAlign: "left",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    opacity: isHoveredProgrammes ? "1" : "0",
                    visibility: isHoveredProgrammes ? "visible" : "hidden",
                  }}
                >
                  <Link to="/yogaForHappiness">
                    <ListItem _hover={{ color: "#DE8D38" }}>
                      Yoga for Happiness
                    </ListItem>
                  </Link>
                  <Link to="/whatsapp/register">
                    <ListItem _hover={{ color: "#DE8D38" }}>
                      Book Distribution
                    </ListItem>
                  </Link>
                  <Link to="">
                    <ListItem _hover={{ color: "#DE8D38" }}>
                      Art of Control
                    </ListItem>
                  </Link>
                  <Link to="">
                    <ListItem _hover={{ color: "#DE8D38" }}>
                      Secret of Success
                    </ListItem>
                  </Link>
                </UnorderedList>
              </ListItem>
            </Box>
            <Link to="/recidency">
              <ListItem>
                <HoverableListitem children="Residency" />
              </ListItem>
            </Link>
            <Link to="/trips">
              <ListItem>
                <HoverableListitem children="Trips" />
              </ListItem>
            </Link>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
