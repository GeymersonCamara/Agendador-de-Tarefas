import { useEffect, useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";

type UserProfile = {
  id?: string;
  name?: string;
  username?: string;
  avatarUrl?: string;
  profilePicture?: string;
  photoUrl?: string;
};

export function Perfil() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const userId = params.get("userId");
  const [profile, setProfile] = useState<UserProfile>({
    id: userId ?? undefined,
    name: params.get("name") || undefined,
    username: params.get("username") || undefined,
    avatarUrl: params.get("avatar") || undefined,
  });
  const [loadingProfile, setLoadingProfile] = useState(Boolean(userId));

  useEffect(() => {
    if (!userId) {
      const localName = localStorage.getItem("userDisplayName");
      const localUsername = localStorage.getItem("username");
      const localAvatar = localStorage.getItem("userAvatar");

      setProfile((prev) => ({
        ...prev,
        name: prev.name || localName || undefined,
        username: prev.username || localUsername || undefined,
        avatarUrl: prev.avatarUrl || localAvatar || undefined,
      }));
      setLoadingProfile(false);
      return;
    }

    async function loadProfile() {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);

        if (!response.ok) return;

        const data = await response.json();
        setProfile((prev) => ({ ...prev, ...data }));
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      } finally {
        setLoadingProfile(false);
      }
    }

    loadProfile();
  }, [userId]);

  const avatar =
    profile.avatarUrl ||
    profile.profilePicture ||
    profile.photoUrl ||
    "https://i.pravatar.cc/120";
  const username = profile.username || "usuario";
  const displayName = profile.name || "Usuario";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl max-w-lg w-full p-8 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />

        <button
          onClick={() => (window.location.href = "/home")}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
          aria-label="Voltar para home"
        >
          <ArrowLeft size={20} />
        </button>

        {loadingProfile ? (
          <p className="text-sm text-gray-500 py-16">Carregando perfil...</p>
        ) : (
          <>
            <img
              src={avatar}
              alt={`Foto de ${displayName}`}
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
            />

            <h1 className="text-2xl font-bold text-gray-800">{displayName}</h1>
            <p className="text-sm text-blue-600 font-medium mt-1">@{username}</p>
          </>
        )}
      </div>
    </div>
  );
}
