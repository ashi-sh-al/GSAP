import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.to(gsapRef.current ,{
      x:1000,
      duration:5,
      delay:0.5,
      yoyo:true,
      repeat:-1,

    })
  });

  // useGSAP(() => {
  //   gsap.to(".box",{
  //     x:500,
  //     duration:2,
  //     delay:0.5,
  //     yoyo:true,
  //     repeat:-1,

  //   })
  // })

  return (
    <div className="h-screen w-full bg-black text-white p-10">
      <div
        ref={gsapRef}
        className="box h-[20vh] w-[20vh] bg-red-800 rounded-xl"
      ></div>
    </div>
  );
};

export default App;
