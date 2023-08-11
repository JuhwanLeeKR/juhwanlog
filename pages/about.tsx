import Image from 'next/image';
import Layout from '../components/layout';
import profile from '../public/leejuhwan.jpg';
import Head from 'next/head';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <Layout>
      <Head>
        <title>이주환 포트폴리오 | 자기소개</title>
        <meta
          name='description'
          content='유저 경험과 디자인에 민감한 프론트엔드 개발자 이주환입니다. 새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다. 어제보다 나은 사람이 되는 것이 목표입니다.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font'>
        <div className='container flex flex-col items-center justify-center px-5 py-24 mx-auto'>
          {/* <img className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6" alt="hero" src="https://dummyimage.com/720x600"> */}
          <div className='object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6'>
            <Image src={profile} alt='이주환' layout='responsive' />
          </div>
          <div className='w-full text-center lg:w-2/3'>
            <h1 className='mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl'>
              안녕하세요 개발자 이주환입니다
            </h1>
            <p className='mb-20 leading-relaxed'>
              유저 경험과 디자인에 민감하고 새로운 기술과 트렌드를 익히고
              도전하는 것을 좋아합니다. 커뮤니케이션의 중요성을 믿고, 어제보다
              나은 사람이 되는 것을 목표로 하고 끊임없이 공부합니다.
            </p>
            <h3 className='text-2xl font-bold text-left'>
              도전적인 정신을 가진 개발자
            </h3>
            <p className='mt-4 mb-8 leading-relaxed text-left'>
              새로운 것에 거부감이 없고 끊임없이 탐구하는 제 장점은 급변하는
              프론트엔드 기술 분야에서 빛을 발했습니다. 꾸준히 배우고
              사용해본다는 것은 중요하다 생각하고, 더 나은 방법이 있지 않을까
              항상 고민합니다.
            </p>
            <h3 className='text-2xl font-bold text-left'>
              디자인과 출신 프론트엔드 개발자
            </h3>
            <p className='mt-4 mb-8 leading-relaxed text-left'>
              디자이너가 만든 디자인안을 그대로 퍼블리싱하는 것 또한 프론트 엔드
              개발자의 주요 덕목이라고 생각합니다. 프로젝트에서도 1px의 오차에
              집중하여, 디자이너 분들이 만드신 시안을 그대로 product에
              옮겨내었습니다.
            </p>
            <h3 className='text-2xl font-bold text-left'>
              어떤 개발자가 되고 싶은가요?
            </h3>
            <p className='mt-4 mb-20 leading-relaxed text-left'>
              세상과 소통하는 개발자가 되고 싶습니다. 프론트엔드 개발자의 주요
              덕목 중 하나는 ‘소통’이라고 생각합니다. 디자이너와 백엔드 개발자의
              서로 다른 포지션에서 트러블이 발생할 수 있습니다. 이 점을
              프론트엔드 개발자가 중간에서 해소해주는 역할을 해야한다고
              생각합니다. 더 나아가 세상에서 나오는 불만이라는 피드백을 취합하여
              반영할 수 있는 개발자가 되고 싶습니다.
            </p>
          </div>
          <div className='flex justify-center gap-4'>
            <Link href='/skills'>
              <div className='btn-project'>
                기술스택
                <br className='inline-block md:hidden' />
                보러가기
              </div>
            </Link>
            <Link href='/projects'>
              <div className='btn-project'>
                프로젝트
                <br className='inline-block md:hidden' />
                보러가기
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutMe;
