import React from 'react';
import { useRouter } from 'next/router';
import MyIcon from '@/components/Icon';
import { useTranslation } from 'next-i18next';
import Card from '@/components/Card';
import { Flex, Text, Tag, TagLabel, IconButton, Button, Center, Box } from '@chakra-ui/react';
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
  const columns: ColumnDef<UsageProps>[] = React.useMemo(
    () => [
      {
        id: 'appName',
        header: t('AppName'),
        accessorKey: 'appName'
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
    </Card>
  );
};

export default Usage;
