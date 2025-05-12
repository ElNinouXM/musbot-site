export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-4 py-10 text-center animate-fadeIn sm:px-8 md:px-12">
        <h1 className="text-4xl font-bold mb-6">ℹ️ À propos de MusBot</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          MusBot a été pensé pour les étudiants et les équipes ! 🎓  
          Gérer vos projets Discord n'a jamais été aussi simple : tâches, deadlines, notifications...
        </p>

        {/* Bloc Vidéo à venir */}
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-xl mx-auto border-4 border-dashed border-indigo-500">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
              <span className="text-6xl">🎬</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Vidéo explicative en cours de réalisation...
            </h2>
            <p className="text-gray-600 text-sm">
              Cette vidéo vous montrera comment utiliser MusBot pour créer des projets,
              gérer vos tâches, et automatiser votre organisation sur Discord étape par étape.
            </p>

            {/*
            ▶️ Pour activer la vidéo YouTube plus tard, décommente ce bloc :

            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dot1zEaWBsU"
                title="Vidéo explicative MusBot"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            */}
          </div>
        </div>
      </main>
    </div>
  );
}
