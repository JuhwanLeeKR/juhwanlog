import Layout from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({ projects }: any) {
  //console.log(projects);

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6'>
        <Head>
          <title>이주환 포트폴리오 | 프로젝트</title>
          <meta
            name='description'
            content='유저 경험과 디자인에 민감한 프론트엔드 개발자 이주환입니다. 새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다. 어제보다 나은 사람이 되는 것이 목표입니다.'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className='text-4xl font-semibold sm:text-5xl'>
          <span className='pl-4 text-blue-500'>{projects.results.length}</span>
          개의 프로젝트가 있습니다.
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6'>
          {projects.results.map((aProject: any) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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
