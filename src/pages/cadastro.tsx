import { useState } from "react";
import { Mail, Lock, User, Calendar } from "lucide-react";
import { createUser } from "@/repository/cadastro-repository";

/* =========================
   TYPES
========================= */

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
}

/* =========================
   INPUT COMPONENT
========================= */

interface InputFieldProps {
  label: string;
  type: string;
  name: keyof FormData;
  value: string;
  placeholder: string;
  icon: React.ReactNode;
  onChange: (name: keyof FormData, value: string) => void;
}

function InputField({
  label,
  type,
  name,
  value,
  placeholder,
  icon,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>

      <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-blue-500 transition">
        <div className="text-gray-400">{icon}</div>

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className="w-full outline-none text-sm bg-transparent"
        />
      </div>
    </div>
  );
}

/* =========================
   CARD COMPONENT
========================= */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
      {children}
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export function Cadastro() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
  });

  function handleChange(name: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
        const user = await createUser({
        name: form.name,
        email: form.email,
        password: form.password,
        birthDate: form.birthDate,
        });

        console.log("Usuário criado:", user);

        alert("Conta criada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        alert("Erro ao criar conta");
    }
    }
  

  return (
    <>
      <div className="absolute top-6 left-6">
        <img
          src="/logo-completa-white.png"
          alt="EnglishConnect"
          className="h-15 w-auto"
          onClick={() => (window.location.href = "/")}
        />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">

          {/* ================= LEFT SIDE ================= */}
          <div className="hidden md:flex flex-col justify-center p-10 text-white bg-gradient-to-br from-blue-700 to-blue-500">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to English Community 🌎
            </h1>

            <p className="text-sm text-blue-100 leading-relaxed">
              Pratique inglês diariamente, conecte-se com estudantes do mundo todo
              e evolua sua fluência com aulas e desafios reais.
            </p>

            <div className="mt-6 bg-white/10 p-4 rounded-xl text-sm italic text-blue-100">
              "Consistência é o segredo para dominar qualquer idioma."
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center justify-center p-6">
            <Card>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                Criar conta
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Preencha os dados para entrar na comunidade
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                <InputField
                  label="Nome completo"
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Seu nome"
                  icon={<User size={18} />}
                  onChange={handleChange}
                />

                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="you@example.com"
                  icon={<Mail size={18} />}
                  onChange={handleChange}
                />

                <InputField
                  label="Data de nascimento"
                  type="date"
                  name="birthDate"
                  value={form.birthDate}
                  placeholder=""
                  icon={<Calendar size={18} />}
                  onChange={handleChange}
                />

                <InputField
                  label="Senha"
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="••••••••"
                  icon={<Lock size={18} />}
                  onChange={handleChange}
                />

                <InputField
                  label="Confirmar senha"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  placeholder="••••••••"
                  icon={<Lock size={18} />}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition"
                >
                  Criar conta
                </button>
                <div className="text-center">
                  <button
                    type="button"
                    className="text-blue-600 font-medium hover:underline"
                    onClick={() => window.location.href = "/login"}
                  >
                    Login
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}