import { useState, useEffect } from 'react';
import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Grid,
  Modal,
  Checkbox,
  Input,
} from '@nextui-org/react';
import { Group, Avatar, Select } from '@mantine/core';
import countryData from '../Utils/country.json';

const nftOptions = ['bush.gif', 'flower.gif', 'giphy.gif'];
//@ts-ignore
const PurchaseNft = ({ spendMethod }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const [countries, setCountries] = useState([]);

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
                      src={option}
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
                          Available soon.
                        </Text>
                        <Text color="#000" size={12}>
                          Get notified.
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button
                            flat
                            auto
                            rounded
                            color="secondary"
                            onClick={handler}
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

      <Modal
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
      </Modal>
    </>
  );
};

export default PurchaseNft;
