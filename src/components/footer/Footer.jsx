import { AiFillYoutube } from "react-icons/ai"; 
import { BsTelegram } from "react-icons/bs"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { BsFillTelephoneFill } from "react-icons/bs"; 
import { Box, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <Box background={'#222'}  width={'100%'} padding={{base:'40px 50px 50px 50px', md:'40px 80px 60px 80px'}}>
      <Box display={'grid'}  gridTemplateColumns={'repeat(auto-fit, minmax(250px, 1fr))'} gap={'20px'} justifyContent={'space-between'} width={'100%'} textColor={'#fff'}>
        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text fontSize={'28px'} textColor={'#fff'}>Booky.uz</Text>
          <Link to={'https://play.google.com/store/apps/details?id=com.karsoft.bookienew'} target="_blank">
             <Box background={'#222'} textColor={'#fff'} display={'flex'} alignItems={'center'} gap={'10px'} rounded={'10px'}>
                <Icon as={BsGooglePlay}/>
                <Text>Google play</Text>
             </Box>
          </Link>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
             <Text>Biz benen baylanısıw</Text>
         <Box display={'flex'} alignItems={'center'} gap={'10px'}>
             <Icon as={BsFillTelephoneFill}/>
             <a href="tel:+998933625744">+998 93 362 57 44</a>
         </Box>
         <Box display={'flex'} alignItems={'center'} gap={'10px'}>
             <Icon as={BsFillTelephoneFill}/>
             <a href="mailto:bookieaudiokitaplar@gmail.com">bookieaudiokitaplar@gmail.com</a>
         </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
          <a href="/donate">Joybardı qollap-quwatlaw</a>
          <a href="/faq">Kóp beriletuǵın sorawlar</a>
          <Box>© 2023 Booky | Karsoft</Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text>Sociallıq tarmaqlar</Text>
          <Box display={'flex'} alignItems={'center'} gap={'15px'}>
            <Icon fontSize={'28px'} as={AiFillInstagram }/>
            <Icon fontSize={'28px'} as={BsTelegram}/>
            <Icon fontSize={'28px'} as={AiFillYoutube}/>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'} gap={'10px'} marginTop={'20px'} >
        <Text textColor={'#fff'} >Tólem túrleri</Text>
        <Box display={'flex'} gap={'15px'} flexWrap={'wrap'}>
          <img className="bg-[#fff] p-[10px] w-[94px] rounded-[10px]"  src="/public/Uzum-H6pkfPqO.svg" alt="" />
          <img className="bg-[#fff] p-[10px] w-[94px] rounded-[10px]"  src="/public/Click-ezTOdTmt.svg" alt="" />
          <img className="bg-[#fff] p-[10px] w-[94px] rounded-[10px]"  src="/public/Payme-UfHp3g3l.svg" alt="" />
        </Box>
      </Box>
      <Box width={'100%'} textAlign={'center'} borderTop={'1px solid #fff'} marginTop={'20px'}>
          <Text textColor={'#fff'} fontSize={'14px'} marginTop={'25px'}>
          © 2023-2024 "Booky.uz" qaraqalpaq tilindegi audiokitaplar platforması. Barlıq huqıqlar qorǵalǵan, nusqa alıp kóshiriw qadaǵan etiledi.
          </Text>
      </Box>
      </Box>
    </>
  )
}

export default Footer