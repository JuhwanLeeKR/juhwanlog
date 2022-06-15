import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>프론트엔드 개발자 - 이주환 포트폴리오</title>
        <meta
          name='description'
          content='유저 경험과 디자인에 민감한 프론트엔드 개발자 이주환입니다. 새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다. 어제보다 나은 사람이 되는 것이 목표입니다.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>메인 화면</h1>
    </div>
  );
};

export default Home;
