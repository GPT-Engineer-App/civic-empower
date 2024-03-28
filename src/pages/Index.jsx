import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Tabs, TabList, Tab, TabPanels, TabPanel, FormControl, FormLabel, Input, Textarea, Image, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaVoteYea, FaBook, FaComments } from "react-icons/fa";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleVoterRegistration = (e) => {
    e.preventDefault();
    // TODO: Implement voter registration logic
    alert(`Thank you for registering to vote, ${name}!`);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Civic Engagement Platform
      </Heading>

      <Tabs isFitted variant="enclosed">
        <TabList mb={4}>
          <Tab>
            <FaVoteYea /> Voter Registration
          </Tab>
          <Tab>
            <FaBook /> Educational Resources
          </Tab>
          <Tab>
            <FaComments /> Discussion Forums
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading as="h2" size="xl" mb={4}>
              Voter Registration
            </Heading>
            <form onSubmit={handleVoterRegistration}>
              <Stack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl id="address" isRequired>
                  <FormLabel>Address</FormLabel>
                  <Textarea value={address} onChange={(e) => setAddress(e.target.value)} />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                  Register to Vote
                </Button>
              </Stack>
            </form>
          </TabPanel>

          <TabPanel>
            <Heading as="h2" size="xl" mb={4}>
              Educational Resources
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
              <GridItem>
                <Image src="https://images.unsplash.com/photo-1597700331582-aab3614b3c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2b3RpbmclMjByaWdodHN8ZW58MHx8fHwxNzExNjUxNzkzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Voting Rights" />
                <Text mt={2}>Learn about your voting rights and the importance of participating in elections.</Text>
              </GridItem>
              <GridItem>
                <Image src="https://images.unsplash.com/photo-1616003618233-85dbe30adcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXZpYyUyMHJlc3BvbnNpYmlsaXRpZXN8ZW58MHx8fHwxNzExNjUxNzk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Civic Responsibilities" />
                <Text mt={2}>Understand your civic responsibilities and how you can contribute to your community.</Text>
              </GridItem>
            </Grid>
            <Button mt={8} colorScheme="blue">
              <Link href="/resources">Explore More Resources</Link>
            </Button>
          </TabPanel>

          <TabPanel>
            <Heading as="h2" size="xl" mb={4}>
              Discussion Forums
            </Heading>
            <Text>Engage in meaningful discussions with fellow citizens on various political and social issues. Share your perspectives, learn from others, and collaborate on grassroots initiatives.</Text>
            <Button mt={8} colorScheme="blue">
              <Link href="/forums">Join the Discussion</Link>
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Index;
