import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="relative flex-grow flex items-center justify-center bg-cover bg-center text-white animate-fadeIn"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523966211575-eb4a01e7ddfb?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        {/* LOGO EN FOND FLOU */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity">
          <Image
            src="/BotMus.webp"
            alt="Logo MusBot"
            width={400}
            height={400}
            className="blur-sm"
          />
        </div>

        {/* CONTENU HERO */}
        <div className="relative z-10 bg-black bg-opacity-70 p-10 rounded-2xl shadow-2xl text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Bienvenue sur MusBot
          </h1>
          <p className="text-lg mb-6">
            Le bot ultime pour organiser vos projets scolaires, booster votre productivité
            et rester concentré sur Discord.
          </p>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1363638967517577338&permissions=8&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-110 duration-300"
          >
            🚀 Inviter MusBot
          </a>
        </div>
      </main>
    </div>
  );
}
