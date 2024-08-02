'use client';

import { AlignJustify, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const data: {
  firstName: string;
  secondName: string;
  image: string;
  firstColor: string;
  secondColor: string;
}[] = [
  {
    firstName: 'Himalayan',
    secondName: 'Pink',
    image: '/images/pink.webp',
    firstColor: '#FFE3E0',
    secondColor: '#FCBBB9',
  },
  {
    firstName: 'Granite',
    secondName: 'White',
    image: '/images/white.webp',
    firstColor: '#ffffff',
    secondColor: '#D6DBD4',
  },
  {
    firstName: 'Monaco',
    secondName: 'Blue',
    image: '/images/blue.webp',
    firstColor: '#607C8E',
    secondColor: '#13264D',
  },
  {
    firstName: 'Stone',
    secondName: 'Black',
    image: '/images/black.webp',
    firstColor: '#3C4142',
    secondColor: '#141A1F',
  },
];

export default function Home() {
  const [indexActive, setIndexActive] = useState<number>(0);
  const [isDetail, setIsDetail] = useState<boolean>(false);

  const handleIncrease = () => {
    if (indexActive < data.length - 1) {
      setIndexActive((prev) => prev + 1);
    }

    if (indexActive === data.length - 1) {
      setIndexActive(0);
    }
  };

  const handleDecrease = () => {
    if (indexActive > 0) {
      setIndexActive((prev) => prev - 1);
    }

    if (indexActive === 0) {
      setIndexActive(data.length - 1);
    }
  };

  return (
    <main
      className="w-full min-h-screen relative overflow-hidden duration-500"
      style={{ backgroundColor: data[indexActive].firstColor }}
    >
      <nav className="w-full flex justify-between fixed z-50 top-0 h-[100px] items-center px-10">
        <p
          className="text-2xl font-gruppo font-semibold duration-300"
          style={{ color: data[indexActive].secondColor }}
        >
          LARQ
        </p>
        <AlignJustify
          className="duration-300"
          style={{ color: data[indexActive].firstColor }}
        />
      </nav>

      <div
        className={`min-h-screen flex  absolute items-center right-0 ease-linear transition-all ${
          isDetail
            ? 'aspect-square rounded-l-[600px] z-10 justify-start translate-x-1/2 duration-700'
            : 'w-1/2 duration-500 justify-center'
        }`}
        style={{ backgroundColor: data[indexActive].secondColor }}
      ></div>

      <div
        className={`w-full flex absolute inset-0 duration-500 delay-200 z-20 ${
          isDetail ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-1/2 min-h-screen flex justify-center items-center">
          {data.map((item, index) => (
            <p
              className={`text-[100px] font-bold font-inter absolute ease-in-out transition-all ${
                index === indexActive
                  ? 'opacity-100 delay-200 duration-300'
                  : 'opacity-0 translate-x-[200px] duration-300'
              }`}
              key={index}
              style={{ color: item.secondColor }}
            >
              {item.firstName}
            </p>
          ))}
        </div>
        <div className="w-1/2 min-h-screen flex justify-center items-center transition-all">
          {data.map((item, index) => (
            <p
              className={`text-[100px] font-bold font-inter absolute ease-in-out transition-all ${
                index === indexActive
                  ? 'opacity-100 delay-200 duration-300'
                  : 'opacity-0 -translate-x-[200px] duration-300'
              }`}
              key={index}
              style={{ color: item.firstColor }}
            >
              {item.secondName}
            </p>
          ))}
        </div>
      </div>

      <div className="w-full h-screen absolute z-20 flex justify-center items-center">
        <Image
          src={data[indexActive].image}
          alt={data[indexActive].secondName}
          className={`w-[1200px] h-auto object-cover object-center aspect-auto ease-linear transition-all -translate-y-[5%] ${
            isDetail ? '-translate-x-[60%] duration-700' : 'duration-500'
          }`}
          priority
          width={1200}
          height={1200}
          quality={100}
        />
      </div>

      <div className="absolute bottom-8 left-10 flex gap-3 z-30">
        <button
          type="button"
          className={`w-10 h-10 rounded-full flex justify-center items-center absolute duration-300 ease-linear transition-all ${
            isDetail ? 'opacity-100 z-30' : 'opacity-0 -z-10'
          }`}
          onClick={() => setIsDetail(false)}
          style={{ backgroundColor: data[indexActive].secondColor }}
        >
          <ChevronLeft style={{ color: data[indexActive].firstColor }} />
        </button>

        <button
          type="button"
          className={`w-10 h-10 rounded-full flex justify-center items-center relative duration-300 ease-linear transition-all ${
            isDetail ? 'opacity-0 -z-10' : 'opacity-100 z-30'
          }`}
          onClick={() => handleDecrease()}
          style={{ backgroundColor: data[indexActive].secondColor }}
        >
          <ChevronLeft
            className="duration-300"
            style={{ color: data[indexActive].firstColor }}
          />
        </button>
        <button
          type="button"
          className={`w-10 h-10 rounded-full flex justify-center items-center relative duration-300 ease-linear transition-all ${
            isDetail ? 'opacity-0 -z-10' : 'opacity-100 z-30'
          }`}
          onClick={() => handleIncrease()}
          style={{ backgroundColor: data[indexActive].secondColor }}
        >
          <ChevronRight
            className="duration-300"
            style={{ color: data[indexActive].firstColor }}
          />
        </button>
      </div>

      <div
        className={`absolute bottom-8 right-10  ${
          isDetail ? 'opacity-0 -z-10' : 'opacity-100 z-30'
        }`}
      >
        <button
          className="w-[120px] h-[40px] rounded-full font-semibold flex justify-center items-center shadow-custom border-b border-r border-solid border-white/30 duration-500 ease-linear transition-all"
          style={{
            backgroundColor: data[indexActive].secondColor,
            color: data[indexActive].firstColor,
          }}
          onClick={() => setIsDetail(true)}
        >
          Buy
        </button>
      </div>

      <div
        className={`absolute right-[20px] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 duration-500 ease-linear transition-all ${
          isDetail ? 'opacity-100 delay-300' : 'opacity-0'
        }`}
      >
        <button
          className="w-[200px] h-[65px] text-2xl rounded-full font-semibold  flex justify-center items-center shadow-custom border-b border-r border-solid border-white/30 duration-500 ease-linear transition-all"
          style={{
            backgroundColor: data[indexActive].secondColor,
            color: data[indexActive].firstColor,
          }}
          onClick={() => setIsDetail(true)}
        >
          Buy
        </button>
      </div>

      <div
        className={`w-[900px] absolute left-[47%] -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 duration-500 ease-linear transition-all ${
          isDetail ? 'opacity-100 delay-700' : 'opacity-0'
        }`}
      >
        <h1 className="w-full text-center text-gray-500 text-3xl font-semibold">
          LARQ Bottle PureVis
        </h1>
        <h2 className="text-[90px] text-gray-500 font-bold">
          {data[indexActive].firstName} {data[indexActive].secondName}
        </h2>
      </div>
    </main>
  );
}
