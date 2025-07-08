import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mb-6">
        GitHub Contributions
      </h2>

      <div className="flex justify-center">
        <div className="rounded-lg border border-blue-100 shadow-md p-4 overflow-x-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <GitHubCalendar
            username="Ramaaeln" // ← Ganti dengan username GitHub kamu
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            colorScheme="light"
            theme={{
              light: ['#ebf8ff', '#90cdf4', '#63b3ed', '#4299e1', '#3182ce'],
            }}
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">Based on public contributions on GitHub</p>
    </section>
  );
}
