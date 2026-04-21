import { Cog } from "lucide-react";

export function Forum() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      
      {/* Card principal */}
      <div className="bg-card border border-border shadow-sm rounded-xl max-w-md w-full p-8 text-center">
        
        {/* Ícone animado */}
        <div className="flex justify-center mb-6">
          <div className="text-primary animate-spin-slow">
            <Cog size={56} strokeWidth={1.5} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-xl font-semibold text-foreground mb-2">
          Estamos em manutenção
        </h1>

        {/* Descrição */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Estamos melhorando sua experiência na plataforma.  
          Voltamos em breve com novidades 🚀
        </p>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs mb-6">
          Atualização em andamento
        </div>

        {/* Botão */}
        <button
          onClick={() => window.location.href = "/"}
          className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}