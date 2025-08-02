// // src/components/about/AboutIntro.tsx

// export default function AboutIntro() {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat py-24 px-6 text-center"
//       style={{ backgroundImage: "url('/images/background.png')" }}
//     >
//       {/* Overlay for text readability */}
//       <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm" />

//       <div className="relative max-w-5xl mx-auto z-10">
//         <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//           Who We Are
//         </h2>

//         <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//           Pioneering Neuroscience with <br />
//           <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text">
//             Nanotechnology & AI
//           </span>
//         </h1>

//         <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
//           Nanoroutes is a forward-thinking healthtech startup focused on diagnosing and treating
//           neurological disorders—especially neuropathic pain—using precision nanotechnology and
//           artificial intelligence.
//         </p>

//         {/* Optional CTA */}
//         <div className="mt-6">
//           <a
//             href="#contact"
//             className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition duration-300"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }













// import Image from "next/image";

// export default function AboutIntro() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/background.png')",
//       }}
//     >
//       {/* Soft overlay */}
//       <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm z-0" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-16">
//         {/* Left: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Who We Are
//           </h2>

//           <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Pioneering Neuroscience with <br />
//             <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text">
//               Nanotechnology & AI
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
//             Nanoroutes is a forward-thinking healthtech startup focused on diagnosing and treating
//             neurological disorders—especially neuropathic pain—using precision nanotechnology and
//             artificial intelligence.
//           </p>

//           <div className="mt-6">
//             <a
//               href="#contact"
//               className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition duration-300"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </div>

//         {/* Right: AI Image */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md animate-fadeInUp">
//             <Image
//               src="/images/ai.png"
//               alt="AI Illustration"
//               width={500}
//               height={500}
//               className="w-full h-auto object-contain rounded-xl shadow-lg"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















import Image from "next/image";

export default function AboutIntro() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
            Who We Are
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Pioneering Neuroscience with <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text">
              Nanotechnology & AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Nanoroutes is a forward-thinking healthtech startup focused on diagnosing and treating
            neurological disorders—especially neuropathic pain—using precision nanotechnology and
            artificial intelligence.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: AI Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md animate-fadeInUp">
            <Image
              src="/images/ai.png"
              alt="AI Illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
