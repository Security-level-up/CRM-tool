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

const SideNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
            <Flex align="center" gap="1vw" cursor="pointer">
              <img src={home} alt="home icon" />
              <Text color="brand.white">Dashboard</Text>
            </Flex>
            <Flex align="center" gap="1vw" cursor="pointer">
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
        >
          <Flex align="center" color="brand.white" fontFamily="heading">
            <Text>LOGOUT</Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideNav;
