import React from "react";
import Image from "next/image";
import Header from '@/app/components/Header';

function Home() {
  return (
    <div className="body">
      <Header />
      <div className="container columns-2 flex flex-col lg:flex-row">
        <div className="w-[496px] flex flex-col justify-center items-start m-12">
          <h1 className="text-[40px] w-[496px] justify-center text-bold ml-16">
            <b>IMPACCABLE CRAFTMANSHIP AND FINESSE</b>
          </h1>
          <p className="text-[30px] w-[902px] justify-center flex h-[147px]">
            An example of intricate workmanship and detail, elegant
            <br /> necklaces and long and short chains form a part of our
            <br /> desirable collection.
          </p>
        </div>
        <div className="image flex justify-center items-center lg:order-last">
          <Image 
            src="/figma.jpg"
            alt="figma"
            width={350}
            height={550}
            className="max-w-full h-auto mr-4 ml-4"
          />
        </div>
        <div className="flex justify-center mt-4 lg:mt-0 lg:ml-4">
          <button className="button">Explore New</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
