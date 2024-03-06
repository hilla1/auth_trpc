import AlertBox from "@/components/AlertBox";
import ModalBox from "@/components/ModalBox";
import Navbar from "@/components/Navbar";
import WidthWrapper from "@/components/WidthWrapper";

export default function Home() {
  return (
<div className='bg-[url("../assets/Bg.png")] w-full h-screen bg-cover bg-center opacity-100'>
   <WidthWrapper>
     <Navbar />
      <div className='mx-2 xl:mx-0 mt-2'>Hello World</div>
   </WidthWrapper>
</div>
  )
}
