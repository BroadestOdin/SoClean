import React from 'react';
import ReactDOM from 'react-dom/client';
import pictures1 from './Pictures/cars2.jpeg';
import pictures2 from './Pictures/image00032.jpeg';
import pictures3 from './Pictures/image00031.jpeg';
import pictures4 from './Pictures/image00019.jpeg';
import pictures5 from './Pictures/image00050.jpeg';
import pictures6 from './Pictures/image00058.jpeg';
export default function Gallery()
{
    return(
        <section class="overflow-hidden text-gray-700 gallery-feature">
          <h2 class="text-4xl font-bold">Quelques réalisations</h2>
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2 animate__animated animate__fadeInUpBig">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={pictures1}/>
        </div>
        <div class="w-1/2 p-1 md:p-2 animate__animated animate__backInUp animate__delay-1s">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={pictures6}/>
        </div>
        <div class="w-full p-1 md:p-2 animate__animated animate__fadeInUpBig animate__delay-1s">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={pictures2}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2 animate__animated animate__fadeInUpBig animate__delay-2s">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={pictures3}/>
        </div>
        <div class="w-1/2 p-1 md:p-2 animate__animated animate__backInUp animate__delay-3s">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={pictures4}/>
        </div>
        <div class="w-1/2 p-1 md:p-2 animate__animated animate__fadeInUpBig animate__delay-3s">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={pictures5}/>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}