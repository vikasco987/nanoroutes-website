// // src/components/HeroSection.tsx

// export default function HeroSection() {
//   return (
//     <section className="bg-[#f6f3ee] min-h-screen flex items-center">
//       <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 py-20">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-black">
//           <h2 className="text-sm tracking-widest uppercase font-medium mb-2">Tagline</h2>
//           <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
//             GOODBYE GUESS WORK<br />
//             HELLO NANOTECH
//           </h1>
//           <p className="text-lg text-gray-700 font-sans leading-relaxed mb-6 max-w-xl">
//             Revolutionizing the future of Neuroscience with precision Nanotechnology and AI.
//           </p>
//           <div className="mt-6">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
//               Explore More
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 relative">
//           <img
//             src="/hero-doctor.png"
//             alt="Doctor illustration"
//             className="w-full max-w-md mx-auto drop-shadow-xl"
//           />

//           {/* Optional thin line illustration */}
//           <div className="absolute -top-8 -right-8 w-24 h-24 border border-black rounded-full opacity-20"></div>
//         </div>
//       </div>
//     </section>
//   );
// }














// // src/components/HeroSection.tsx

// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-[#f6f3ee] min-h-screen flex items-center overflow-hidden">
//       {/* Decorative Background Elements */}
//       <Image
//         src="/images/healthcare1.png"
//         alt="Dots"
//         width={100}
//         height={100}
//         className="absolute top-12 left-12 z-0 opacity-40"
//       />
//       <Image
//         src="/images/healthcare2.png"
//         alt="Circle"
//         width={140}
//         height={140}
//         className="absolute bottom-12 right-12 z-0 opacity-40"
//       />

//       <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 py-20 relative z-10">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-black">
//           <h2 className="text-sm tracking-widest uppercase font-medium mb-2">
//             Tagline
//           </h2>
//           <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
//             GOODBYE GUESS WORK
//             <br />
//             HELLO NANOTECH
//           </h1>
//           <p className="text-lg text-gray-700 font-sans leading-relaxed mb-6 max-w-xl">
//             Revolutionizing the future of Neuroscience with precision
//             Nanotechnology and AI.
//           </p>
//           <div className="mt-6">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
//               Explore More
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 relative">
//           <Image
//             src="/images/healthcare1.png"
//             alt="Brain Illustration"
//             width={400}
//             height={400}
//             className="mx-auto drop-shadow-2xl"
//           />

//           {/* Optional Thin Line Illustration */}
//           <div className="absolute -top-8 -right-8 w-24 h-24 border border-black rounded-full opacity-20"></div>
//         </div>
//       </div>
//     </section>
//   );
// }










// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-[#f6f3ee] min-h-screen flex items-center overflow-hidden">
//       {/* Decorative Background Elements */}
//       <Image
//         src="/images/shape-dots.svg"
//         alt="Dots Background"
//         width={120}
//         height={120}
//         className="absolute top-8 left-8 opacity-30 z-0 animate-pulse"
//       />
//       <Image
//         src="/images/shape-circle.svg"
//         alt="Circle Background"
//         width={160}
//         height={160}
//         className="absolute bottom-8 right-8 opacity-20 z-0 animate-spin-slow"
//       />

//       {/* Main Content */}
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24 relative z-10">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-black">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex gap-4 mt-4">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right Content (Image) */}
//         <div className="md:w-1/2 relative flex justify-center items-center">
//           <div className="relative w-full max-w-md">
//             <Image
//               src="/images/hero-brain.svg"
//               alt="Hero Brain"
//               width={500}
//               height={500}
//               className="w-full drop-shadow-xl animate-fadeIn"
//               priority
//             />
//             {/* Decorative Shapes */}
//             <div className="absolute -top-8 -left-8 w-20 h-20 border-2 border-dashed border-purple-400 rounded-full opacity-40 animate-ping" />
//             <div className="absolute -bottom-10 -right-6 w-16 h-16 bg-pink-300 rounded-full opacity-30 blur-sm" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





















// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-[#f6f3ee] min-h-screen flex items-center overflow-hidden">
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24">
//         {/* Left Content */}
//         <div className="md:w-1/2 text-black">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex gap-4 mt-4">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md">
//             <Image
//               src="/images/healthcare1.png" // Replace with your actual doctor image path
//               alt="Doctor Hero Image"
//               width={500}
//               height={600}
//               className="w-full h-auto object-contain animate-fadeIn"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-gradient-to-br from-[#fefcfb] to-[#f6f3ee] min-h-screen flex items-center overflow-hidden">
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16 py-24">
        
