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
  Plus,
} from "lucide-react";
import { NavItem } from "@/components/menu-lateral";
import { Card } from "@/components/cards";
import { useEffect, useState } from "react";
import type { Post } from "@/domain/type";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();

        setPosts(data);

      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoadingPosts(false);
      }
    }

    loadPosts();
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  }

function removeFile(index: number) {
  setFiles((prev) => prev.filter((_, i) => i !== index));
} 

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--sidebar)] text-[var(--sidebar-foreground)] p-4 hidden lg:block">
        <div className="text-xl font-bold text-[var(--primary)] mb-6">
          <img
            src="/logo-completa.png"
            alt="EnglishConnect"
            className="h-15 w-auto"
            onClick={() => (window.location.href = "/home")}
          />
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
        <div className="mt-6 bg-[var(--sidebar-accent)] p-4 rounded-xl">
          <h4 className="font-semibold text-[var(--sidebar-foreground)] mb-2">
            Daily Practice
          </h4>
          <p className="text-sm text-[var(--muted-foreground)]">
            Word of the Day:
          </p>
          <p className="font-bold text-[var(--primary)]">"Encourage"</p>
          <p className="text-xs text-[var(--muted-foreground)] mt-1">
            To give support or confidence.
          </p>
          <button className="mt-3 w-full bg-[var(--warning)] text-white py-2 rounded-lg text-sm font-medium hover:opacity-90">
            Quick Quiz
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <div className="hidden md:flex items-center gap-6 text-[var(--muted-foreground)]">
            <span className="font-medium text-[var(--primary)]">Home</span>
            <span>Courses</span>
            <span>Resources</span>
            <span>Community</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-[var(--muted)] px-3 py-2 rounded-lg">
              <Search size={16} className="text-[var(--muted-foreground)]" />
              <input
                className="bg-transparent outline-none ml-2 text-sm text-[var(--foreground)]"
                placeholder="Search..."
              />
            </div>
            <Bell size={20} className="text-[var(--muted-foreground)]" />
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
              Welcome to Bloob English Community!
            </h1>
            <p className="text-sm mb-4">
              Pratique, aprenda e conecte-se com estudantes de inglês.
            </p>
            <div className="flex gap-3">
              <button className="bg-[var(--warning)] px-4 py-2 rounded-lg font-medium hover:opacity-90">
                Join Live Class
              </button>
              <button className="bg-white text-[var(--primary)] px-4 py-2 rounded-lg font-medium">
                Inicie uma Discussão
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
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setIsPostOpen(true)}
                  className="bg-blue-600 text-white text-sm px-7 py-1.5 rounded-lg hover:bg-blue-700"
                >
                  New Post
                </button>
              </div>
              <div className="space-y-4">
                {loadingPosts ? (
                  <p className="text-sm text-gray-500">Carregando posts...</p>
                ) : (
                  posts.map((post, i) => (
                    console.log("COMPARE:", {
                      local: localStorage.getItem("userId"),
                      post: post.author?.id,
                    }),
                      <div
                        key={i}
                        className="border rounded-lg p-3 hover:bg-gray-50 transition"
                      >
                        <h4 className="font-semibold text-gray-700">
                          {post.title}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {post.content}
                        </p>

                        <div className="text-xs text-gray-400 mt-2">
                          {post.author?.name ?? "Unknown"} •{" "}
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>

                        {/* 👇 AQUI ENTRA O BOTÃO */}
                        {userId === post.authorId && (
                          <button
                            onClick={async () => {
                              const token = localStorage.getItem("token");

                              await fetch(`http://localhost:3000/posts/${post.id}`, {
                                method: "DELETE",
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              });

                              setPosts((prev) =>
                                prev.filter((p) => p.id !== post.id)
                              );
                            }}
                            className="text-red-500 text-xs mt-3 hover:underline"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                  ))
                )}
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
      {/* Floating Action Button */}
      {isOpen && (
        <>
          {/* click outside */}
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          />

          {/* popover */}
          <div
            className="
              absolute bottom-20 right-0
              w-56
              bg-white
              rounded-xl
              shadow-xl
              border border-gray-100
              p-2
              z-50
            "
          >
            <button
              onClick={() => window.location.href = "/new-post"}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
            >
              📝 New Post
            </button>

            <button
              onClick={() => window.location.href = "/ask-question"}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
            >
              ❓ Ask Question
            </button>

            <button
              onClick={() => window.location.href = "/start-discussion"}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
            >
              💬 Start Discussion
            </button>
          </div>
        </>
      )}
      {isPostOpen && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsPostOpen(false)}
          />

          {/* modal */}
          <div className="
            fixed z-50
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-full max-w-2xl
            bg-[var(--card)]
            border border-[var(--border)]
            rounded-xl
            shadow-xl
            p-6
            space-y-4
          ">

            {/* header */}
            <div>
              <h2 className="text-lg font-bold text-[var(--foreground)]">
                Create new post
              </h2>
              <p className="text-sm text-[var(--muted-foreground)]">
                Share something with the community
              </p>
            </div>

            {/* title */}
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title..."
              className="
                w-full border-b border-[var(--border)]
                bg-transparent outline-none
                text-[var(--foreground)]
                pb-2
              "
            />

            {/* content */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post..."
              className="
                w-full h-32
                bg-[var(--muted)]
                p-3 rounded-lg
                outline-none resize-none
                text-[var(--foreground)]
              "
            />
            <div className="flex gap-3 flex-wrap">

              {/* IMAGE UPLOAD */}
              <label className="
                flex items-center gap-2
                px-3 py-2 rounded-lg
                bg-[var(--muted)]
                hover:bg-[var(--accent)]
                text-sm cursor-pointer
              ">
                📷 Image
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={handleFileChange}
                />
              </label>

              {/* FILE UPLOAD */}
              <label className="
                flex items-center gap-2
                px-3 py-2 rounded-lg
                bg-[var(--muted)]
                hover:bg-[var(--accent)]
                text-sm cursor-pointer
              ">
                📎 File
                <input
                  type="file"
                  multiple
                  hidden
                  onChange={handleFileChange}
                />
              </label>

            </div>

            {/* actions */}
            <div className="flex justify-between items-center pt-2">

              <div className="text-xs text-[var(--muted-foreground)]">
                Tip: keep it short and clear
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsPostOpen(false)}
                  className="
                    px-4 py-2 rounded-lg
                    bg-[var(--muted)]
                    hover:bg-[var(--accent)]
                    text-sm
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={async () => {
                    const token = localStorage.getItem("token");
                    console.log("TOKEN:", token);

                    try {
                      await fetch("http://localhost:3000/posts", {
                        method: "POST",
                        cache: "no-store",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                          title,
                          content,
                        }),
                      });

                      setTitle("");
                      setContent("");
                      setIsPostOpen(false);

                      // atualiza feed (ou você pode chamar sua função de reload posts aqui)
                      const res = await fetch("http://localhost:3000/posts");
                      const data = await res.json();

                      setPosts(data);

                    } catch (error) {
                      console.error("Erro ao criar post:", error);
                    }
                  }}
                  className="
                    px-4 py-2 rounded-lg
                    bg-[var(--primary)]
                    text-white
                    hover:opacity-90
                    text-sm
                  "
                >
                  Publish
                </button>
              </div>

            </div>
          </div>
        </>
      )}
      {files.length > 0 && (
        <div className="grid grid-cols-2 gap-3 pt-3">

          {files.map((file, i) => (
            <div
              key={i}
              className="
                relative
                bg-[var(--muted)]
                border border-[var(--border)]
                rounded-lg p-2
              "
            >
              {/* IMAGE PREVIEW */}
              {file.type?.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(file)}
                  className="w-full h-24 object-cover rounded-md"
                />
              ) : (
                <div className="text-sm text-[var(--foreground)]">
                  📄 {file.name}
                </div>
              )}

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeFile(i)}
                className="
                  absolute top-1 right-1
                  bg-white border border-[var(--border)]
                  rounded-full px-1
                  text-xs
                "
              >
                ✕
              </button>
            </div>
          ))}

        </div>
      )}
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed bottom-6 right-6
          bg-orange-500 hover:bg-orange-600
          text-white
          w-14 h-14
          rounded-full
          shadow-lg
          flex items-center justify-center
          transition-all
          hover:scale-105
        "
      >
        <Plus size={22} />
      </button>
    </div>
  );
}