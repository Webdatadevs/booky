import React from 'react';
import { Box, Button, Icon, IconButton, Img, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { Skeleton } from 'antd';

const SkeletonCard = () => {
  return (
    <Box
    display={'inline-flex'} borderRadius={'10px'} padding={'10px'} justifyContent={'space-between'} alignSelf={'stretch'}  flexDirection={'column'} background={'#fff'}
    >
      {/* Placeholder for product image */}
      <Skeleton.Image style={{
        width:'100%',
        height:'200px',
      }} active/>

      {/* Placeholder for product title */}
      <Box padding="15px">
        <Skeleton active size="large" shape="round" />
      </Box>

      {/* Placeholder for product details */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX="15px"
        paddingBottom="15px"
        gap={'10px'}
      >
        <Skeleton.Button active size="small" shape="round" />
        <Skeleton.Button active size="large" shape="round" />
        <Box display="flex" alignItems="center" gap="10px">
          <Skeleton.Button active size="small" shape="round" />
        </Box>

      </Box>
    </Box>
  );
};

export default SkeletonCard;
