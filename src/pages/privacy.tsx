import Link from 'next/link';
import styled from 'styled-components';
import Menu from '../components/organisms/menu';
import Head from 'next/head';
const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.t1};
  line-height: ${({ theme }) => theme.sizes.t1h};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`;

const Privacy = () => {
  return (
    <div>
      <Head>
        <title>Privacy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Title>My page</Title>
    </div>
  );
};

export default Privacy;
