"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const webhookURL = "https://discord.com/api/webhooks/1371564250119803030/NAcgOebS72UNd_YcCMGmOqGn0OndQ_lv0dLJpyameh3gH6txrjatI1aQCRFQfAP7m7ic";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const content = `📬 **Nouveau message via le site MusBot**\n\n👤 **Nom :** ${formData.name}\n📧 **Email :** ${formData.email}\n💬 **Message :** ${formData.message}`;

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Erreur d’envoi. Vérifie ton webhook Discord.");
    }

    setSending(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-4 py-10 sm:px-8 md:px-12 animate-fadeIn">
        <h1 className="text-4xl font-bold text-center mb-6">📬 Contactez-nous</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Une question ? Un bug ? Envoie-nous un message !
        </p>

        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 border border-gray-200">
          {submitted ? (
            <div className="text-green-600 text-center font-semibold">
              ✅ Message envoyé sur notre Discord ! Merci 🙌
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md w-full transition"
              >
                {sending ? "📤 Envoi en cours..." : "✉️ Envoyer le message"}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
