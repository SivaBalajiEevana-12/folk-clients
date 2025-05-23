import { Box, Button, Grid, Text, GridItem, HStack, Heading, Collapse } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GrYoga } from "react-icons/gr";
import { GiOvermind, GiSecretBook, GiWindyStripes } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdFestival } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const CustomBox = ({ children, ...props }) => (
  <Box transition="all 0.8s ease-in-out" {...props}>
    {children}
  </Box>
);

const AdminNavbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate(); // Add useNavigate hook for navigation
  const [collapseStates, setCollapseStates] = useState({
    programmesShow: false,
    artOfMind: false,
    secretsOfSucces: false,
    residency: false,
    trips: false,
    festivals: false,
    blogs: false,
    gallery: false,
    donation: false
  });

  const navItems = [
    { label: 'Yoga Happiness', icon: GrYoga, path: '/admin/yoga', toggle: 'programmesShow' },
    { label: 'Mind Control', icon: GiOvermind, path: '/admin/mindControl', toggle: 'artOfMind' },
    { label: 'Secrets Success', icon: GiSecretBook, path: '/admin/secret', toggle: 'secretsOfSucces' },
    { label: 'Residency', icon: IoIosHome, path: '/admin/residency', toggle: 'residency' },
    { label: 'Trips', icon: GiWindyStripes, path: '/admin/trips', toggle: 'trips' },
    { label: 'Festivals', icon: MdFestival, path: '/admin/festivals', toggle: 'festivals' },
    { label: 'Blogs', icon: TbLogs, path: '/admin/blogs', toggle: 'blogs' },
    { label: 'Gallery', icon: GrGallery, path: '/admin/gallery', toggle: 'gallery' },
    { label: 'Donation', icon: BiSolidDonateBlood, path: '/admin/donations', toggle: 'donation' },
    { label: 'RegisterSession', icon: BiSolidDonateBlood, path: '/admin/registerEvent', toggle: 'donation' },
    // { label: 'Profile', icon: CgProfile, path: '/profile' },
    { label: 'Log Out', icon: IoMdLogOut, path: '/logout' }
  ];

  const toggleActiveItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
    if (item.toggle) {
      setCollapseStates(prevState => ({
        ...prevState,
        [item.toggle]: !prevState[item.toggle]
      }));
    }
  };

  const pathsWithUserResponse = [
    '/admin/yoga',
    '/admin/mindControl',
    '/admin/secret',
    '/admin/trips',
    '/admin/festivals'
  ];

  const handleRemoveToken = () => {
    localStorage.removeItem('token');
    navigate('/api/admin/login'); 
  };

  return (
   
    <Box h="100vh" bg="#F5F7F8" color="black"> 
      <Box p={4} bg="" borderRadius="md">
        <Box>
          <Heading fontSize={"34px"} m={"20px 0px"} textAlign={"center"} fontFamily={"body"} color="black">Folk Vizag</Heading>
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={5}>
          {navItems.map((item, index) => (
            <GridItem colSpan={2} key={index}>
              <Button
                p={"28px"}
                width="100%"
                justifyContent="space-between"
                bgColor={activeItem === item ? 'blue.200' : '#eeeeee'}
                color="black"
                _hover={{ bgColor: 'lightgray' }}
                onClick={() => {
                  if (item.path === '/logout') {
                    handleRemoveToken();
                  } else {
                    toggleActiveItem(item);
                  }
                }}
                cursor="pointer"
              >
                <HStack justifyContent="center" width="100%">
                  <Box border={"2px solid transparent"} boxShadow='md' bgColor={'white'} color={"black"} rounded='md' p={"9px"}>
                    {React.createElement(item.icon)}
                  </Box>
                  <span style={{ textAlign: "center", flex: 1 }}>{item.label}</span>
                  {item.toggle && (collapseStates[item.toggle] ? <IoIosArrowUp /> : <IoIosArrowForward size={"23px"} />)}
                </HStack>
              </Button>
              {item.toggle && (
                <Collapse in={collapseStates[item.toggle]} animateOpacity>
                  <CustomBox mt={2} ml={"80px"}>
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`${item.path}/createForm`}>
                      <Button border={"2px solid white"} width="80%">Add Event</Button>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`${item.path}/data`}>
                      <Button border={"2px solid white"} width="80%" mt={2}>Show Data</Button>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`${item.path}/events`}>
                      <Button border={"2px solid white"} width="80%" mt={2}>Events Data</Button>
                    </NavLink>
                    {pathsWithUserResponse.includes(item.path) && (
                      <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to={`${item.path}/response/data`}>
                        <Button
                        border={"2px solid white"}
                          width="80%"
                          mt={2}
                        >
                          User Response
                        </Button>
                      </NavLink>
                      
                    )}
                  </CustomBox>
                </Collapse>
              )}
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Text ml={"80px"} mt={"30px"}><q> <i>Hare Krishna</i></q></Text>
    </Box>
  );
};

export default AdminNavbar;
