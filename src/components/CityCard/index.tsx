import { Avatar, Flex, Image, Text } from '@chakra-ui/react';

interface CityCard {
  city: {
    id: number;
    name: string;
    country: string;
    imageUrl: string;
    flagUrl: string;
  };
}

export function CityCard({ city }: CityCard) {
  return (
    <Flex borderRadius={8} w={255} h={280} direction="column">
      <Image
        src={city.imageUrl}
        alt="londres"
        h="65%"
        objectFit="cover"
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
      />
      <Flex
        border="1px"
        borderTop="0"
        borderBottomLeftRadius={4}
        borderBottomRightRadius={4}
        borderColor="yellow.500"
        bgColor="white"
        h="35%"
        align="center"
        justifyContent="space-between"
        p="7"
      >
        <Flex direction="column">
          <Text fontSize="xl" fontFamily="mono" color="gray.600">
            {city.name}
          </Text>
          <Text fontSize="md" fontFamily="mono" color="gray.400" mt="2">
            {city.country}
          </Text>
        </Flex>
        <Avatar src={city.flagUrl} w="10" h="10" />
      </Flex>
    </Flex>
  );
}
