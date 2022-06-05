import styles from '../styles/Home.module.css';
import {
  Button,
  Container,
  Card,
  Row,
  Text,
  Grid,
  Spacer,
} from '@nextui-org/react';
import Header from '../Components/header';
import Layout from '../Components/layout';
import flower from '../public/gifs/flower.gif';

export default function IndexPage() {
  return (
    <Layout>
      <Grid.Container justify="center">
        <Grid xs={10}>
          <Card css={{ mb: '50px' }}>
            <h1 style={{ textAlign: 'center' }}>Dynamic Carbon Offset NFTs</h1>
            <p style={{ textAlign: 'center' }}>
              Grow confidence in your carbon footprint offset as you grow the
              forest!
            </p>
            <p style={{ textAlign: 'center' }}>
              Keeping your forest alive Mint your NFT to start prepaying for
              your carbon offset. Then top up to keep your offset neutral to
              your carbon footprint and prevent your forest from dying. Prices
              are based on your country.
            </p>
          </Card>
        </Grid>
        <Grid xs={10} justify="center">
          <Text>
            <h2 style={{ textAlign: 'center' }}>Keeping your NFT alive</h2>
          </Text>
        </Grid>
        <Grid xs={10} justify="center">
          <p style={{ textAlign: 'center' }}>
            Mint your NFT to start prepaying for your carbon offset. Then top up
            to keep your offset neutral to your carbon footprint and prevent
            your NFT from dying.
          </p>
        </Grid>
        <Grid.Container justify="center">
          <Grid md={3} xs={10}>
            <Card css={{ mb: '50px' }}>
              <Card.Header>
                <h3 style={{ textAlign: 'center' }}>
                  {' '}
                  Flower NFT = 1 month offset
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src="flower.gif"
                  height={400}
                  width="100%"
                  alt="Card example background"
                />
                <p style={{ textAlign: 'center' }}>
                  Buying this NFT offsets your carbon footprint for the next 1
                  month. Your flower will start wilting as time goes on to
                  remind you to top up!
                </p>
              </Card.Body>
            </Card>
          </Grid>

          <Grid md={3} xs={10}>
            <Card css={{ mb: '50px' }}>
              <Card.Header>
                <h3 style={{ textAlign: 'center' }}>
                  {' '}
                  Bush NFT = 3 month offset
                </h3>
              </Card.Header>
              <Card.Body>
                <Card.Image
                  src="bush.gif"
                  height={400}
                  width="100%"
                  alt="Card example background"
                />
                <p style={{ textAlign: 'center' }}>
                  Buying this NFT offsets your carbon footprint for the next 3
                  months and your forest starts growing. Your bush will start
                  wilting as time goes on to remind you to top up!
                </p>
              </Card.Body>
            </Card>
          </Grid>

          <Grid md={3} xs={10}>
            <Card css={{ mb: '50px' }}>
              <h3 style={{ textAlign: 'center' }}> Tree NFT = 1 year offset</h3>
              <Card.Body>
                <Card.Image
                  src="giphy.gif"
                  height={400}
                  width="100%"
                  alt="Card example background"
                />
                <p style={{ textAlign: 'center' }}>
                  Buying this NFT offsets your carbon footprint for the next 1
                  year and your forest is full. Your tree will start wilting as
                  time goes on to remind you to top up!
                </p>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </Layout>
  );
}
