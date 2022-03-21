import { Flex, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
  const router = useRouter();

  const isInHome = router.asPath === '/';

  console.log(router.asPath);

  return (
    <Flex
      as="header"
      maxW="100%"
      maxWidth={1480}
      h="20"
      minH="20"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      {!isInHome && (
        <Link href="/" passHref>
          <Icon
            mt="2"
            as={IoIosArrowBack}
            color="gray.600"
            cursor="pointer"
            fontSize="32"
          />
        </Link>
      )}
      <Image src="/logo.svg" alt="logo" mx="auto" />
    </Flex>
  );
}
