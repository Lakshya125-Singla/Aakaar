import Image from "next/image";
import Trust from "./Component/Trust";
import White from "./Component/White";
import Science from "./Component/Science"; 
import Unseen from "./Component/Unseen";
import Systems from './Components/Systems';
import Uncompromise from './Components/Uncompromise';
import Clinical from './Components/Clinical';


export default function Home() {
  return (
   <>
   <Systems/>
   <Uncompromise/>
   <Clinical/>
   <Science/>
    <Unseen/>
   <White/>
   <Trust/>   

   </>
  );
}
