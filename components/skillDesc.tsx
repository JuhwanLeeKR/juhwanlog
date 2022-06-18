import { useTheme } from 'next-themes';
import { useEffect } from 'react';

interface SkillDescProp {
  children: React.ReactNode;
  title: string;
}

export default function SkillDesc(props: SkillDescProp) {
  const { theme } = useTheme();

  return (
    <>
      <div className='xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60'>
        <h2 className='text-lg sm:text-xl text-gray-900 font-medium title-font mb-2'>
          {theme !== 'dark' ? '✅' : '☑️'} {props.title}
        </h2>
        <p className='leading-relaxed text-base mb-4'>{props.children}</p>
      </div>
    </>
  );
}
