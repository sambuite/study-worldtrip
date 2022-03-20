import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction="column" h="100vh" w="100wh">
      <Header />
      <Banner />
      <TravelTypes />
    </Flex>
  );
}
