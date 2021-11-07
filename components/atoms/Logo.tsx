import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { MdLocalMovies } from 'react-icons/md';

interface LogoProps {

}

const Logo: React.FC<LogoProps> = ({ }) => {
    return (
        <Flex flexDirection='row' alignItems='center' >
            <MdLocalMovies fontSize={30} color='orange'/>
            <Text fontFamily='lemon' fontWeight='bold' fontSize='xl'>Movie</Text>
            <Text fontFamily='lemon' fontWeight='bold' fontSize='xl' color='orange'>Database</Text>
        </Flex>
    )
}

export default Logo;