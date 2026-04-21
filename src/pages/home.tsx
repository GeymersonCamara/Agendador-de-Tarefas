// home.tsx
import {
  Home as HomeIcon,
  MessageSquare,
  Users,
  Calendar,
  TrendingUp,
  Bell,
  Search,
  BookOpen,
  Headphones,
} from "lucide-react";
import { NavItem } from "@/components/menu-lateral";
import { Card } from "@/components/cards";
import { discussions } from "@/components/comentarios";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 hidden lg:block">
        <div className="text-xl font-bold text-blue-600 mb-6">
          EnglishConnect
        </div>

        <div className="space-y-2">
          <NavItem icon={<HomeIcon size={18} />} label="Dashboard" active />
          <NavItem
            onClick={() => window.location.href = "/forum"}
            icon={<MessageSquare size={18} />} label="Forum" />
          <NavItem icon={<Users size={18} />} label="Study Groups" />
          <NavItem icon={<Calendar size={18} />} label="Events" />
          <NavItem icon={<TrendingUp size={18} />} label="My Progress" />
        </div>

        {/* Daily Practice */}
        <div className="mt-6 bg-blue-50 p-4 rounded-xl">
          <h4 className="font-semibold text-gray-700 mb-2">
            Daily Practice
          </h4>
          <p className="text-sm text-gray-600">
            Word of the Day:
          </p>
          <p className="font-bold text-blue-600">"Encourage"</p>
          <p className="text-xs text-gray-500 mt-1">
            To give support or confidence.
          </p>
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600">
            Quick Quiz
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <div className="hidden md:flex items-center gap-6 text-gray-600">
            <span className="font-medium text-blue-600">Home</span>
            <span>Courses</span>
            <span>Resources</span>
            <span>Community</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-200 px-3 py-2 rounded-lg">
              <Search size={16} className="text-gray-500" />
              <input
                className="bg-transparent outline-none ml-2 text-sm"
                placeholder="Search..."
              />
            </div>
            <Bell size={20} className="text-gray-600" />
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/32"
                className="rounded-full"
              />
              <span className="text-sm font-medium">Carlos</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome to the English Community!
            </h1>
            <p className="text-sm mb-4">
              Practice, Learn & Connect with English learners.
            </p>
            <div className="flex gap-3">
              <button className="bg-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-orange-600">
                Join Live Class
              </button>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium">
                Start a Discussion
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="w-64 rounded-xl mt-4 md:mt-0"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            <Card title="Upcoming Events">
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">Conversation Club</p>
                  <p className="text-xs text-gray-500">
                    Tomorrow 7:00 PM
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">Grammar Workshop</p>
                  <p className="text-xs text-gray-500">
                    April 20, 5:00 PM
                  </p>
                </div>
              </div>
            </Card>

            <Card title="Latest Discussions">
              <div className="space-y-4">
                {discussions.map((d, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-3 hover:bg-gray-50 transition"
                  >
                    <h4 className="font-semibold text-gray-700">
                      {d.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {d.description}
                    </p>
                    <div className="text-xs text-gray-400 mt-2">
                      {d.replies} replies • {d.time}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <Card title="Popular Topics">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-100 p-3 rounded-lg text-sm">
                  Spoken English
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-sm">
                  Grammar Help
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-sm">
                  Pronunciation
                </div>
                <div className="bg-gray-100 p-3 rounded-lg text-sm">
                  Travel & Culture
                </div>
              </div>
            </Card>

            <Card title="Top Members">
              <div className="space-y-3">
                {["Emily", "John", "Sara"].map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 1}`}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium">
                        {name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {1200 - i * 200} XP
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Learning Resources">
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                  <Headphones size={16} />
                  Listening Exercises
                </div>
                <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                  <BookOpen size={16} />
                  Grammar Guides
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}