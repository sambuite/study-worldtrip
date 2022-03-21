import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      minH="20"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Image src="/logo.svg" alt="logo" />
    </Flex>
  );
}
