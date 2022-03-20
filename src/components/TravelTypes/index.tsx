import { Flex, Image, Text } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Flex w="100vw" align="center" justify="center" my="32">
      <Flex w="100%" maxW={1240} align="center" justifyContent="space-between">
        <Flex direction="column" align="center">
          <Image src="/cocktail.svg" alt="bebida" w="20" h="20" />
          <Text color="gray.600" fontSize="2xl" fontWeight="semibold" mt="7">
            vida noturna
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/surf.svg" alt="bebida" w="20" h="20" />
          <Text color="gray.600" fontSize="2xl" fontWeight="semibold" mt="7">
            praia
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/building.svg" alt="bebida" w="20" h="20" />
          <Text color="gray.600" fontSize="2xl" fontWeight="semibold" mt="7">
            moderno
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/museum.svg" alt="bebida" w="20" h="20" />
          <Text color="gray.600" fontSize="2xl" fontWeight="semibold" mt="7">
            clássico
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/earth.svg" alt="bebida" w="20" h="20" />
          <Text color="gray.600" fontSize="2xl" fontWeight="semibold" mt="7">
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
