import { ChartAreaGradient } from "@/components/chart/chart-area-gradient";
import { ChartBarLabel } from "@/components/chart/chart-bar-label";
import { ChartRadialText } from "@/components/chart/chart-radial-text";
import {
  Bell,
  Check,
  ClipboardList,
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  Plus,
  Leaf,
} from "lucide-react";

interface Task {
  id: number;
  title: string;
  tag: "WORK" | "PERSONAL";
  status: "pending" | "done" | "progress";
  priority?: "high";
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Revisar relatório trimestral financeiro",
    tag: "WORK",
    status: "progress",
  },
  {
    id: 2,
    title: "Agendar reunião de branding",
    tag: "PERSONAL",
    status: "done",
  },
  {
    id: 3,
    title: "Atualizar fluxogramas do sistema",
    tag: "WORK",
    status: "pending",
    priority: "high",
  },
];

function Sidebar() {
  return (
    <aside className="w-20 bg-white border-r flex flex-col items-center py-6 gap-6">
      <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold">
        <Leaf />
      </div>

      <nav className="flex flex-col gap-6 text-gray-500">
        <LayoutDashboard className="w-5 h-5 text-green-600" />
        <ClipboardList className="w-5 h-5" />
        <Calendar className="w-5 h-5" />
        <BarChart3 className="w-5 h-5" />
        <Settings className="w-5 h-5" />
        <HelpCircle className="w-5 h-5" />
      </nav>
    </aside>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-500 w-64 hidden md:block">
          🔍 Search analytics...
        </div>

        <Bell className="w-5 h-5 text-gray-500" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">Adriano Silva</p>
            <p className="text-xs text-gray-500">Director of Precision</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-green-600" />
        </div>
      </div>
    </header>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border">
      {children}
    </div>
  );
}

function TaskItem({ task }: { task: Task }) {
  const tagStyles =
    task.tag === "WORK"
      ? "bg-blue-100 text-blue-600"
      : "bg-pink-100 text-pink-600";

  return (
    <div className="flex items-center justify-between py-3 border-b last:border-none">
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded border flex items-center justify-center ${
            task.status === "done"
              ? "bg-green-600 border-green-600 text-white"
              : "border-gray-300"
          }`}
        >
          {task.status === "done" && <Check size={14} />}
        </div>

        <div>
          <p className="text-sm font-medium">{task.title}</p>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-xs px-2 py-0.5 rounded ${tagStyles}`}
            >
              {task.tag}
            </span>

            {task.priority === "high" && (
              <span className="text-xs text-red-500">
                • Alta Prioridade
              </span>
            )}
          </div>
        </div>
      </div>

      <span className="text-xs text-gray-400 capitalize">
        {task.status === "done"
          ? "Finalizada"
          : task.status === "progress"
          ? "Em progresso"
          : "Pendente"}
      </span>
    </div>
  );
}

function RecentTasks() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Recent Tasks</h2>

        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm">
          <Plus size={16} />
          Nova Tarefa
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </Card>
  );
}

export function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        <Header />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <ChartBarLabel />
          <ChartAreaGradient /> 
          <ChartRadialText />
          <ChartBarLabel />
        </div>

        {/* Tasks */}
        <RecentTasks />

        {/* Floating Button */}
        <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg">
          <Plus />
        </button>
      </main>
    </div>
  );
}