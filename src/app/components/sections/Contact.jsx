'use client';
export default function Contact() {
    return (
        <section id="contact" className="py-10 bg-gray-50 dark:bg-gray-800 w-full">
            <div className="container mx-auto px-4 ">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctame</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        ¿Quieres saber más sobre mí o trabajar juntos? Aquí tienes mis datos:
                    </p>
                </div>

                {/* Información de contacto */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    {/* Icono de email */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Dreyerg9@gmail.com</p>
                                </div>
                            </div>
                            <a
                                href="https://wa.link/j0iogp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                            >
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    {/* Icono de WhatsApp */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.52 3.48A11.78 11.78 0 0012.03.75a11.78 11.78 0 00-11.27 14.67L.08 23.25l8.22-2.15a11.77 11.77 0 0012.22-17.62zM12.03 21a9.93 9.93 0 01-5.1-1.4l-.36-.21-4.86 1.27 1.3-4.74-.25-.39A9.96 9.96 0 1121.98 12 9.95 9.95 0 0112.03 21zm5.69-7.71c-.3-.15-1.79-.88-2.07-.98s-.48-.15-.69.15-.79.97-.96 1.17-.36.22-.66.07a8.27 8.27 0 01-2.45-1.5 9.17 9.17 0 01-1.69-2.1c-.18-.3 0-.46.14-.6s.3-.36.45-.54a2 2 0 00.3-.51.55.55 0 00-.03-.54c-.07-.15-.69-1.66-.95-2.28s-.5-.5-.69-.51-.38 0-.59 0a1.13 1.13 0 00-.82.38A3.37 3.37 0 005.3 9.54a5.9 5.9 0 00.16 2.1A10.3 10.3 0 008.6 15.9a9.87 9.87 0 005.95 1.95 5.6 5.6 0 003.47-1.16 3.78 3.78 0 001.13-2.63c0-.39-.14-.56-.3-.61z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold mb-1">WhatsApp</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+57 314 7532227</p>
                                </div>
                            </a>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    {/* Icono de teléfono */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold mb-1">Teléfono</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+57 3147532227</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    {/* Icono de ubicación */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold mb-1">Ubicación</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Popayan, Colombia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
