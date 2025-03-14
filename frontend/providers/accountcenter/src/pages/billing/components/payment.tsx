import React from 'react';
import { useRouter } from 'next/router';
import { Button, Text, Flex, Tag, TagLabel, IconButton, Tooltip, Center } from '@chakra-ui/react';
import Card from '@/components/Card';
import MyIcon from '@/components/Icon';
import { useTranslation } from 'next-i18next';
import { Ellipsis, Settings, Trash2 } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';
import Empty from './empty';

interface PaymentProps {
  ID: number;
  CardBrand: string;
  CardNo: string;
  UserUID: number;
  default: boolean;
  last_payment_status: string;
}

const PaymentsData: PaymentProps[] = [
  // {
  //   ID: 1,
  //   CardBrand: 'visa',
  //   CardNo: '**** **** **** 1234',
  //   UserUID: 1,
  //   default: true,
  //   last_payment_status: 'failed'
  // },
  // {
  //   ID: 2,
  //   CardBrand: 'mastercard',
  //   CardNo: '**** **** **** 5678',
  //   UserUID: 1,
  //   default: false,
  //   last_payment_status: 'failed'
  // },
];

const Payment = ({ ...props }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Card {...props}>
      <Flex justify={'space-between'} align={'center'} mb={'16px'}>
        <Text fontSize={'18px'} fontWeight={600} lineHeight={'28px'}>
          {t('PayMethod')}
        </Text>
        <Button variant={'outline'} colorScheme={'gray'}>
          {t('AddPayment')}
        </Button>
      </Flex>
      <Flex gap={'8px'} direction={'column'}>
        {PaymentsData.length !== 0 ? (
          PaymentsData.map((item) => (
            <Flex
              key={item.ID}
              justify={'space-between'}
              align={'center'}
              pl={'12px'}
              pr={'16px'}
              py={'12px'}
              bg={'#F9F9F9'}
              borderRadius={'xl'}
            >
              <Flex align={'center'}>
                <Center
                  border={'1.5px solid #E4E4E7'}
                  borderRadius={'6px'}
                  w={'52.5px'}
                  h={'36px'}
                  mr={'12px'}
                >
                  <MyIcon name={item.CardBrand.toLowerCase() as 'mastercard' | 'visa'} />
                </Center>
                <Text fontSize={'16px'} fontWeight={600} lineHeight={'24px'} mr={'8px'}>
                  {item.CardBrand}
                </Text>
                <Text fontSize={'16px'} fontWeight={600} lineHeight={'24px'} mr={'12px'}>
                  {item.CardNo}
                </Text>
                {item.default && (
                  <Tag
                    variant={'subtle'}
                    size={'md'}
                    colorScheme={'gray'}
                    borderRadius={'full'}
                    mr={'8px'}
                  >
                    <TagLabel>Default</TagLabel>
                  </Tag>
                )}
                {item.last_payment_status.toLowerCase() === 'failed' && (
                  <Tag
                    variant={'outline'}
                    size={'md'}
                    colorScheme={'red'}
                    borderRadius={'full'}
                    bg={'#FEF2F2'}
                  >
                    <TagLabel>Not Available</TagLabel>
                  </Tag>
                )}
              </Flex>
              <Popover>
                <PopoverTrigger>
                  <IconButton aria-label="More" icon={<Ellipsis />} variant={'ghost'} />
                </PopoverTrigger>
                <PopoverContent
                  width={'160px'}
                  borderRadius={'xl'}
                  shadow={'0px 4px 12px 0px #00000014'}
                >
                  <PopoverBody p={'8px'}>
                    <Tooltip
                      hasArrow
                      label={
                        item.default
                          ? t('DefaultToDefault')
                          : item.last_payment_status.toLowerCase() === 'failed'
                          ? t('FailedToDefault')
                          : ''
                      }
                    >
                      <Button variant={'ghost'} w={'100%'} justifyContent={'flex-start'}>
                        <Settings size={'16px'} />
                        <Text fontSize={'14px'} lineHeight={'20px'} ml={'8px'}>
                          {t('SetDefault')}
                        </Text>
                      </Button>
                    </Tooltip>
                    <Tooltip hasArrow label={item.default ? t('DeleteDefault') : ''}>
                      <Button variant={'ghost'} w={'100%'} justifyContent={'flex-start'}>
                        <Trash2 size={'16px'} />
                        <Text fontSize={'14px'} lineHeight={'20px'} ml={'8px'}>
                          {t('Delete')}
                        </Text>
                      </Button>
                    </Tooltip>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          ))
        ) : (
          <Center borderRadius={'xl'} border={'1px dashed #D4D4D4'}>
            <Empty
              title={t('NoPayment')}
              description={t('NoPaymentPrompt')}
              Icon={<MyIcon name={'emptyPayment'} color={'white'} w={'90px'} h={'90px'} />}
            />
          </Center>
        )}
      </Flex>
    </Card>
  );
};

export default Payment;
