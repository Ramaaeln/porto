import Aurora from "../Fragments/AuroraEffect";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 blur-2xl opacity-50">
        <Aurora
          colorStops={["#e0f7fa", "#b2ebf2", "#ffffff"]}
          amplitude={1.5}
          blend={0.4}
          speed={0.3}
        />
      </div>

      <div className="absolute inset-0 z-0 blur-md opacity-70">
        <Aurora
          colorStops={["#b2ebf2", "#80deea", "#ffffff"]}
          amplitude={0.8}
          blend={0.6}
          speed={0.8}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-shadow-lg">
          Hello, I'm Ramaa
        </h1>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-shadow-lg">
          I'm Web Developer
        </h1>
        <p className="text-lg  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500">
          I'm diving into full stack, with strong front-end training
        </p>
      </div>
    </div>
  );
}
