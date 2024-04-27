import {
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchModal = ({isOpen, onOpen, onClose}) => {
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
        <>
            <Modal
            
            initialFocusRef={initialRef}
                finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel>Izlew</FormLabel>
                            <InputGroup>
                            <Input placeholder="Kitaptı izleń" />
                            <InputRightElement>
                            <IconButton 
                                _hover={{background:'#222'}} _active={{opacity:'0.5'}} textColor={'#fff'}  background={'#222'} icon={<BiSearch />}/>
                            </InputRightElement>
                            </InputGroup>
                            
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SearchModal;
