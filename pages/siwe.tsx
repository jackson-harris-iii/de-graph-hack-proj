import { getCsrfToken, signIn, useSession, signOut } from 'next-auth/react';
import { SiweMessage } from 'siwe';
import { useAccount, useConnect, useNetwork, useSignMessage } from 'wagmi';
import { Button, Grid } from '@nextui-org/react';
import Layout from '../Components/layout';

function Siwe() {
  const [{ data: connectData }, connectAsync] = useConnect();
  const { data: session, status } = useSession();
  const [, signMessage] = useSignMessage();

  const handleLogin = async () => {
    try {
      const res = await connectAsync(connectData.connectors[0]);
      const callbackUrl = '/home';
      const message = new SiweMessage({
        domain: window.location.host,
        address: res.data?.account,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: res.data?.chain?.id,
        nonce: await getCsrfToken(),
      });
      const { data: signature, error } = await signMessage({
        message: message.prepareMessage(),
      });
      await signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      });
      window.location.href = '/myhome';
    } catch (error) {
      window.alert(error);
    }
  };

  const handleLogout = async () => {};

  return (
    <>
      {session ? (
        <Layout>
          <Grid.Container justify="center">
            <Grid xs={10} justify="center">
              <Button
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </Button>
            </Grid>
          </Grid.Container>
        </Layout>
      ) : (
        <Layout>
          <Grid.Container justify="center">
            <Grid xs={10} justify="center">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Sign-In w/Ethereum
              </Button>
            </Grid>
          </Grid.Container>
        </Layout>
      )}
    </>
  );
}

Siwe.Layout = Layout;

export default Siwe;
