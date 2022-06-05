import { Grid } from '@nextui-org/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './header.module.css';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <nav>
        <Grid.Container>
          <Grid xs={6}>
            <ul className={styles.navItems}>
              <li className={styles.navItem}>
                <Link href={session ? '/myhome' : '/'}>
                  <a>Home</a>
                </Link>
              </li>
              {session ? (
                <li className={styles.navItem}>
                  <Link href="/siwe">
                    <a>Profile</a>
                  </Link>
                </li>
              ) : (
                <li className={styles.navItem}>
                  <Link href="/siwe">
                    <a>Login</a>
                  </Link>
                </li>
              )}
            </ul>
          </Grid>
          <Grid xs={6}>
            <div className={styles.signedInStatus}>
              <p
                className={`nojs-show ${
                  !session && loading ? styles.loading : styles.loaded
                }`}
              >
                {!session && (
                  <>
                    <span className={styles.notSignedInText}>
                      You are not signed in
                    </span>
                  </>
                )}
                {session?.user && (
                  <>
                    {session.user.image && (
                      <span
                        style={{
                          backgroundImage: `url('${session.user.image}')`,
                        }}
                        className={styles.avatar}
                      />
                    )}
                    <span className={styles.signedInText}>
                      <small>Signed in as</small>
                      <br />
                      <strong>{session.user.email ?? session.user.name}</strong>
                    </span>
                    <a
                      href={`/api/auth/signout`}
                      className={styles.button}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </a>
                  </>
                )}
              </p>
            </div>
          </Grid>
        </Grid.Container>
      </nav>
    </header>
  );
}
