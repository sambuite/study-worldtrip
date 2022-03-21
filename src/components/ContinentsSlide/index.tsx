import { Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  EffectFade,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

type Continent = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

interface ContinentsSlideProps {
  continents: Continent[];
}

export function ContinentsSlide({ continents }: ContinentsSlideProps) {
  const router = useRouter();

  function handleOpenPage(id: number) {
    router.push(`/continents/${id}`);
  }

  return (
    <Flex w="100%" maxW="100vw">
      <Flex w="100%" maxW={1240} h={450} mx="auto" mb="12">
        <Swiper
          navigation={true}
          pagination={true}
          mousewheel={true}
          effect={'fade'}
          keyboard={true}
          modules={[EffectFade, Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {continents.map((continent) => (
            <SwiperSlide key={continent.id}>
              <Flex
                bgImage={continent.imageUrl}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                justify="center"
                align="center"
                flexDirection="column"
                h={'450px'}
                cursor="pointer"
                onClick={() => handleOpenPage(continent.id)}
              >
                <Heading
                  fontSize={'5xl'}
                  textAlign="center"
                  color="white"
                  lineHeight={'4.5rem'}
                  fontWeight="bold"
                >
                  {continent.name}
                </Heading>
                <Text
                  fontSize={'2xl'}
                  textAlign="center"
                  color="gray.100"
                  fontWeight="bold"
                  maxWidth={[200, 300, 500]}
                >
                  {continent.description}
                </Text>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}
