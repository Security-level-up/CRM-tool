import { Box, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import SideNav from "../components/SideNav";
import "./Dashboard.css";

const Dashboard = () => {
  const { colorMode } = useColorMode();

  // fake user
  const user = {
    name: "John Doe",
    role: "Administrator",
  };

  return (
    <Flex
      flexDir="row"
      height="100vh"
      width="100vw"
      padding="0"
      bg={colorMode === "light" ? "white" : "brand.navy"}
    >
      <SideNav />
      <Flex flexDir="column" justify="center" height="100vh" width="80vw">
        <Flex
          direction="column"
          minHeight="100vh"
          bg={colorMode === "light" ? "white" : "brand.navy"}
          color="white"
        >
          <Flex
            justify="space-between"
            align="center"
            p={4}
            bg="brand.turquoise"
            width="100%"
          >
            <Box>
              <h2 size="md">Welcome, {user.name}!</h2>
              <h4 size="sm">{user.role}</h4>
            </Box>
          </Flex>
          <Flex p={4} justify="space-between">
            <Box bg="brand.turquoise" borderRadius="lg" p={4} flex="1" mr={2}>
              <h2 size="sm">Key Metric 1</h2>
              <h4 size="lg">500</h4>
            </Box>
            <Box bg="brand.turquoise" borderRadius="lg" p={4} flex="1" mr={2}>
              <h2 size="sm">Key Metric 2</h2>
              <h4 size="lg">700</h4>
            </Box>
            <Box bg="brand.turquoise" borderRadius="lg" p={4} flex="1">
              <h2 size="sm">Key Metric 3</h2>
              <h4 size="lg">900</h4>
            </Box>
          </Flex>

          {/* Key Stats Tables Section */}
          <Grid templateColumns="1fr" gap={6} p={4}>
            <GridItem bg="brand.turquoise" borderRadius="lg" p={4}>
              <h2 size="md">Table 1</h2>
              <Box>Table 1 Content</Box>
            </GridItem>
            <GridItem bg="brand.turquoise" borderRadius="lg" p={4}>
              <h2 size="md">Table 2</h2>
              <Box>Table 2 Content</Box>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
