export default function Commands() {
  const commands = [
    {
      emoji: "🚀",
      cmd: "/setup_server",
      desc: "Configure automatiquement les rôles, salons et permissions du serveur pour MusBot",
      admin: true,
    },
    {
      emoji: "🛠",
      cmd: "/create_private_channel",
      desc: "Crée un salon privé pour un projet avec les membres sélectionnés",
    },
    {
      emoji: "📝",
      cmd: "/task_add #salon Tâche | YYYY-MM-DD",
      desc: "Ajoute une nouvelle tâche dans un salon projet avec une deadline",
    },
    {
      emoji: "📃",
      cmd: "/task_list_here",
      desc: "Affiche les tâches du salon projet actuel",
    },
    {
      emoji: "📋",
      cmd: "/task_list",
      desc: "Affiche toutes les tâches enregistrées sur le serveur",
    },
    {
      emoji: "✅",
      cmd: "/task_done ID",
      desc: "Marque une tâche comme terminée et l’envoie dans #taches-terminees",
    },
    {
      emoji: "✏️",
      cmd: "/task_edit ID Nouveau contenu",
      desc: "Modifie le texte d'une tâche existante",
    },
    {
      emoji: "🗑️",
      cmd: "/task_delete ID",
      desc: "Supprime une tâche (réservé aux admins)",
      admin: true,
    },
    {
      emoji: "🔔",
      cmd: "/task_remind ID",
      desc: "Envoie un rappel manuel à l’auteur d’une tâche",
    },
    {
      emoji: "🧹",
      cmd: "/fix_tasks_channels",
      desc: "Détecte les tâches liées à des salons supprimés",
    },
    {
      emoji: "📦",
      cmd: "/project_close #salon",
      desc: "Archive un projet en renommant le salon et en restreignant l’accès",
    },
    {
      emoji: "🛠️",
      cmd: "Commandes à venir",
      desc: "De nouvelles fonctionnalités seront bientôt disponibles sur MusBot !",
      upcoming: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-4 py-10 sm:px-8 md:px-12 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center mb-10">📜 Commandes MusBot</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {commands.map(({ emoji, cmd, desc, upcoming, admin }, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition duration-200"
            >
              {/* Badge Bientôt */}
              {upcoming && (
                <span className="absolute top-2 right-2 text-xs bg-yellow-300 text-black px-2 py-1 rounded-full animate-pulse">
                  🚧 Bientôt
                </span>
              )}

              {/* Badge Admin */}
              {admin && (
                <span className="absolute top-2 right-2 text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                  🔒 Admin
                </span>
              )}

              <h2 className="text-lg font-semibold mb-2">
                {emoji} <span className="text-indigo-600">{cmd}</span>
              </h2>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
