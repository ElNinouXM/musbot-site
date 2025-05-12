export default function Commands() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-10 text-center animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6">📜 Commandes MusBot</h1>
          <ul className="text-lg text-gray-700 space-y-4">
            <li>🚀 <strong>/setup_server</strong> ➔ Configure automatiquement les rôles, salons et permissions du serveur pour MusBot</li>
            <li>🛠 <strong>/create_private_channel</strong> ➔ Crée un salon privé pour un projet avec les membres sélectionnés</li>
            <li>📝 <strong>/task_add #salon Tâche | YYYY-MM-DD</strong> ➔ Ajoute une nouvelle tâche dans un salon projet avec une deadline</li>
            <li>📃 <strong>/task_list_here</strong> ➔ Affiche les tâches du salon projet actuel</li>
            <li>📋 <strong>/task_list</strong> ➔ Affiche toutes les tâches enregistrées sur le serveur</li>
            <li>✅ <strong>/task_done ID</strong> ➔ Marque une tâche comme terminée et l’envoie dans #taches-terminees</li>
            <li>✏️ <strong>/task_edit ID Nouveau contenu</strong> ➔ Modifie le texte d'une tâche existante</li>
            <li>🗑️ <strong>/task_delete ID</strong> ➔ Supprime une tâche (réservé aux admins)</li>
            <li>🔔 <strong>/task_remind ID</strong> ➔ Envoie un rappel manuel à l’auteur d’une tâche</li>
            <li>🧹 <strong>/fix_tasks_channels</strong> ➔ Détecte les tâches liées à des salons supprimés</li>
            <li>📦 <strong>/project_close #salon</strong> ➔ Archive un projet en renommant le salon et en restreignant l’accès</li>
          </ul>
        </main>
      </div>
    );
  }
  