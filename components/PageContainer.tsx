import React from 'react';

const SectionContentContainer = ({
  children,
  className,
  flexGrow,
}: {
  children?: any;
  className?: string;
  flexGrow?: boolean;
}) => {
  return (
    <section
      className={`w-full ${className ?? ''} flex flex-col ${
        flexGrow ? 'flex-grow' : 'h-full'
      }`}
    >
      <div className='flex justify-center w-full mx-auto flex-grow'>
        <div className={`w-full max-w-screen-xl mx-4 flex-grow`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContentContainer;
