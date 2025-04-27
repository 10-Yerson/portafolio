'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../lib/data';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(project => project.technologies.some(tech =>
            tech.toLowerCase().includes(activeTab.toLowerCase())
        ));

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Explora algunos de los proyectos en los que he trabajado
                    </p>
                </div>

                {/* Tabs de filtrado */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'all'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                    >
                        Todos
                    </button>
                    <button
                        onClick={() => setActiveTab('next')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'next'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                    >
                        Next.js
                    </button>
                    <button
                        onClick={() => setActiveTab('react')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'react'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                    >
                        React
                    </button>
                    <button
                        onClick={() => setActiveTab('node')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'node'
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                    >
                        Node.js
                    </button>
                </div>

                {/* Proyecto destacado (Momentary) */}
                {projects.find(p => p.id === 'momentary' &&
                    (activeTab === 'all' || p.technologies.some(tech => tech.toLowerCase().includes(activeTab.toLowerCase())))) && (
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-8 text-center">Proyecto Destacado</h3>
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="relative h-64 lg:h-auto">
                                        <Image
                                            src="/momentary-screenshot.jpg" // Reemplaza con la imagen de tu proyecto
                                            alt="Momentary - Red Social"
                                            width={800}
                                            height={600}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-2xl font-bold mb-4">Momentary</h4>
                                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                                            Red social moderna con funcionalidades avanzadas de interacción, mensajería en tiempo real y compartición de contenidos multimedia. Diseñada con un enfoque en la experiencia de usuario y rendimiento.
                                        </p>

                                        <div className="mb-6">
                                            <h5 className="font-semibold mb-2">Tecnologías utilizadas:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {projects.find(p => p.id === 'momentary').technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h5 className="font-semibold mb-2">Características principales:</h5>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                                {projects.find(p => p.id === 'momentary').features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href="https://momentary-indol.vercel.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors inline-flex items-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                                </svg>
                                                Ver Demo
                                            </a>
                                            <a
                                                href="https://github.com/tuusername/momentary"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors inline-flex items-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Ver Código
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects
                        .filter(project => project.id !== 'momentary' || activeTab !== 'all') // Excluir Momentary si ya está mostrado como destacado
                        .map((project) => (
                            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
                                <div className="relative h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {project.technologies.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors text-sm inline-flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                            </svg>
                                            Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors text-sm inline-flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Código
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                            No se encontraron proyectos con el filtro seleccionado.
                        </h3>
                        <button
                            onClick={() => setActiveTab('all')}
                            className="mt-4 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
                        >
                            Ver todos los proyectos
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}