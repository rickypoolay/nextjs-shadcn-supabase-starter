import SectionContentContainer from '@/components/PageContainer';
import { Button } from '@/components/ui/button';
import { LucideAArrowUp } from 'lucide-react';

export default async function Index() {
  return (
    <>
      <SectionContentContainer className='text-center md:text-left'>
        <div className='mt-4 md:mt-14'>
          <h1 className='text-5xl md:w-3/4 md:text-7xl'>
            Hello World,
            <br /> welcome to the home page.
          </h1>

          <p className='mt-5 md:w-3/4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            repudiandae reprehenderit, omnis earum exercitationem eius doloribus
            beatae laboriosam? Modi, sequi?
          </p>

          <div className='flex gap-5 mt-10 items-center mx-auto justify-center md:justify-start'>
            <Button variant={'secondary'} size={'lg'}>
              This
            </Button>
            <Button size={'lg'}>That</Button>
          </div>
        </div>
      </SectionContentContainer>
      <SectionContentContainer
        className={
          'bg-[#131313] dark:bg-[#0f0f35] rounded-sm mt-52 h-[500px] py-20 text-center md:text-left'
        }
      >
        <h2 className='text-4xl md:text-6xl'>
          This is sick <LucideAArrowUp size={20} />
        </h2>
      </SectionContentContainer>
    </>
  );
}
