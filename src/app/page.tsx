// // src/app/page.tsx

// import Image from "next/image";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-[#f6f3ee] text-black font-sans">
//       <section className="flex flex-col items-center justify-center text-center py-24 px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           GOODBYE GUESS WORK <br /> HELLO NANOTECH
//         </h1>

//         <p className="text-lg md:text-xl max-w-2xl mb-10">
//           Revolutionizing the future of Neuroscience with precision Nanotechnology and AI
//         </p>

//         <div className="flex gap-6 mt-6 flex-wrap justify-center">
//           <IllustrationOne />
//           <IllustrationTwo />
//           <IllustrationThree />
//         </div>
//       </section>
//     </main>
//   );
// }

// function IllustrationOne() {
//   return (
//     <div className="w-40 h-40 border border-black p-4 flex items-center justify-center">
//       <span className="text-sm">Brain Circuitry</span>
//     </div>
//   );
// }

// function IllustrationTwo() {
//   return (
//     <div className="w-40 h-40 border border-black p-4 flex items-center justify-center">
//       <span className="text-sm">Nano Diagnosis</span>
//     </div>
//   );
// }

// function IllustrationThree() {
//   return (
//     <div className="w-40 h-40 border border-black p-4 flex items-center justify-center">
//       <span className="text-sm">AI Therapy</span>
//     </div>
//   );
// }












// // src/app/page.tsx

// import HeroSection from "./components/HeroSection"; // works, but not clean






// export default function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//     </main>
//   );
// }

















// // src/app/page.tsx

// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <HeroSection />
      
//         {/* Add more sections here as needed */}
//       </main>
//     </>
//   );
// }













// src/app/page.tsx

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutIntro from "./components/about/AboutIntro";
// import MissionVision from "./components/about/MissionVision";
// import HowWeWork from "./components/about/HowWeWork";
// import TimelineSection from "./components/about/TimelineSection";
// You can continue importing other sections as you build them

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* === ABOUT SECTIONS === */}
        <AboutIntro />
        {/* <MissionVision /> */}
        {/* <HowWeWork />
        <TimelineSection /> */}

        {/* === FUTURE SECTIONS === */}
        {/* <ServicesSection /> */}
        {/* <ContactForm /> */}
        {/* <FAQSection /> */}
        {/* etc. */}
      </main>
    </>
  );
}
