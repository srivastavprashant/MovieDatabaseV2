import React from 'react';
import { Drawer, DrawerOverlay, DrawerCloseButton, DrawerBody, DrawerContent } from '@chakra-ui/react';

interface NavDrawerProps {
    isOpen: boolean;
    onClose: any;
}

const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <Drawer
            size='full'
            isOpen={isOpen}
            placement="right"
            onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bg='#fff' p={10}>
                <DrawerCloseButton color='black' fontSize={18} />

                <DrawerBody display='flex' alignItems='center' flexDirection='column' color='black' fontFamily='poppins' justifyContent='space-around'>

                </DrawerBody>

            </DrawerContent>
        </Drawer>
    )
}

export default NavDrawer;