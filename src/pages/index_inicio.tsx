import React, { type ButtonHTMLAttributes } from "react";
import {
  BookOpen,
  Users,
  MessageCircle,
  ArrowRight,
  Globe,
} from "lucide-react";

/* =========================
   TYPES
========================= */
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Step {
  title: string;
  description: string;
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

/* =========================
   COMPONENTS
========================= */
const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6">{children}</div>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50";

  return (
    <button className={`${base} ${styles}`} {...rest}>
      {children}
    </button>
  );
};

const FeatureCard: React.FC<Feature> = ({
  icon,
  title,
  description,
}) => (
  <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-500 mt-2">{description}</p>
  </div>
);

const StepItem: React.FC<Step & { index: number }> = ({
  index,
  title,
  description,
}) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
      {index}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

/* =========================
   DATA
========================= */
const features: Feature[] = [
  {
    icon: <Users size={22} />,
    title: "Aprenda com pessoas reais",
    description:
      "Conecte-se com estudantes do mundo todo e pratique conversação.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Prática diária",
    description:
      "Desafios e discussões para melhorar seu inglês todos os dias.",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Conteúdo estruturado",
    description:
      "Aulas, exercícios e materiais organizados por nível.",
  },
  {
    icon: <Globe size={22} />,
    title: "Comunidade global",
    description:
      "Aprenda inglês com pessoas de diferentes culturas.",
  },
];

const steps: Step[] = [
  {
    title: "Crie sua conta",
    description: "Leva menos de 1 minuto para começar.",
  },
  {
    title: "Escolha seu nível",
    description: "Personalize sua jornada de aprendizado.",
  },
  {
    title: "Comece a praticar",
    description: "Participe de aulas e discussões ao vivo.",
  },
];

/* =========================
   MAIN COMPONENT
========================= */
export function IndexInicio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-400 text-gray-800">
      {/* HEADER */}
      <header className="py-6">
        <Container>
          <div className="flex justify-between items-center">
            <img
              src="/logo-completa-white.png"
              alt="EnglishConnect"
              className="h-15 w-auto"
              onClick={() => (window.location.href = "/")}
            />

            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => window.location.href = "/login"}>
                Entrar
            </Button>
              <Button
                onClick={() => window.location.href = "/cadastro"}>
                Criar conta
            </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Aprenda inglês de forma prática e conectada
              </h2>

              <p className="text-blue-100 mt-4 text-lg">
                Pratique diariamente com pessoas reais, participe de
                discussões e evolua sua fluência naturalmente.
              </p>

              <div className="mt-6 flex gap-4 flex-wrap">
                <Button>
                  Começar agora <ArrowRight size={18} />
                </Button>
                <Button variant="secondary">
                  Já tenho conta
                </Button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-full h-[320px] rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <span className="opacity-70">
                  Espaço visual (mock)
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">
              Por que usar a plataforma?
            </h3>
            <p className="text-gray-500 mt-2">
              Tudo que você precisa para evoluir no inglês
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <FeatureCard key={i} {...item} />
            ))}
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                Como funciona
              </h3>

              <div className="mt-6 space-y-6">
                {steps.map((step, i) => (
                  <StepItem key={i} index={i + 1} {...step} />
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-full h-[300px] rounded-3xl bg-blue-100 flex items-center justify-center text-blue-500">
                Visual explicativo
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <Container>
          <h3 className="text-3xl md:text-4xl font-bold">
            Comece sua jornada hoje
          </h3>

          <p className="mt-4 text-blue-100">
            Junte-se à comunidade e leve seu inglês para o próximo nível.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Button>Criar conta gratuita</Button>
            <Button variant="secondary">Entrar</Button>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-blue-700 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} EnglishConnect — Todos os direitos reservados
      </footer>
    </div>
  );
}