import { Card, Col, Row, Button, Text } from '@nextui-org/react';
//@ts-ignore
const NftCard = ({ nft }) => (
  <Card cover css={{ w: '100%' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          My Dynamic Carbon NFT
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={nft.metadata.image}
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
        borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
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
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: 'inherit' }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                open sea
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default NftCard;
