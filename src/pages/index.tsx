import { Box, Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { ContinentsSlide } from '../components/ContinentsSlide';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { api } from '../services/axios';

type Continent = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh" w="100wh">
        <Header />
        <Banner />
        <TravelTypes />
        <Box w="24" h="0.5" mx="auto" bgColor="gray.600" />

        <Heading whiteSpace="pre" fontSize="4xl" textAlign="center" my="10">
          {'Vamos nessa?\nEntão escolha seu continente'}
        </Heading>

        <ContinentsSlide continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(`/continents`);

  const continents = response.data;

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, // 1 day1
  };
};
