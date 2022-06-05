import { useState, useEffect } from 'react';
import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Grid,
  Checkbox,
  Input,
} from '@nextui-org/react';
import { Group, Avatar, Select, Modal } from '@mantine/core';
import countryData from '../Utils/country.json';

const nftOptions = [
  { image: 'flower.gif', duration: 1 },
  { image: 'bush.gif', duration: 3 },
  { image: 'giphy.gif', duration: 12 },
];
//@ts-ignore
const PurchaseNft = ({ spendMethod }) => {
  const [visible, setVisible] = useState(false);
  const [purchaseOption, setPurchaseOption] = useState();
  //@ts-ignore
  const handler = (option) => {
    setVisible(true);
    setPurchaseOption(option);
  };
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const [countries, setCountries] = useState([]);
  const [costCalc, setCostCalc] = useState('tbd...select country first');
  //@ts-ignore
  const handleChange = (e) => {
    const selectedCountry = countryData.find(
      (element) => Object.keys(element)[0] === e
    );
    //@ts-ignore
    const monthlyPriceMatic =
      //@ts-ignore
      selectedCountry[e].co2PerCapita * 1.05 * 0.58 * purchaseOption.duration;
    //@ts-ignore
    const monthlyPriceUSD = selectedCountry[e].co2PerCapita * 1.05;
    //@ts-ignore
    console.log('changed', selectedCountry[e]);
    //@ts-ignore
    console.log('price', monthlyPriceMatic);
    //@ts-ignore
    setCostCalc(monthlyPriceMatic);
  };

  useEffect(() => {
    const names = countryData.map((country) => Object.keys(country)[0]);
    console.log(names);
    //@ts-ignore
    setCountries(names);
  }, []);

  return (
    <>
      <Grid.Container justify="center">
        <Grid>
          {nftOptions.map((option, key) => (
            <Grid.Container justify="center">
              <Grid xs={10} justify="center">
                <Card key={key}>
                  <Card.Body>
                    <Card.Image
                      src={option.image}
                      height={400}
                      width="100%"
                      alt="Card example background"
                    />
                  </Card.Body>

                  <Card.Footer
                    blur
                    css={{
                      position: 'absolute',
                      bgBlur: '#ffffff',
                      borderTop:
                        '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={12}>
                          Carbon Offset Commitment
                        </Text>
                        <Text color="#000" size={12}>
                          {option.duration} Month(s)
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button
                            flat
                            auto
                            rounded
                            color="secondary"
                            onClick={(option) => handler(option)}
                          >
                            <Text
                              css={{ color: 'inherit' }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              {`${spendMethod}`}
                            </Text>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            </Grid.Container>
          ))}
        </Grid>
      </Grid.Container>

      {/* <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Select
              label="Your favorite framework/library"
              placeholder="Pick one"
              searchable
              nothingFound="No options"
              data={countries}
            />
          </Row>
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button auto onClick={closeHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Modal
        opened={visible}
        onClose={() => setVisible(false)}
        title="Select a Country"
      >
        <Grid.Container>
          <Grid justify="center" xs={12}>
            <Select
              label="This will determine your base Carbon Footprint"
              placeholder="Pick one"
              searchable
              nothingFound="No options"
              onChange={(e) => handleChange(e)}
              data={countries}
            />
          </Grid>
          <br />
          <br />
          <br />
          <span>
            Purchase Price: <span style={{ color: 'purple' }}>{costCalc}</span>{' '}
            {costCalc === 'tbd...select country first' ? null : 'Matic'}
          </span>
          <br />
          <br />
          <br />
          <Grid justify="center" xs={12}>
            <Grid justify="center" xs={4}>
              <Button auto flat color="error" onClick={closeHandler}>
                Cancel
              </Button>
            </Grid>
            <Grid justify="center" xs={4}>
              <Button auto onClick={closeHandler}>
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Grid.Container>
      </Modal>
    </>
  );
};

export default PurchaseNft;
