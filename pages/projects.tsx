import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projects }: any) {
  //console.log(projects);

  return (
    <Layout>
      <Head>
        <title>이주환 포트폴리오 | 프로젝트</title>
        <meta
          name='description'
          content='유저 경험과 디자인에 민감한 프론트엔드 개발자 이주환입니다. 새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다. 어제보다 나은 사람이 되는 것이 목표입니다.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{projects.results.length}개의 프로젝트가 있습니다.</h1>

      {projects.results.map((aProject: any) => (
        <h1 key={aProject.properties.Name.title[0].plain_text}>
          {aProject.properties.Name.title[0].plain_text}
        </h1>
      ))}
    </Layout>
  );
}

// 빌드 타임에 호출한다
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'WorkPeriod',
          direction: 'descending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  // const projectNames = projects.results.map(
  //   (aProjects: any) => aProjects.properties.Name.title[0].plain_text
  // );
  //console.log(`projectNames: ${projectNames}`);
  //console.log(projects);

  return {
    props: { projects },
  };
}
