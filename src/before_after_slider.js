import ReactCompareImage from "react-compare-image";
import before from './Pictures/before_car.jpeg';
import after from './Pictures/after_car.jpeg';
import before2 from './Pictures/image00012.jpeg';
import after2 from './Pictures/image00013.jpeg';

export default function BeforeAfterSlider()
{
   return(
    <div id = "magic">
    <h2 class="text-3xl font-bold mb-10 mt-10 text-center">Un apercu de la magie que SoClean Esthétique</h2>
    <small></small>
    <div class = "container">
    <ReactCompareImage leftImage={before} rightImage={after} />
    <ReactCompareImage leftImage={before2} rightImage={after2} />
   </div>
    </div>
   )

}