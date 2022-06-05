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
import AccessDenied from '../Components/access-denied';
import Layout from '../Components/layout';

const myhome = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected');
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
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
        <Grid xs={6}>
          <NftCard />
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default myhome;
