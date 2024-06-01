import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import "./Dashboard.css";

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // fake user
  const user = {
    name: "John Doe",
    role: "Administrator",
  };

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      bg={colorMode === "light" ? "gray.100" : "gray.800"}
      color={colorMode === "light" ? "gray.800" : "white"}
    >
      {/* Header Section */}
      <Flex
        justify="space-between"
        align="center"
        p={4}
        bg={colorMode === "light" ? "white" : "gray.900"}
      >
        <Box>
          <Heading size="md">Welcome, {user.name}!</Heading>
          <Heading size="sm">{user.role}</Heading>
        </Box>
        <Button onClick={toggleColorMode} colorScheme="teal" variant="outline">
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </Flex>

      {/* Key Metrics Section */}
      <Flex p={4} mb={4} justify="space-between">
        <Box
          bg={colorMode === "light" ? "white" : "gray.700"}
          borderRadius="lg"
          p={4}
          flex="1"
          mr={2}
        >
          <Heading size="sm">Key Metric 1</Heading>
          <Heading size="lg">500</Heading>
        </Box>
        <Box
          bg={colorMode === "light" ? "white" : "gray.700"}
          borderRadius="lg"
          p={4}
          flex="1"
          mr={2}
        >
          <Heading size="sm">Key Metric 2</Heading>
          <Heading size="lg">700</Heading>
        </Box>
        <Box
          bg={colorMode === "light" ? "white" : "gray.700"}
          borderRadius="lg"
          p={4}
          flex="1"
        >
          <Heading size="sm">Key Metric 3</Heading>
          <Heading size="lg">900</Heading>
        </Box>
      </Flex>

      {/* Key Stats Tables Section */}
      <Grid templateColumns="1fr" gap={6} p={4}>
        <GridItem
          bg={colorMode === "light" ? "white" : "gray.700"}
          borderRadius="lg"
          p={4}
        >
          <Heading size="md">Table 1</Heading>
          <Box mt={4}>Table 1 Content</Box>
        </GridItem>
        <GridItem
          bg={colorMode === "light" ? "white" : "gray.700"}
          borderRadius="lg"
          p={4}
        >
          <Heading size="md">Table 2</Heading>
          <Box mt={4}>Table 2 Content</Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Dashboard;
