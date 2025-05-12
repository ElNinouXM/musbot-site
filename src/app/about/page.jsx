export default function About() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-10 text-center animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6">ℹ️ À propos de MusBot</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            MusBot a été pensé pour les étudiants et les équipes ! 🎓  
            Gérer vos projets Discord n'a jamais été aussi simple : tâches, deadlines, notifications...
          </p>
        </main>
      </div>
    );
  }
  