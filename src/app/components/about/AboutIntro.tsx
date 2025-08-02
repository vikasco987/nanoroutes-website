// src/components/about/AboutIntro.tsx

export default function AboutIntro() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 text-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-[#f6f3ee]/90 backdrop-blur-sm" />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase font-semibold text-gray-500 mb-4">
          Who We Are
        </h2>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
          Pioneering Neuroscience with <br />
          <span className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text">
            Nanotechnology & AI
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Nanoroutes is a forward-thinking healthtech startup focused on the diagnosis and treatment
          of neurological disorders — especially neuropathic pain — using precision-driven nanotechnology
          and cutting-edge AI.
        </p>
      </div>
    </section>
  );
}
