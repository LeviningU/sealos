import React from 'react';
import { useRouter } from 'next/router';
import MyIcon from '@/components/Icon';
import { useTranslation } from 'next-i18next';
import Card from '@/components/Card';
import {
  Flex,
  Text,
  IconButton,
  Button,
  Center,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  DrawerHeader,
  Table,
  Tr,
  Td,
  Tbody
} from '@chakra-ui/react';
import { Ellipsis } from 'lucide-react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import { BaseTable } from '@/components/BaseTable/baseTable';
import Empty from '@/components/Empty';

interface UsageProps {
  namespace: string;
  appType: number;
  appName: string;
  totalCost: string;
  status: string;
}

const UsageData: UsageProps[] = [
  {
    namespace: 'namespace1',
    appType: 1,
    appName: 'appName1',
    totalCost: '$10',
    status: 'Active'
  },
  {
    namespace: 'namespace1',
    appType: 1,
    appName: 'appName1',
    totalCost: '$10',
    status: 'Active'
  },
  {
    namespace: 'namespace1',
    appType: 1,
    appName: 'appName1',
    totalCost: '$10',
    status: 'Deleted'
  },
  {
    namespace: 'namespace1',
    appType: 1,
    appName: 'appName1',
    totalCost: '$10',
    status: 'Active'
  }
];

const Usage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const [selectApp, setSelectApp] = React.useState<UsageProps | null>(null);
  const columns: ColumnDef<UsageProps>[] = React.useMemo(
    () => [
      {
        id: 'appName',
        header: t('AppName'),
        cell: ({ row }) => (
          <Flex
            alignItems={'center'}
            onClick={() => {
              setIsOpen(true);
              setSelectApp(row.original);
            }}
          >
            <Text>{row.original.appName}</Text>
            <IconButton
              ml={'4px'}
              size={'sm'}
              aria-label={'more'}
              icon={<Ellipsis size={16} />}
              onClick={() => {
                console.log('click');
              }}
            />
          </Flex>
        )
      },
      {
        id: 'appType',
        header: t('Type'),
        accessorKey: 'appType'
      },
      {
        id: 'totalCost',
        header: t('TotalCost'),
        accessorKey: 'totalCost'
      },
      {
        id: 'status',
        header: t('Status'),
        cell: ({ row }) => (
          <Flex alignItems={'center'}>
            <Box
              mr={'4px'}
              bg={row.original.status === 'Active' ? '#3CCA7F' : '#EF4444'}
              h={'6px'}
              w={'6px'}
              borderRadius={'full'}
            ></Box>
            <Text>{row.original.status}</Text>
          </Flex>
        )
      }
    ],
    [t]
  );
  const table = useReactTable<UsageProps>({
    columns,
    data: UsageData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0
      }
    }
  });

  return (
    <Card>
      <Flex justify={'space-between'} align={'center'} mb={'16px'}>
        <Text fontSize={'18px'} fontWeight={600} lineHeight={'28px'}>
          {t('AppUsage')}
        </Text>
        <Button visibility={'hidden'} variant={'outline'} colorScheme={'gray'}></Button>
      </Flex>
      <BaseTable
        isLoading={false}
        table={table}
        tdStyle={{ height: '52px', fontSize: '14px', lineHeight: '20px', fontWeight: 400 }}
        empty={
          <Center>
            <Empty
              title={t('NoUsage')}
              description={t('NoUsagePrompt')}
              Icon={
                <MyIcon name={'emptyUsage'} color={'white'} w={'60px'} h={'60px'} mb={'12px'} />
              }
            />
          </Center>
        }
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent borderRadius={'16px'} margin={'8px'} border={'1px solid #E4E4E7'}>
          <DrawerHeader borderBottom={'1px solid #E4E4E7'}>{selectApp?.appName}</DrawerHeader>

          <DrawerBody borderBottom={'1px solid #E4E4E7'} bg={'#F7F7F9'} padding={'24px'}>
            <Box>
              <Text mb={'16px'} fontSize={'16px'} fontWeight={500}>
                App Launchpad
              </Text>
              <Table>
                <Tbody>
                  <Tr borderRadius={'16px'} border={'1px solid #E4E4E7'} h={'48px'}>
                    <Td>CPU</Td>
                    <Td>
                      <Text>0.5</Text>core
                    </Td>
                    <Td>
                      $<Text></Text>0.000248
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </DrawerBody>

          <DrawerFooter bg={'#F7F7F9'} justifyContent="flex-start">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Card>
  );
};

export default Usage;
