import Image from 'next/image';

export default function ProjectItem({ data }: any) {
  const title = data.properties.Name.title[0].plain_text;
  const summary = data.properties.Summary.rich_text[0].plain_text;
  const githubLink = data.properties.Github.url;
  const youtubeLink = data.properties.Youtube.url;
  const imgSrc = data.cover.file.url;
  const techStacks = data.properties.TechStack.multi_select;
  const startDateString = data.properties.WorkPeriod.date.start;
  const endDateString = data.properties.WorkPeriod.date.end;

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
      <Image
        className='rounded-t-xl'
        src={imgSrc}
        width='100%'
        height='60%'
        layout='responsive'
        objectFit='cover'
        quality={100}
        alt={title}
      />
      <div className='p-4 flex flex-col w-full'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='mt-2 text-xl'>{summary}</h3>
        {githubLink ? (
          <a href={githubLink} rel='noopener noreferrer' target='_blank'>
            깃허브 바로가기
          </a>
        ) : null}
        <a href={youtubeLink} rel='noopener noreferrer' target='_blank'>
          시연영상 보러가기
        </a>
        <h3 className='my-1 text-xl'>
          작업기간 : {startDateString} ~ {endDateString} (
          {calculatedPeriod(startDateString, endDateString)}일)
        </h3>

        <div className='flex items-start mt-2'>
          {techStacks.map((aTag: any) => (
            <h1
              className='px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30'
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
