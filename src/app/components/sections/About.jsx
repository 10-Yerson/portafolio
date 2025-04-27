import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const skills = [
    "Next.js", "React", "Tailwind CSS", "JavaScript", "Node.js", "Express"
  ];
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Conoce más sobre mi experiencia y enfoque profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* Reemplaza con tu imagen para la sección "Sobre mí" */}
              <Image 
                src="/about-placeholder.jpg" 
                alt="Sobre mí" 
                width={600} 
                height={400} 
                className="w-full object-cover"
              />
            </div>
            
            {/* Decoración */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-lg"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Desarrollador Web especializado en Front-end</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Mi pasión por el desarrollo web me ha llevado a especializarme en la creación de interfaces modernas y funcionales. Con varios años de experiencia en el campo, me enfoco en construir aplicaciones web que no solo sean visualmente atractivas, sino también rápidas y optimizadas.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Aunque mi fuerte es el desarrollo front-end con Next.js, React y Tailwind CSS, también tengo conocimientos en el desarrollo backend con Node.js, Express y bases de datos como MongoDB, lo que me permite entender y trabajar en proyectos full-stack cuando es necesario.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Principales habilidades:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-bold text-lg mb-1">2+ años</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">de experiencia en desarrollo web</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-bold text-lg mb-1">10+ proyectos</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">completados con éxito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}