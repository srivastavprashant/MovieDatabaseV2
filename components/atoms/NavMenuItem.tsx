import React from 'react';
import { Menu, MenuItem, MenuButton, MenuList, Button, Text, Flex } from '@chakra-ui/react';

interface MenuItemProps {
    heading: string;
    subheading: string[];
    mr?: number;
}

const NavMenuItem: React.FC<MenuItemProps> = ({ mr, heading, subheading }) => {
    return (
        <Flex mr={mr}>
            <Menu >
                <MenuButton
                    as={Button}
                    bg='none'
                    // rightIcon={<BsCaretDownFill color='white' />}
                    >
                    <Text fontFamily='poppins' fontWeight='600' fontSize='md'>{heading}</Text>
                </MenuButton>
                <MenuList bg='#fff' color='black' boxShadow='0px 0px 10px rgba(0, 0, 0, 0.2)' border='0px'>
                    {
                        subheading.map(item => <Text fontFamily='poppins' _hover={{ bgGradient: 'linear(to-tr, #00072D, #43C6AC)' }}><MenuItem  color='black' _hover={{color: '#fff'}}>{item}</MenuItem></Text>)
                    }
                </MenuList>
            </Menu>
        </Flex>
    );
}

export default NavMenuItem;