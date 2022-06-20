import Image from 'next/image';

const ProjectItem = ({ data }: any) => {
  const title = data.properties.Name.title[0].plain_text;
  const emojiTitle = data.icon?.emoji;
  const summary = data.properties.Summary.rich_text[0].plain_text;
  const githubLink = data.properties.Github.url;
  const youtubeLink = data.properties.Youtube.url;
  const blogLink = data.properties.Blog.url;
  const imgSrc = data.cover.file.url;
  const techStacks = data.properties.TechStack.multi_select;
  const startDateString = data.properties.WorkPeriod.date.start;
  const endDateString = data.properties.WorkPeriod.date.end;
  const people = data.properties.People.rich_text[0].plain_text;
  const role = data.properties.Role.rich_text[0]?.plain_text;
  const implementation =
    data.properties.Implementation.rich_text[0]?.plain_text;

  const calculatedPeriod = (start: string, end: string) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    const startDate = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]),
      Number(startDateStringArray[2])
    ).valueOf();
    const endDate = new Date(
      Number(endDateStringArray[0]),
      Number(endDateStringArray[1]),
      Number(endDateStringArray[2])
    ).valueOf();

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result + 1;
  };
  return (
    <div className='project-card'>
      <div>
        <Image
          className='rounded-t-xl'
          src={imgSrc}
          width={100}
          height={60}
          layout='responsive'
          objectFit='cover'
          quality={90}
          alt={title}
          priority={true}
        />
      </div>
      <div className='p-4 flex flex-col w-full'>
        <h1 className='text-2xl font-bold'>{`${
          emojiTitle ? emojiTitle : ''
        } ${title}`}</h1>
        <h3 className='mt-2 text-xl'>{summary}</h3>
        {people !== '혼자' ? (
          <span className='text-sm mt-2 text-zinc-500'>팀: {people}</span>
        ) : (
          <span className='text-sm mt-2 text-zinc-500'>1인 프로젝트</span>
        )}

        {role ? <p className='dark:text-zinc-300'>Role: {role}</p> : null}
        {implementation ? (
          <div className='bg-slate-100 text-sm mt-2 pt-1 pb-2 px-3 rounded-xl dark:bg-zinc-900'>
            <p className=''>
              ✨ 작업 부분 <br />
              {implementation}
            </p>
          </div>
        ) : null}
        <div className='mt-2 flex flex-col'>
          {githubLink ? (
            <a href={githubLink} rel='noopener noreferrer' target='_blank'>
              🔗 깃허브 바로가기
            </a>
          ) : null}
          {youtubeLink ? (
            <a href={youtubeLink} rel='noopener noreferrer' target='_blank'>
              🔗 시연영상 보러가기
            </a>
          ) : null}

          {blogLink ? (
            <a href={blogLink} rel='noopener noreferrer' target='_blank'>
              🔗 회고록 보러가기
            </a>
          ) : null}
        </div>
        <h3 className='mt-2 text-lg'>
          기간 : {startDateString} ~ {endDateString} (
          {calculatedPeriod(startDateString, endDateString)}일)
        </h3>

        <div className='flex flex-wrap items-start mt-2'>
          {techStacks.map((aTag: any) => (
            <h1
              className='px-2 py-1 mr-2 mt-2 rounded-md bg--100 bg-sky-100 dark:bg-sky-900 w-30'
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
