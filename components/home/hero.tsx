import Animation from './animation';

export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          안녕하세요 프론트엔드 개발자
          <br />
          <br className='hidden lg:inline-block' />
          이주환입니다
        </h1>
        <p className='mb-8 leading-relaxed'>
          시각디자인과를 전공하여 유저 경험과 디자인에 민감합니다.
          <br />
          새로운 기술과 트렌드를 익히고 도전하는 것을 좋아합니다.
          <br />
          커뮤니케이션의 중요성을 믿습니다.
          <br />
          어제보다 나은 사람이 되는 것을 목표로 하고 끊임없이 공부합니다.
        </p>
        <div className='flex justify-center'>
          <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Animation />
      </div>
    </>
  );
}
