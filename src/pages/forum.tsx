import { Cog } from "lucide-react";

export function Forum() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      {/* Card principal */}
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl max-w-lg w-full p-10 text-center relative overflow-hidden">

        {/* glow decorativo */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />

        {/* Ícone */}
        <div className="flex justify-center mb-6">
          <div className="text-blue-600 animate-spin-slow">
            <Cog size={60} strokeWidth={1.5} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Fórum em manutenção
        </h1>

        {/* Subtítulo */}
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Estamos melhorando a experiência da comunidade para trazer novas funcionalidades,
          mais velocidade e uma navegação mais fluida.
        </p>

        {/* Status */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs mb-6">
          🔧 Atualização em andamento
        </div>

        {/* Progress visual */}
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
          <div className="h-full w-2/3 bg-blue-500 animate-pulse rounded-full" />
        </div>

        {/* Botão */}
        <button
          onClick={() => window.location.href = "/home"}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}