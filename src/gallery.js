import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Gallery()
{
    return(
        <section class="overflow-hidden text-gray-700 gallery-feature">
          <h2 class="text-4xl font-bold">Quelques réalisations de notre équipe</h2>
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://w0.peakpx.com/wallpaper/568/240/HD-wallpaper-evo-x-black-evolution-evox-mitsubishi-evo.jpg"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://i.pinimg.com/originals/59/de/b5/59deb573d47a530d421a6d1a934660ce.jpg"/>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://c4.wallpaperflare.com/wallpaper/171/214/435/audi-blue-audi-rs5-rims-wallpaper-preview.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://wallpapercave.com/dwp1x/wp4876751.jpg"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://besthqwallpapers.com/Uploads/7-3-2021/159864/thumb2-2020-gmc-sierra-1500-front-view-exterior-new-black-sierra-1500.jpg"/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src="https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"/>
        </div>
      </div>
    </div>
  </div>
</section>

    );
}