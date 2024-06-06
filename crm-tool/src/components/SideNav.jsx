import {
  Flex,
  VStack,
  Text,
  Divider,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import home from "../assets/home.svg";
import analytics from "../assets/analytics.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";

const SideNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
  };

  const handleDashboardNav = async () => {
    navigate(`/`);
  };

  const handleAnalyticsNav = async () => {
    navigate(`/dashboard`);
  };

  return (
    <Flex
      bg={colorMode === "light" ? "brand.navy" : "brand.maroon"}
      w="20vw"
      h="100vh"
      zIndex="1000"
      boxShadow="md"
      flexDir="column"
      align="center"
      justifyContent="space-between"
    >
      <Flex align="center" justify="space-between" flexDir="column">
        <Flex align="center" justify="center" p="4" borderBottomWidth="1px">
          <img src={logo} alt="logo" />
        </Flex>
        <Flex
          align="center"
          gap="4vh"
          flexDir="column"
          padding="5vh"
          width="100%"
          justify="center"
        >
          <Button
            onClick={toggleColorMode}
            colorScheme="blue"
            variant="outline"
            size="sm"
          >
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
          <VStack spacing="4" align="start">
            <Flex
              align="center"
              gap="1vw"
              cursor="pointer"
              onClick={handleDashboardNav}
            >
              <img src={home} alt="home icon" />
              <Text color="brand.white">Dashboard</Text>
            </Flex>
            <Flex
              align="center"
              gap="1vw"
              cursor="pointer"
              onClick={handleAnalyticsNav}
            >
              <img src={analytics} alt="analytics icon" />
              <Text color="brand.white">Analytics</Text>
            </Flex>
          </VStack>
        </Flex>
        <Divider />
      </Flex>
      <Flex padding="4vh" align="center" justify="center" width="100%">
        <Button
          variant="solid"
          backgroundColor="brand.orange"
          align="center"
          justify="center"
          onClick={handleLogout}
        >
          <Text color="brand.white">LOGOUT</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideNav;