//         {/* Left Side - Doctor Image */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md md:max-w-lg">
//             <Image
//               src="/images/healthcare1.png" // your uploaded doctor image
//               alt="Doctor Hero Image"
//               width={500}
//               height={600}
//               className="w-full h-auto object-contain animate-fadeIn"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="md:w-1/2 text-black text-center md:text-left">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6 mx-auto md:mx-0" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center overflow-hidden bg-[#f6f3ee]"
//       style={{
//         backgroundImage: "url('/images/background.png')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Optional white overlay for better text contrast */}
//       <div className="absolute inset-0 bg-white bg-opacity-60 pointer-events-none z-0" />

//       <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16 py-24 z-10">
        
//         {/* Left Side - Doctor Image */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md md:max-w-lg">
//             <Image
//               src="/images/healthcare1.png"
//               alt="Doctor Hero Image"
//               width={500}
//               height={600}
//               className="w-full h-auto object-contain animate-fadeIn"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="md:w-1/2 text-black text-center md:text-left">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6 mx-auto md:mx-0" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/background.png')",
//       }}
//     >
//       {/* Matching overlay */}
//       <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm z-0" />

//       <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-16 py-24 z-10">
        
//         {/* Left Side - Doctor Image */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md md:max-w-lg">
//             <Image
//               src="/images/healthcare1.png"
//               alt="Doctor Hero Image"
//               width={500}
//               height={600}
//               className="w-full h-auto object-contain animate-fadeIn"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="md:w-1/2 text-black text-center md:text-left">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6 mx-auto md:mx-0" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/background.png')",
//       }}
//     >
//       {/* Matching soft overlay */}
//       <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm z-0" />

//       <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24 z-10">
        
//         {/* Left Side - Image (styled like About section) */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md md:max-w-lg rounded-xl overflow-hidden shadow-lg">
//             {/* Soft overlay on image */}
//             <div className="absolute inset-0 bg-[#f6f3ee] opacity-70 mix-blend-lighten z-10 pointer-events-none rounded-xl" />
//             <Image
//               src="/images/healthcare1.png"
//               alt="Doctor Hero Image"
//               width={500}
//               height={600}
//               className="w-full h-auto object-contain relative z-0 rounded-xl brightness-105 saturate-50"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="md:w-1/2 text-black text-center md:text-left">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6 mx-auto md:mx-0" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/background.png')",
//       }}
//     >
//       {/* Soft light overlay */}
//       <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm z-0" />

//       <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24 z-10">
        
//         {/* Left Side - Doctor Image (styled like AboutIntro) */}
//         <div className="md:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-md md:max-w-lg animate-fadeInUp">
//             <Image
//               src="/images/healthcare1.png"
//               alt="Doctor Hero Image"
//               width={500}
//               height={500}
//               className="w-full h-auto object-contain rounded-xl shadow-lg brightness-110 saturate-75"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Text Content */}
//         <div className="md:w-1/2 text-black text-center md:text-left">
//           <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
//             Precision Innovation
//           </h2>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//               Goodbye Guess Work,
//             </span>
//             <br />
//             Hello Nanotech
//           </h1>

//           <div className="h-1 w-20 bg-black mb-6 mx-auto md:mx-0" />

//           <p className="text-lg text-gray-700 leading-relaxed mb-8">
//             Revolutionizing the future of{" "}
//             <span className="font-semibold text-black">Neuroscience</span> with
//             precision{" "}
//             <span className="text-purple-700 font-semibold">Nanotechnology</span> and{" "}
//             <span className="text-pink-700 font-semibold">AI</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
//             <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
//               Explore More
//             </button>
//             <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 py-24 z-10">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image
              src="/images/healthcare1.png"
              alt="Doctor Hero Image"
              width={500}
              height={500}
              className="w-full h-auto object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-black text-center md:text-left">
          <h2 className="text-sm tracking-widest uppercase font-semibold text-black mb-4">
            Precision Innovation
          </h2>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-black">
            Goodbye Guess Work,
            <br />
            Hello Nanotech
          </h1>

          <div className="h-1 w-20 bg-black mb-6 mx-auto md:mx-0" />

          <p className="text-lg text-black leading-relaxed mb-8">
            Revolutionizing the future of{" "}
            <span className="font-semibold">Neuroscience</span> with precision{" "}
            <span className="font-semibold">Nanotechnology</span> and{" "}
            <span className="font-semibold">AI</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition duration-300">
              Explore More
            </button>
            <button className="px-6 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
