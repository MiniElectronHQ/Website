import logo from "../assets/images/logo.png";

function App() {
  return (
    <div className="bg-slate-100 text-slate-700 h-screen flex items-center">
      <section className="mx-auto text-center">
        <img src={logo} alt="code.man" className="block mx-auto mb-4 w-8" />
        <h1 className="text-3xl font-extrabold">
          <span className="text-slate-500">mini</span>Electron
        </h1>
        <p>Small open source applications.</p>

        <main className="grid grid-cols-3 gap-3 mt-12 text-white">
          <div className="border border-gray-900 bg-slate-900 p-6 shadow-xl rounded">
            <h2 className="text-xl font-medium">
              code<span className="text-brand-color">.</span>man
            </h2>
            <p className="text-xs text-slate-400">[folder viewer for coders]</p>
            <a
              href="/codeman"
              className="py-1 px-2 border border-slate-900 rounded mt-2 font-medium inline-block bg-slate-700 text-sm"
            >
              Open
            </a>
          </div>
          <div className="border border-gray-900 bg-slate-900 p-6 shadow-xl rounded">
            <h2 className="text-xl font-medium">Port&amp;PID</h2>
            <p className="text-xs text-slate-400">
              [Port &amp; Process Identifier (PID) Manager]
            </p>
            <a
              href="/portandpid"
              className="py-1 px-2 border border-slate-900 rounded mt-2 font-medium inline-block bg-slate-700 text-sm"
            >
              Open
            </a>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
