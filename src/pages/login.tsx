import React, { useState } from "react";
import { Mail, Lock, Loader2 } from "lucide-react";

/**
 * Tipagens
 */
interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}

interface ButtonProps {
  text: string;
  loading?: boolean;
}

/**
 * Input Component
 */
function InputField({
  label,
  type,
  placeholder,
  icon,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="w-full space-y-1">
      <label className="text-sm font-medium text-gray-600">{label}</label>

      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
        <div className="text-gray-400">{icon}</div>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
}

/**
 * Button Component
 */
function PrimaryButton({ text, loading }: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
    >
      {loading && <Loader2 className="animate-spin" size={18} />}
      {text}
    </button>
  );
}

/**
 * Card Container
 */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
      {children}
    </div>
  );
}

/**
 * Main Component
 */
export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    console.log({ email, password });
  }, 1500);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 px-4">
      {/* Container */}
      <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Left Side (Branding) */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <h1 className="text-3xl font-bold mb-4">
            Welcome 👋
          </h1>

          <p className="text-sm opacity-90 leading-relaxed">
            Pratique, aprenda e conecte-se com estudantes de inglês do mundo todo.
            Acesse seu painel, participe de aulas ao vivo e aprimore suas habilidades.
          </p>

          <div className="mt-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 text-sm">
              "A consistência é a chave para dominar o inglês."
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex items-center justify-center p-8">
          <Card>
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Sign in
                </h2>
                <p className="text-sm text-gray-500">
                  Enter your credentials to continue
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  icon={<Mail size={18} />}
                  value={email}
                  onChange={setEmail}
                />

                <InputField
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  icon={<Lock size={18} />}
                  value={password}
                  onChange={setPassword}
                />

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="accent-blue-600" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <PrimaryButton text="Login" loading={loading} />
              </form>

              {/* Footer */}
              <div className="text-sm text-center text-gray-500">
                Don’t have an account?{" "}
                <button className="text-blue-600 font-medium hover:underline">
                  Sign up
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}