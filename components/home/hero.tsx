import Animation from './animation';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0'>
        <h1 className='mb-4 text-3xl font-medium text-gray-900 title-font lg:text-4xl'>
          안녕하세요
          <br />
          프론트엔드 개발자
          <br className='' />
          <br className='hidden lg:inline-block' />
          이주환입니다
        </h1>
        <p className='mb-8 leading-relaxed'>
          시각디자인을 전공하여 유저 경험과 디자인에 민감합니다.
          <br />
          새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다.
          <br />
          커뮤니케이션의 중요성을 믿습니다.
          <br />
          어제보다 나은 사람이 되는 것을 목표로 하고 끊임없이 공부합니다.
        </p>
        <div className='flex justify-center'>
          <Link href='/projects'>
            <div className='btn-project'>프로젝트 보러가기</div>
          </Link>
        </div>
      </div>
      <div className='w-5/6 lg:max-w-lg lg:w-full md:w-1/2'>
        <Animation />
      </div>
    </>
  );
};

export default Hero;
