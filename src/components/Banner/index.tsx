import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      maxW="100vw"
      h="80"
      minH="80"
      align="center"
      justify="center"
      bgImage="url('https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        maxW={1240}
        h="100%"
        align="center"
        justifyContent="space-between"
      >
        <Box width="35%">
          <Heading whiteSpace="pre" color="gray.200">
            {'5 Continents,\ninfinitas possibilidades'}
          </Heading>
          <Text color="gray.500" mt="5">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image src="/airplane.svg" alt="avião" w="96" mb="-32" />
      </Flex>
    </Flex>
  );
}
