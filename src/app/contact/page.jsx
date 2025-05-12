export default function Contact() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-10 text-center animate-fadeIn">
          <h1 className="text-4xl font-bold mb-6">📬 Contactez-nous</h1>
          <p className="text-lg text-gray-700 mb-4">Besoin d'aide ? Une question ?</p>
          <div className="space-y-2">
            <p>💬 Rejoignez notre <a href="#" className="text-indigo-600 hover:underline">Serveur Discord</a></p>
            <p>📧 Envoyez un email : <a href="mailto:support@musbot.com" className="text-indigo-600 hover:underline">support@musbot.com</a></p>
          </div>
        </main>
      </div>
    );
  }
  