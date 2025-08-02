// src/components/about/TimelineSection.tsx

export default function TimelineSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <ul className="space-y-6">
          <li className="border-l-4 border-purple-600 pl-4">
            <p className="font-semibold">2023 – Company Founded</p>
            <p className="text-gray-600">Born from a mission to improve neuroscience outcomes with precision tools.</p>
          </li>
          <li className="border-l-4 border-purple-600 pl-4">
            <p className="font-semibold">2024 – Prototype & MVP Developed</p>
            <p className="text-gray-600">Built and tested early tools with feedback from neuroscience experts.</p>
          </li>
          <li className="border-l-4 border-purple-600 pl-4">
            <p className="font-semibold">2025 – Public Launch</p>
            <p className="text-gray-600">Rolling out our platform to the wider public and research networks.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
