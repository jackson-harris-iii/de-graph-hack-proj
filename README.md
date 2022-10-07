## Inspiration
We wanted to use many of the available tools to create a social impact product

## What it does
Dynamic Carbon Offset NFTs are minted when you prepay for your carbon footprint for either 1 month (flower), 3 months (bush), or 1 year (forest). The dynamic NFT will start to die to signal to you when your next payment is due. You're able to top up with either the same amount of time or upgrade to a longer time. The NFT is visible in a user's Coinbase Wallet if they sign in with that address. Proceeds go to the contract address and will be donated to offset projects.

## How we built it
We built it using these tools: Coinbase Wallet - to use during login so the NFT will live in the wallet Spruce - sign-In with Ethereum Polygon - NFT smart contract Figment - contract deployment Alchemy - web3 infra wagmi - React hooks for Ethereum Next.js - app infra NFT.Storage/IPFS - NFT storage Vercel - app hosting React - framework

## Challenges we ran into
unable to get Cloverly api nor Ducky api to send offset payment directly to them
using Chainlink Keepers to calculate time passed and update the NFT to next stages (wilting then dying) was difficult
need permissions to use Coinbase Pay
there are no Chainlink data feeds for carbon emissions data
Accomplishments that we're proud of
Inserted Spruce into a Next JS app with wagmi for user login
User generated NFT - Polygon contract takes in user’s self defined parameters and generates NFT and metadata based on them (country name, country’s emissions, offset price)
What we learned
It took piecing together to be able to put Log In With Ethereum inside a Next JS app, wasn't straight forward. We learned how to create a smart contract that can take in any parameters to mint an NFT specifically to the type of user.

## Future iterations
The next step for this project would be to configure Chainlink Keepers to track time passed so the NFT will update the next 2 levels of each NFT to show the plant wilting and then dying. A user would also be able to upgrade their NFT to the next level by paying more. A subgraph could be used as well to show users the total number of people in each category ( which tells how much offset has been paid into the future), total offset vs footprint, and time to expiry (what % of forest population is close to wilting).

## Encouraging carbon emission offset by incentivizing user behavior with dynamic PFPs not only helps the planet, but have far reaching applications. We used per capita averages, however the emissions amount can be calculated for each user according to their activities (especially if they travel a lot). This can be determined by their payment transactions in which each type of transaction has a rating and is added into the user's independent calculation of their emissions - an avenue that Coinbase Pay could easily enter into. With Coinbase Pay's cashback program, the proceeds could go towards paying for the user's offset. To add, businesses that are actively working towards reducing their own emissions can partner with Coinbase Pay to be highlighted as preferred partners.

This example uses [`next-pwa`](https://github.com/shadowwalker/next-pwa) to create a progressive web app (PWA) powered by [Workbox](https://developers.google.com/web/tools/workbox/).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app&project-name=progressive-web-app&repository-name=progressive-web-app)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example progressive-web-app progressive-web-app
# or
yarn create next-app --example progressive-web-app progressive-web-app
# or
pnpm create next-app --example progressive-web-app progressive-web-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
