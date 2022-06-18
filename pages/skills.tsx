import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import SkillDesc from '../components/skillDesc';

export default function Skills() {
  return (
    <Layout>
      <Head>
        <title>이주환 포트폴리오 | 기술스택</title>
        <meta
          name='description'
          content='유저 경험과 디자인에 민감한 프론트엔드 개발자 이주환입니다. 새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다. 어제보다 나은 사람이 되는 것이 목표입니다.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 pb-24 mx-auto'>
          <div className='flex flex-col text-center w-full my-20'>
            <h2 className='text-xs text-blue-500 tracking-widest font-medium title-font mb-1'>
              TechStack
            </h2>
            {/* FrontEnd */}
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              FrontEnd
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              주로 React를 사용하여 앱을 만듭니다. 유저 경험과 디자인에 민감하며
              유지보수성이 높은 코드를 작성하기 위해 노력합니다.
            </p>
          </div>
          <div className='flex flex-wrap'>
            <SkillDesc title='React'>
              생태계가 넓고, 다양한 라이브러리 사용한 React를 주로 사용합니다.
              <br />
              디자인 패턴 및 최적화에 관심이 많습니다.
            </SkillDesc>
            <SkillDesc title='Javascript, TypeScript'>
              ES6+ JavaScript 문법에 능숙하며, ECMAScript의 변화를 꾸준히 살피고
              학습합니다.
              <br />
              컴파일 단계에서 오류를 잡아주는 TypeScript 사용을 지향합니다.
            </SkillDesc>
            <SkillDesc title='Redux'>
              상태관리로는 단방향으로 데이터가 흘러 버그를 예측하기 쉬운 Redux를
              이용합니다. Redux-toolkit을 사용하여 과도한 코드량을 줄이는걸
              선호합니다.
            </SkillDesc>
            <SkillDesc title='tailwindCSS'>
              클래스명 하나로 style이 지정 가능하고 유연한 tailwind 사용을
              즐겨합니다.
            </SkillDesc>
            <SkillDesc title='PWA'>
              PWA를 이용한 웹앱 배포 경험이 있습니다.
            </SkillDesc>
          </div>
          {/* backend */}
          <div className='flex flex-col text-center w-full my-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              BackEnd
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              간단한 웹 서버 구축 및 서버리스 서비스 경험이 있습니다.
            </p>
          </div>
          <div className='flex flex-wrap'>
            <SkillDesc title='Firebase'>
              Firestore, Realtime Database를 사용해본 경험이 있습니다.
            </SkillDesc>
            <SkillDesc title='Flask'>
              Flask를 활용하여 간단한 웹 서버 구축 경험이 있습니다.
            </SkillDesc>
            <SkillDesc title='MongoDB'>
              MongoDB를 데이터베이스로 이용하고, Mongo Import를 통한 데이터 적재
              경험이 있습니다.
            </SkillDesc>
          </div>
          {/* etc */}
          <div className='flex flex-col text-center w-full my-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              .etc
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              코드 컨벤션(eslint, prettier) 및 커밋 컨벤션을 통한 협업, 타
              포지션(백엔드, 디자이너)과의 협업 경험이 있습니다.
              <br />
              커뮤니케이션에 늘 관심을 가지며, 회고를 통해 메타인지를 기르려
              노력합니다.
            </p>
          </div>
          <div className='flex flex-wrap'>
            <SkillDesc title='GIT'>
              GIT을 활용한 워크 플로우에 익숙합니다. Commit convention을 통한
              협업 경험이 있고, Merge Conflict 처리에 익숙합니다.
            </SkillDesc>
            <SkillDesc title='Github Actions'>
              Github Actions로 CI/CD를 구성하여 프론트 엔드 무중단 배포 경험이
              있습니다.
            </SkillDesc>
            <SkillDesc title='AWS'>
              AWS S3, AWS Cloudfront, AWS Route 53을 통한 프로젝트 배포 경험이
              있습니다.
            </SkillDesc>
            <SkillDesc title='VSCODE'>
              주로 vscode를 통해 작업을 진행합니다.
            </SkillDesc>
            <SkillDesc title='Figma'>
              Figma를 이용한 프로젝트 와이어 프레임 제작 경험이 있습니다.
            </SkillDesc>
            <SkillDesc title='Slack'>
              슬랙을 이용한 소통 경험이 있습니다.
            </SkillDesc>
            <SkillDesc title='Notion'>
              노션을 통한 문서 정리를 좋아하며, 노션 API를 사용하여 Database를
              구성해본 경험이 있습니다.
            </SkillDesc>
          </div>
        </div>
      </section>
      <div className='flex justify-center mb-20'>
        <Link href='/projects'>
          <a className='btn-project'>프로젝트 보러가기</a>
        </Link>
      </div>
    </Layout>
  );
}
