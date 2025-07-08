export default function CertificationsHero() {
  const certifications = [
    {
        month: "June",
        year: "2025",
        initial: "F",
        title: "Certificatte Best Team Award",
        issuer: "Universitas Pamulang organized by HIMTIF ",
      },
    {
        month: "Des",
        year: "2024",
        initial: "F",
        title: "Certifications Fullstack Developer & Best Project of the Batch",
        issuer: "Talenthub",
      },
    {
      month: "Nov",
      year: "2024",
      initial: "R",
      title: "Certifications React JS Fundamental ",
      issuer: "Dicoding",
    },
    {
      month: "Sep",
      year: "2024",
      initial: "J",
      title: "Certifications Basic Javascript Programming ",
      issuer: "Dicoding",
    },
    {
      month: "August",
      year: "2024",
      initial: "S",
      title: "Certifications Basic Structured Query Language (SQL)",
      issuer: "Dicoding",
    },

  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-10">
          <span className="text-xs font-medium bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full">
            Certifications & ACHIEVEMENT 
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500">
            I like to learn
          </h2>
          <p className="text-center text-slate-600 max-w-2xl text-sm sm:text-base">
            During my studies, I completed over 15 certified online courses
            through Dicoding, and participated in various academic and
            independent projects — including a Hackathon (Best Team Award) and a
            full-stack web development program at Talentclass (Best Project of
            the Batch).
          </p>
        </div>

        <div className="border-l-2 border-blue-100 relative ml-4">
          {certifications.map((cert, index) => (
            <div key={index} className="relative pl-8 pb-8">
              <div className="absolute -left-[22px] top-1 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white flex items-center justify-center font-semibold shadow-md">
                {cert.initial}
              </div>
              <p className="text-sm text-slate-500 mb-1">{`${cert.month} ${cert.year}`}</p>
              <h3 className="font-semibold text-slate-800">{cert.title}</h3>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.linkedin.com/in/ramaaeln" // ganti sesuai profilmu
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="ri-linkedin-fill"></span> More on my LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
