import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden w-full">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-indigo-200 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-blue-200 text-sm font-medium mb-4">
              Desarrollador Web
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hola, soy <br />
              <span className="text-primary">Yerson Dreyer</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              Especialista en desarrollo web front-end con experiencia en Next.js, React y Tailwind CSS. Creando experiencias digitales modernas y funcionales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects" className="px-6 py-3 bg-primary hover:bg-primary/90 text-gray-800 font-medium rounded-lg transition-colors">
                Ver proyectos
              </Link>
              <Link href="#contact" className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors">
                Contáctame
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Reemplaza con tu imagen de perfil */}
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shadow-xl">
                <Image 
                  src="/profile-placeholder.jpg" 
                  alt="Tu Nombre" 
                  width={400} 
                  height={400} 
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Elementos decorativos alrededor de la imagen */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 dark:bg-yellow-600 rounded-lg rotate-12 flex items-center justify-center shadow-lg">
                <span className="text-3xl">💻</span>
              </div>
              <div className="absolute -bottom-2 -left-6 w-28 h-28 bg-teal-200 dark:bg-teal-600 rounded-lg -rotate-12 flex items-center justify-center shadow-lg">
                <span className="text-3xl">⚛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flecha de desplazamiento */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Desplazar hacia abajo">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}