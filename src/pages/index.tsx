import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex direction="column" h="100vh" w="100wh">
      <Header />
      <Banner />
    </Flex>
  );
}
