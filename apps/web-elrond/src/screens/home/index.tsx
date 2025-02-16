import Layout from '@/components/layout';
import Blocks from '@/screens/home/components/blocks';
import DataBlocks from '@/screens/home/components/data_blocks';
import Price from '@/screens/home/components/price';
import Staking from '@/screens/home/components/staking';
import Transactions from '@/screens/home/components/transactions';
import useStyles from '@/screens/home/styles';
import dynamic from 'next/dynamic';

const Epoch = dynamic(import('@/screens/home/components/epoch'), { ssr: false });

const Home = () => {
  const { classes } = useStyles();
  return (
    <Layout className={classes.root}>
      <DataBlocks className={classes.dataBlocks} />
      <Price className={classes.price} />
      <Staking className={classes.staking} />
      <Epoch className={classes.epoch} />
      <Blocks className={classes.blocks} />
      <Transactions className={classes.transactions} />
    </Layout>
  );
};

export default Home;
