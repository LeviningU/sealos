import Empty from './components/empty';
import { useLoading } from '@/hooks/useLoading';
import { useState } from 'react';
import { serviceSideProps } from '@/utils/i18n';
import Layout from '@/components/Layout';
import Usage from './components/usage';
import { Flex, Select, Input, Text } from '@chakra-ui/react';
import Card from '@/components/Card';
import { CircleHelp } from 'lucide-react';
import { useTranslation } from 'next-i18next';

function Home() {
  const { Loading } = useLoading();
  const [initialized, setInitialized] = useState(true);
  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <Flex justifyContent={'space-between'} mb={'12px'}>
          <Flex w={'334px'}>
            <Select size={'lg'} placeholder={t('SelectRegion')}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select size={'lg'} placeholder={t('SelectWorkspace')}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <Flex alignItems={'center'}>
            <Input
              fontSize={'14px'}
              lineHeight={'20px'}
              fontWeight={400}
              width={'fit-content'}
              h={'40px'}
              variant={'outline'}
              bg={'white'}
              placeholder="Select Date and Time"
              size={'lg'}
              type="datetime-local"
            />
            <Text fontSize={'14px'} lineHeight={'20px'} fontWeight={400} px={'8px'}>
              -
            </Text>
            <Input
              fontSize={'14px'}
              lineHeight={'20px'}
              fontWeight={400}
              width={'fit-content'}
              h={'40px'}
              variant={'outline'}
              bg={'white'}
              placeholder="Select Date and Time"
              size={'lg'}
              type="datetime-local"
            />
          </Flex>
        </Flex>
        <Flex mb={'12px'} gap={'12px'}>
          <Card width={'full'}>
            <Flex justifyContent={'space-between'}>
              <Text fontSize={'18px'} lineHeight={'28px'} fontWeight={600}>
                {t('TotalCost')}
              </Text>
              <Flex alignItems={'center'} color={'#1C4EF5'}>
                <CircleHelp size={'16px'} />
                <Text ml={'4px'} fontSize={'14px'} lineHeight={'20px'} fontWeight={500}>
                  {t('CostMetrics')}
                </Text>
              </Flex>
            </Flex>
            <Text mt={'16px'} fontSize={'36px'} lineHeight={'36px'} fontWeight={600}>
              $37.5
            </Text>
          </Card>
          <Card width={'full'}>
            <Flex>
              <Text fontSize={'18px'} lineHeight={'28px'} fontWeight={600}>
                {t('TotalApps')}
              </Text>
            </Flex>
            <Text mt={'16px'} fontSize={'36px'} lineHeight={'36px'} fontWeight={600}>
              12
            </Text>
          </Card>
        </Flex>
        <Usage />
      </Layout>
      <Loading loading={!initialized} />
    </>
  );
}

export async function getServerSideProps(content: any) {
  return {
    props: {
      ...(await serviceSideProps(content))
    }
  };
}

export default Home;
