import { useEffect, useState } from 'react';

const FRONTEND = 'FRONTEND';
const init = Array.from({ length: 8 }, () => 'spin-string');

export default function Index() {
  const [animates, setAnimates] = useState<string[]>(init);

  useEffect(() => {
    setAnimates(
      FRONTEND.split('').map(() => `spin-string str-${Math.floor(Math.random() * 8) + 1}`)
    );
  }, []);

  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col">
      <div className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center">
        <h1 className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl">
          {FRONTEND.split('').map((str, idx) => (
            <span className={animates[idx]} key={idx}>
              {str}
            </span>
          ))}{' '}
          개발자 한영주 입니다.
        </h1>
        <p className="text-lg md:text-xl">
          가독성이 좋고 관리가 쉬운 코드를 작성하는데 관심이 많습니다.
        </p>
      </div>

      {/* <div className="mx-[1em] my-0 text-center">
        <div>
          <picture className="block min-h-[250px]">
            <source srcSet="/assets/images/author.jpg" media="(min-width: 600px)" />
            <img
              className="mb-[1em] w-full max-w-[550px] max-w-lg:max-w-[400px]"
              alt="Illustration of person reading a book"
              src="/assets/images/author.jpg"
              width="550"
              height="466"
            />
          </picture>
        </div>
      </div> */}
    </div>
  );
}
