import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function VercelAuthCallbackPage() {
  const { replace } = useRouter();

  React.useEffect(() => {
    const { hash } = window.location;
    const decodedHash = decodeURIComponent(hash);
    const redirectOrigin = decodedHash.split('|')?.[1]?.split('&')?.[0];
    const targetUrl = `${redirectOrigin}/de-de/anmeldeprozess/${hash}`;
    replace(targetUrl);
  }, [replace]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
      <h2>Sie werden weitergeleitet</h2>
    </>
  );
}
