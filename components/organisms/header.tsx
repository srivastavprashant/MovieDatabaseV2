import React from 'react';
import { Flex, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerCloseButton, DrawerContent, Heading } from '@chakra-ui/react';
import Logo from '../atoms/Logo';
import NavMenuItem from '../atoms/NavMenuItem';
import { FiMenu } from 'react-icons/fi';
import { useState, useCallback, useEffect } from 'react';

// Really cool stuff to handle media query based conditional rendering.
const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const mobileVersion = useMediaQuery(832);

    return (
        <Flex
            flexDirection='row'
            width='100%'
            py={2}
            px={6}
            bgGradient="linear(to-tr, primary, secondary)"
            justifyContent='space-between'>
            <Logo />


            {
                !mobileVersion? 
                <Flex>
                    <NavMenuItem
                        mr={4}
                        heading='Movies'
                        subheading={['Popular Movies', 'Top Rated', 'Now Playing', 'In Theatres']} />
                    <NavMenuItem
                        mr={4}
                        heading='TV Shows'
                        subheading={['Popular Shows', 'Top Rated', 'Now Playing']} />
                    <NavMenuItem
                        mr={4}
                        heading='People'
                        subheading={['Popular People']} />
                    <NavMenuItem
                        heading='More'
                        subheading={['Popular Movies', 'Top Rated', 'Now Playing', 'In Theatres']} />
                </Flex>
                :
                <Flex>
                    <FiMenu fontSize={30} onClick={onOpen}/>
                </Flex>
            }

            
        </Flex>
    )
}

export default Header;