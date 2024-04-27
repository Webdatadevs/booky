import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CardComponents from '../Cards/CardComponents';
import { useSelector } from 'react-redux';

const Save = () => {
    const { saveBookData } = useSelector(state => state.books);
 

    return (
        <>
            <Box width={'100%'} minHeight={'60vh'} background={'#e2e8f0'} paddingY={'15px'}>
                <Text width={'90%'} textAlign={'center'} marginX={'auto'} 
                fontSize={'38px'} marginBottom={'10px'}>Saylandılar</Text>
                <Box width={'90%'} marginX={'auto'} display={'grid'} gridTemplateColumns={'repeat(auto-fill, minmax(290px, 1fr))'} gap={'15px'} alignSelf={'stretch'}>
                    {saveBookData.map(item => (
                        <CardComponents key={item.id} element={item} />
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Save;
