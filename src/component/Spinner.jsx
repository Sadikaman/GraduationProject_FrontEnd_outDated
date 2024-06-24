import React from 'react';

const Spinner = () => {
  return (
    <div className="inline-block relative w-20 h-20">
      <div className="box-border absolute w-16 h-16 m-2 border-4 border-current border-l-current border-r-transparent border-t-transparent border-b-transparent rounded-full animate-spin delay-[0s]"></div>
      <div className="box-border absolute w-16 h-16 m-2 border-4 border-current border-l-current border-r-transparent border-t-transparent border-b-transparent rounded-full animate-spin delay-[-0.3s]"></div>
      <div className="box-border absolute w-16 h-16 m-2 border-4 border-current border-l-current border-r-transparent border-t-transparent border-b-transparent rounded-full animate-spin delay-[-0.6s]"></div>
      <div className="box-border absolute w-16 h-16 m-2 border-4 border-current border-l-current border-r-transparent border-t-transparent border-b-transparent rounded-full animate-spin delay-[-0.9s]"></div>
    </div>
  );
};

export default Spinner;
