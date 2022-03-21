import {
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FiInfo } from 'react-icons/fi';
import { CityCard } from '../../components/CityCard';
import { Header } from '../../components/Header';
import { api } from '../../services/axios';

type Continent = {
  name: string;
  imageUrl: string;
  content: string;
  plus100cities: number;
  countries: number;
  languages: number;
};

type City = {
  id: number;
  name: string;
  country: string;
  flagUrl: string;
  imageUrl: string;
};

interface ContinentsProps {
  continent: Continent;
  cities: City[];
}

export default function Continents({ cities, continent }: ContinentsProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>
      <Header />

      <Flex
        maxW="100vw"
        h={500}
        minH={500}
        bgImage={`url('${continent.imageUrl}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        justify="center"
        align="flex-end"
      >
        <Flex w="100%" maxW={1240} mb="14">
          <Heading color="gray.50">{continent.name}</Heading>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        maxW={1240}
        justifyContent="space-between"
        my="24"
        mx="auto"
      >
        <Text
          fontSize="2xl"
          lineHeight="9"
          color="gray.600"
          w="45%"
          textAlign="justify"
        >
          {continent.content}
        </Text>
        <Flex w="45%" justifyContent="space-between">
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="5xl" fontWeight="semibold" color="yellow.500">
              {continent.countries}
            </Text>
            <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
              países
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="5xl" fontWeight="semibold" color="yellow.500">
              {continent.languages}
            </Text>
            <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
              línguas
            </Text>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="5xl" fontWeight="semibold" color="yellow.500">
              {continent.plus100cities}
            </Text>
            <Text
              display="flex"
              fontSize="2xl"
              fontWeight="semibold"
              color="gray.600"
              alignItems="center"
              justifyContent="center"
            >
              cidades +100
              <Tooltip
                hasArrow
                label="As cidades +100 são as cidades que aquele continente possui que estão entre as 100 cidades mais visitadas do mundo."
              >
                <span tabIndex={0}>
                  <Icon as={FiInfo} color="gray.300" fontSize="22" ml="2" />
                </span>
              </Tooltip>
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex w="100%" maxW={1240} mx="auto" direction="column">
        <Heading>Cidades +100</Heading>

        <SimpleGrid minChildWidth={256} gap="2.875rem" my="10">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await api.get(`/continents/${id}`);

  const continent = response.data;

  const cities = continent.famousCities;

  return {
    props: {
      continent,
      cities,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
