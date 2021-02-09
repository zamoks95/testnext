import Head from 'next/head';
import { useState } from 'react';

import Menu from '../components/organisms/menu';
import InputText from '../components/atoms/input-text';

export default function Home() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <InputText
          name="input-name"
          placeholder="Name"
          value={inputName}
          handler={setInputName}
        />
        <InputText
          name="input-email"
          placeholder="Email"
          value={inputEmail}
          handler={setInputEmail}
          required
        />
      </main>
    </div>
  );
}
