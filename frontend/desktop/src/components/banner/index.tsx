import useAppStore from '@/stores/app';
import { Box, Button, Center, Flex, Icon, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function SaleBanner() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const { openApp, installedApps } = useAppStore();
  const [isMobileSize] = useMediaQuery('(max-width: 780px)');

  useEffect(() => {
    const lastDisplayTimestamp = localStorage.getItem('bannerLastDisplay');
    const today = new Date().toLocaleDateString();

    if (!lastDisplayTimestamp || lastDisplayTimestamp !== today) {
      setIsBannerVisible(true);
      localStorage.setItem('bannerLastDisplay', today);
    }
  }, []);

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  const goDetailFeishu = () => {
    window.open(`https://mp.weixin.qq.com/s/jzOfviMgXD85r2zMQWskvA`, '_blank');
  };

  return (
    <Box position={'relative'}>
      <Center
        w="100%"
        position={'fixed'}
        background="linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.60) 47%, rgba(255, 255, 255, 0.30) 100%)"
        backdropFilter={'blur(19px)'}
        height={'48px'}
        zIndex={5}
        px="18px"
        gap={isMobileSize ? '0px' : '12px'}
      >
        <Text color={'#13091C'} fontSize={isMobileSize ? '12px' : '16px'} fontWeight={600}>
          🎉 1024 程序员节福利 Sealos 免费送你云资源
        </Text>
        <Center
          position={'relative'}
          w="104px"
          h="32px"
          borderRadius={'8px'}
          background={'#FFF'}
          cursor={'pointer'}
          onClick={goDetailFeishu}
        >
          <Text fontSize={isMobileSize ? '12px' : '14px'} fontWeight={500} color={'#000'} mr="12px">
            活动详情
          </Text>
          <Image
            position={'absolute'}
            right={'-8px'}
            bottom={'-6px'}
            alt="logo"
            width={'36px'}
            height={'36px'}
            src="/icons/draw.svg"
          />
        </Center>
      </Center>

      {isBannerVisible && (
        <Box
          position={'fixed'}
          left={0}
          top={0}
          w="100vw"
          h="100vh"
          background="rgba(0, 0, 0, 0.48)"
          zIndex={99}
        ></Box>
      )}

      {isBannerVisible && (
        <Flex
          position={'fixed'}
          maxW={'80%'}
          w="590px"
          borderRadius={'16px'}
          background={'#F4F7FB'}
          boxShadow={'0px 8px 29px 0px rgba(187, 196, 206, 0.25)'}
          top={'50%'}
          left={'50%'}
          zIndex={999}
          transform={'translate(-50%, -50%)'}
          flexDirection={'column'}
          h={'433px'}
        >
          <Icon
            cursor={'pointer'}
            top={'24px'}
            right={'24px'}
            position={'absolute'}
            ml="auto"
            xmlns="http://www.w3.org/2000/svg"
            width={isMobileSize ? '28px' : '32px'}
            height="33px"
            viewBox="0 0 32 33"
            fill="none"
            onClick={closeBanner}
          >
            <path
              d="M16.3536 18.1531L16.0001 17.7995L15.6465 18.1531L9.11318 24.6864C8.97166 24.8279 8.79211 24.9066 8.5334 24.9066C8.27469 24.9066 8.09513 24.8279 7.95362 24.6864C7.8121 24.5449 7.7334 24.3653 7.7334 24.1066C7.7334 23.8479 7.8121 23.6684 7.95362 23.5268L14.487 16.9935L14.8405 16.64L14.487 16.2864L7.95362 9.75307C7.8121 9.61156 7.7334 9.43201 7.7334 9.17329C7.7334 8.91458 7.8121 8.73502 7.95362 8.59351C8.09513 8.452 8.27468 8.37329 8.5334 8.37329C8.79211 8.37329 8.97166 8.452 9.11318 8.59351L15.6465 15.1268L16.0001 15.4804L16.3536 15.1268L22.887 8.59351C23.0285 8.452 23.208 8.37329 23.4667 8.37329C23.7254 8.37329 23.905 8.452 24.0465 8.59351C24.188 8.73503 24.2667 8.91458 24.2667 9.17329C24.2667 9.432 24.188 9.61156 24.0465 9.75307L17.5132 16.2864L17.1596 16.64L17.5132 16.9935L24.0465 23.5268C24.188 23.6684 24.2667 23.8479 24.2667 24.1066C24.2667 24.3653 24.188 24.5449 24.0465 24.6864C23.905 24.8279 23.7254 24.9066 23.4667 24.9066C23.208 24.9066 23.0285 24.8279 22.887 24.6864L16.3536 18.1531Z"
              fill="#24282C"
              stroke="#24282C"
            />
          </Icon>
          <Image
            src="/images/banner-bg.svg"
            alt="driver"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            objectFit="cover"
            zIndex={-1}
            borderRadius={'16px'}
          />
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            px={isMobileSize ? '32px' : '96px'}
            borderRadius={'16px'}
            flex={1}
          >
            <Text
              mt={isMobileSize ? '42px' : '100px'}
              color="#13091C"
              fontSize={isMobileSize ? '18px' : '28px'}
              fontWeight="600"
            >
              🎉 1024 Sealos 免费送你云资源
            </Text>
            <Text
              mt="30px"
              color={'#262A32'}
              fontSize={isMobileSize ? '14px' : '18px'}
              fontWeight={600}
            >
              充值优惠限时开启
            </Text>
            <Text color={'#262A32'} fontSize={isMobileSize ? '14px' : '18px'} fontWeight={600}>
              体验Devbox，即送20余额
            </Text>
            <Button
              mt="50px"
              variant={'solid'}
              maxW="360px"
              w="100%"
              onClick={() => {
                closeBanner();
                const app = installedApps.find((t) => t.key === 'system-devbox');
                if (!app) return;
                openApp(app, {
                  query: {
                    openRecharge: 'true'
                  }
                });
              }}
            >
              立即参加
            </Button>
            <Button
              variant={'solid'}
              color={'#485264'}
              bg={'white'}
              maxW="360px"
              w="100%"
              onClick={() => {
                closeBanner();
                goDetailFeishu();
              }}
              mt="16px"
              _hover={{
                bg: 'white',
                color: '#2B5FD9'
              }}
            >
              活动详情
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}
