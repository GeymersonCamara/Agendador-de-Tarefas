export function Header() {
  return (
    <header className="pl-5 pr-8 pt-6 pb-6 flex items-center justify-between text-white">
      <h1 className="text-xl font-semibold">Análise de Rendimento</h1>
      <div className="flex space-x-3">
        {["Todos"].map((label, i) => (
          <select
            key={i}
            className="bg-[#1E2E56] px-7 py-3 rounded-md text-white text-sm focus:outline-none"
            defaultValue={label}
          >
            <option>Todos</option>
            <option>Janeiro</option>
            <option>Fevereiro</option>
            <option>Março</option>
          </select>
        ))}
      </div>
    </header>
  );
}