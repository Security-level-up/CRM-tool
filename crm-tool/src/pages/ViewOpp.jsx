import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import SideNav from "../components/SideNav";
import {
  Input,
  Button,
  Select,
  Textarea,
  Flex,
  FormLabel,
  FormControl,
  useColorMode,
} from "@chakra-ui/react";

const ViewOpp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardDetails = location.state.cardDetails || {};

  const [title, setTitle] = useState(cardDetails.Title || "");
  const [amount, setAmount] = useState(cardDetails.Amount || "");
  const [probability, setProbability] = useState(
    cardDetails.ProbOfCompletion || ""
  );
  const [stage, setStage] = useState(cardDetails.Stage || "");
  const [dateClosed, setDateClosed] = useState(cardDetails.DateClosed || "");
  const [dateCreated, setDateCreated] = useState(cardDetails.DateCreated || "");
  const [assignedTo, setAssignedTo] = useState(cardDetails.AssignedTo || "");
  const [notes, setNotes] = useState(cardDetails.Notes || "");

  const { colorMode } = useColorMode();

  const handleSave = async () => {
    try {
      navigate(`/`);
    } catch (error) {
      console.error("Post Failed:", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      console.log("Delete success");
      navigate(`/`);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleQuit = () => {
    navigate(`/`);
  };

  return (
    <Flex
      bg={colorMode === "light" ? "brand.light_grey" : "brand.navy"}
      className="page-container"
    >
      <SideNav />
      <Flex
        flexDir="column"
        className="main-container"
        justify="center"
        align="center"
        height="100vh"
        width="80vw"
      >
        <Flex
          spacing={4}
          className="form-container"
          p="4vh"
          justify="center"
          align="center"
          height="80vh"
          width="70vw"
          flexDir="column"
          bg="brand.white"
          gap="1vh"
          boxShadow="md"
        >
          <Flex width="100%" justify="flex-end">
            <Button
              bg="brand.purple"
              color="brand.white"
              borderRadius="0"
              onClick={handleQuit}
            >
              Close
            </Button>
          </Flex>

          <FormControl
            isRequired
            width="100%"
            height="10vh"
            p="1vh"
            gap="1vh"
            color="black"
          >
            <Input
              bg="brand.white"
              border="none"
              fontSize="2rem"
              fontWeight="600"
              height="10vh"
              p="0"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <Flex
            className="flex-row"
            flexDir="row"
            width="100%"
            height="10vh"
            gap="2vh"
            color="black"
          >
            <FormControl isRequired width="100%" p="1vh" gap="1vh">
              <FormLabel>Assigned To</FormLabel>
              <Input
                bg="brand.grey"
                type="text"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              />
            </FormControl>

            <FormControl width="100%" p="1vh" gap="1vh">
              <FormLabel>Stage</FormLabel>
              <Select
                bg="brand.grey"
                id="stage"
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                cursor="pointer"
              >
                <option color="black" value={1} className="dropdown-new">
                  New
                </option>
                <option value={2} className="dropdown-prop">
                  Proposal
                </option>
                <option value={3} className="dropdown-neg">
                  Negotiation
                </option>
                <option value={4} className="dropdown-close">
                  Won
                </option>
                <option value={5} className="dropdown-won">
                  Lost
                </option>
              </Select>
            </FormControl>
          </Flex>

          <Flex
            className="flex-row"
            flexDir="row"
            width="100%"
            height="10vh"
            gap="2vh"
            color="black"
          >
            <FormControl width="100%" p="1vh" gap="1vh">
              <FormLabel>Expected Amount</FormLabel>
              <Input
                bg="brand.grey"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>

            <FormControl width="100%" p="1vh" gap="1vh">
              <FormLabel>Probability Of Completion</FormLabel>
              <Input
                bg="brand.grey"
                type="text"
                value={probability}
                onChange={(e) => setProbability(e.target.value)}
              />
            </FormControl>
          </Flex>

          <Flex
            className="flex-row"
            flexDir="row"
            width="100%"
            height="10vh"
            gap="2vh"
            color="black"
          >
            <FormControl
              isReadOnly
              width="100%"
              height="15vh"
              p="1vh"
              gap="1vh"
            >
              <FormLabel>Date Created</FormLabel>
              <Input
                bg="brand.grey"
                type="text"
                value={dateCreated}
                onChange={(e) => setDateCreated(e.target.value)}
              />
            </FormControl>

            <FormControl
              isReadOnly
              width="100%"
              height="15vh"
              p="1vh"
              gap="1vh"
            >
              <FormLabel>Date Closed</FormLabel>
              <Input
                bg="brand.grey"
                type="text"
                value={dateClosed}
                onChange={(e) => setDateClosed(e.target.value)}
              />
            </FormControl>
          </Flex>

          <FormControl width="100%" p="1vh" gap="1vh" color="black">
            <FormLabel>Notes</FormLabel>
            <Textarea
              bg="brand.grey"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormControl>
          <Flex
            mt={4}
            justifyContent="flex-end"
            className="footer"
            color="brand.white"
            gap="1vw"
            width="100%"
          >
            <Button
              bg="brand.red"
              color="brand.white"
              borderRadius="0"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              bg="brand.blue"
              color="brand.white"
              borderRadius="0"
              onClick={handleSave}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ViewOpp;
