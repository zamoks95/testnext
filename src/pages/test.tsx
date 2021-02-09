import styled from 'styled-components';
import Head from 'next/head';
import Menu from '../components/organisms/menu';
const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.t1};
  line-height: ${({ theme }) => theme.sizes.t1h};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`;

const Test = () => {
  return (
    <div>
      <Head>
        <title>Test Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Title>My page</Title>
    </div>
  );
};

export default Test;
