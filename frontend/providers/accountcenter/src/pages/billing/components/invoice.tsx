import React from 'react';
import { useRouter } from 'next/router';
import MyIcon from '@/components/Icon';
import { useTranslation } from 'next-i18next';
import Card from '@/components/Card';
import { Flex, Text, Tag, TagLabel, IconButton, Button, Center } from '@chakra-ui/react';
import { Download } from 'lucide-react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import { BaseTable } from '@/components/BaseTable/baseTable';
import Empty from './empty';

interface InvoiceProps {
  date: string;
  amount: string;
  status: string;
  desc: string;
}

const InvoiceData: InvoiceProps[] = [
  {
    date: '2021-09-01',
    amount: 'USD 100',
    status: 'Paid',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-02',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-03',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-04',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-05',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-06',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-07',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  },
  {
    date: '2021-09-08',
    amount: 'USD 200',
    status: 'Due',
    desc: 'Invoice Desc'
  }
];

const Invoice = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const columns: ColumnDef<InvoiceProps>[] = React.useMemo(
    () => [
      {
        id: 'date',
        header: t('Date'),
        accessorKey: 'date'
      },
      {
        id: 'amount',
        header: t('Amount'),
        accessorKey: 'amount'
      },
      {
        id: 'status',
        header: t('Status'),
        cell: ({ row }) => (
          <Tag
            variant={row.original.status === 'Paid' ? 'subtle' : 'outline'}
            size={'md'}
            colorScheme={row.original.status === 'Paid' ? 'gray' : 'red'}
            borderRadius={'full'}
            bg={row.original.status === 'Paid' ? undefined : '#FEF2F2'}
          >
            <TagLabel>{row.original.status}</TagLabel>
          </Tag>
        )
      },
      {
        // id: 'desc',
        header: t('Description'),
        accessorKey: 'desc'
      },
      {
        id: 'action',
        header: '',
        cell: () => (
          <Flex justifyContent="flex-end">
            <IconButton aria-label="Download" icon={<Download size={'16px'} />} variant={'ghost'} />
          </Flex>
        )
      }
    ],
    [t]
  );
  const table = useReactTable<InvoiceProps>({
    columns,
    data: InvoiceData,
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
          {t('InvoiceHistory')}
        </Text>
        <Button isDisabled={InvoiceData.length === 0} variant={'outline'} colorScheme={'gray'}>
          {t('DownloadAll')}
        </Button>
      </Flex>
      <BaseTable
        isLoading={false}
        table={table}
        empty={
          <Center>
            <Empty
              title={t('NoInvoice')}
              description={t('NoInvoicePrompt')}
              Icon={
                <MyIcon name={'emptyInvoice'} color={'white'} w={'60px'} h={'60px'} mb={'12px'} />
              }
            />
          </Center>
        }
      />
    </Card>
  );
};

export default Invoice;
