import { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Row,
  Text,
  Grid,
  Button,
  Col,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import NftCard from '../Components/NftCard';
import PurchaseNft from '../Components/PurchaseNft';
import AccessDenied from '../Components/access-denied';
import Layout from '../Components/layout';
import { createAlchemyWeb3 } from '@alch/alchemy-web3';

const myhome = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [content, setContent] = useState();
  const [myDCON, setMyDCON] = useState();
  //@ts-ignore
  const url =
    process.env.ALCHEMY_URL ||
    `https://polygon-mumbai.g.alchemy.com/v2/GsY__Lv4xOT1LyzTXugvw0G0et6Dj6QP`;
  const NftContract = '0x6fd88f06d1f51c2802f28d8d0800fa28053d1d0b';
  const web3 = createAlchemyWeb3(url);

  // Fetch content from protected route
  useEffect(() => {
    //@ts-ignore
    const fetchData = async (session) => {
      // const res = await fetch('/api/examples/protected');
      // const json = await res.json();
      // if (json.content) {
      //   setContent(json.content);
      // }
      console.log('this is the session', session);
      const nfts = await web3.alchemy.getNfts({
        owner: session.address as string,
      });
      console.log('these are the nfts', nfts);
      const { ownedNfts } = nfts;

      if (Array.isArray(ownedNfts)) {
        for (const nft of ownedNfts) {
          if (
            nft &&
            nft.contract?.address === NftContract &&
            nft.metadata?.image
          ) {
            console.log('my dcon', nft);
            //@ts-ignore
            setMyDCON(nft);
            break;
          }
        }
      }
    };
    if (session) {
      fetchData(session);
    }
  }, [session]);

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <Grid.Container justify="center">
        <Grid xs={8}>{myDCON ? <NftCard nft={myDCON} /> : null}</Grid>
        <Grid xs={12}>
          <PurchaseNft
            spendMethod={
              //@ts-ignore
              myDCON?.contract ? 'top up' : 'mint'
            }
          />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default myhome;
