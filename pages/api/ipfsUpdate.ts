import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { ironOptions } from './ironOptions';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  res.send({ ok: true });
};

export default handler;

const json = {
  name: "This NFT represents 0xE62489Ac0C7e28A8e76fdc7639AC79B9a5cd477a's carbon footprint and offset",
  description: 'this is a test thing for now',
  attributes: {
    category: 'flower2',
    categoryImage:
      'https://ipfs.io/ipfs/bafybeigbjr7ataao4kctt33l3druqvyn6u67d3oa3od3zj37mad2ealvje',
    totalCarbonOffset: '45',
    totalCarbonFootprint: '0',
    country: 'united states',
    countryEmmissionsTotal: '450000',
    countryEmmissionsPerCapita: '15',
  },
};
