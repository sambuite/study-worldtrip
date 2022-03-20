import { Box, Flex, Heading } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction="column" h="100vh" w="100wh">
      <Header />
      <Banner />
      <TravelTypes />
      <Box w="24" h="0.5" mx="auto" bgColor="gray.600" />

      <Heading whiteSpace="pre" fontSize="4xl" textAlign="center" my="10">
        {'Vamos nessa?\nEntão escolha seu continente'}
      </Heading>
    </Flex>
  );
}
