import { useLoading } from '@/hooks/useLoading';
import { useState } from 'react';
import { serviceSideProps } from '@/utils/i18n';
import Layout from '@/components/Layout';
import Payment from './components/payment';
import Invoice from './components/invoice';

function Home() {
  const { Loading } = useLoading();
  const [initialized, setInitialized] = useState(true);

  return (
    <>
      <Layout>
        <Payment mb={'12px'}></Payment>
        <Invoice></Invoice>
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
