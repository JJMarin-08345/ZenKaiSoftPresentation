import { ArrowRight, Check, Code2, Layers3, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

type ServiceKey = "software" | "web" | "mobile";

const services = {
  software: {
    eyebrow: "Desarrollo de software en Colombia",
    title: "Software a medida para procesos que no caben en una plantilla",
    description:
      "Diseñamos y construimos sistemas personalizados para centralizar información, automatizar tareas y convertir procesos manuales en operaciones más claras.",
    icon: Layers3,
    outcomes: [
      "Plataformas alineadas con la operación real de tu empresa",
      "Paneles administrativos, roles, reportes e integraciones",
      "Arquitectura preparada para crecer y recibir nuevas funciones",
      "Acompañamiento técnico desde el diagnóstico hasta producción",
    ],
    solutions: [
      ["Sistemas empresariales", "Software para inventarios, operaciones, clientes, reportes y procesos internos."],
      ["Productos SaaS", "Plataformas multiusuario y multiempresa preparadas para operar como producto digital."],
      ["Automatización", "Integraciones y flujos que reducen tareas repetitivas y errores de digitación."],
    ],
    faq: [
      ["¿Cuándo conviene desarrollar software a medida?", "Cuando tu proceso es particular, las herramientas existentes obligan a duplicar trabajo o necesitas controlar cómo evoluciona la solución."],
      ["¿El sistema puede integrarse con herramientas existentes?", "Sí. Evaluamos APIs, bases de datos y servicios actuales para definir integraciones seguras y mantenibles."],
      ["¿Zenkaisoft entrega soporte después del lanzamiento?", "Sí. El alcance puede incluir monitoreo, mantenimiento, correcciones y evolución funcional después de publicar."],
    ],
  },
  web: {
    eyebrow: "Desarrollo de aplicaciones web",
    title: "Aplicaciones web rápidas, seguras y listas para crecer",
    description:
      "Construimos plataformas web, paneles administrativos y productos SaaS que funcionan desde cualquier navegador y se conectan con los datos de tu negocio.",
    icon: Code2,
    outcomes: [
      "Experiencias responsivas para computador, tablet y celular",
      "Autenticación, roles, permisos y flujos empresariales",
      "APIs e integraciones con servicios de terceros",
      "Despliegue en nube, observabilidad y mantenimiento",
    ],
    solutions: [
      ["Plataformas empresariales", "Aplicaciones para administrar procesos, equipos, clientes y operaciones desde un solo lugar."],
      ["Paneles y portales", "Dashboards con información útil, permisos y herramientas adaptadas a cada usuario."],
      ["MVP y productos SaaS", "Versiones iniciales sólidas para validar una idea y evolucionarla con usuarios reales."],
    ],
    faq: [
      ["¿Una aplicación web funciona en celulares?", "Sí. Diseñamos interfaces responsivas para que los flujos importantes funcionen correctamente en pantallas pequeñas y grandes."],
      ["¿Pueden trabajar sobre una plataforma que ya existe?", "Sí. Primero revisamos su arquitectura y deuda técnica para proponer mejoras sin poner en riesgo la operación actual."],
      ["¿Qué tecnologías utiliza Zenkaisoft?", "Trabajamos principalmente con React, TypeScript, Node.js, NestJS, .NET, Python y bases de datos SQL o NoSQL según el proyecto."],
    ],
  },
  mobile: {
    eyebrow: "Desarrollo de aplicaciones móviles",
    title: "Apps móviles conectadas con tu operación y tus usuarios",
    description:
      "Creamos aplicaciones para Android y iOS con experiencias claras, acceso a capacidades del dispositivo y conexión segura con servicios en la nube.",
    icon: Smartphone,
    outcomes: [
      "Una base tecnológica compartida para Android y iOS cuando el proyecto lo permite",
      "Integración con cámara, archivos, notificaciones y almacenamiento local",
      "Sincronización con APIs, roles y datos empresariales",
      "Preparación técnica para publicación y evolución continua",
    ],
    solutions: [
      ["Apps operativas", "Herramientas móviles para equipos que trabajan en campo, plantas, sedes o puntos de atención."],
      ["Apps para clientes", "Experiencias de consulta, autogestión, seguimiento y comunicación con tu marca."],
      ["Extensiones móviles", "Aplicaciones conectadas con plataformas web y sistemas empresariales existentes."],
    ],
    faq: [
      ["¿Desarrollan para Android y iPhone?", "Sí. Definimos si conviene una solución multiplataforma o un enfoque específico según las funciones, presupuesto y objetivos."],
      ["¿La app puede funcionar sin conexión?", "Podemos diseñar flujos offline y sincronización posterior cuando la operación realmente lo necesita."],
      ["¿También desarrollan el backend?", "Sí. Podemos construir las APIs, autenticación, base de datos e infraestructura que necesita la aplicación móvil."],
    ],
  },
} satisfies Record<ServiceKey, {
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof Layers3;
  outcomes: string[];
  solutions: string[][];
  faq: string[][];
}>;

export function ServicePage({ service }: { service: ServiceKey }) {
  const content = services[service];
  const Icon = content.icon;

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <header className="border-b border-white/10 bg-gray-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase text-red-400">
              <Icon size={18} aria-hidden="true" />
              {content.eyebrow}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:zenkaisoft.col@gmail.com?subject=Quiero cotizar un proyecto de software"
                className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition-colors hover:bg-red-600"
              >
                Cuéntanos tu proyecto <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link
                to="/proyectos"
                className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-gray-950"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase text-red-500">Qué obtienes</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Tecnología pensada para resolver el problema completo</h2>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2">
              {content.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 border-b border-gray-200 pb-5 text-gray-700 dark:border-gray-800 dark:text-gray-300">
                  <Check className="mt-0.5 shrink-0 text-red-500" size={20} strokeWidth={3} aria-hidden="true" />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 py-16 dark:bg-gray-900 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase text-red-500">Soluciones</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">Construimos alrededor de tu operación</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {content.solutions.map(([title, description]) => (
                <article key={title} className="border-t-4 border-red-500 bg-white p-6 shadow-sm dark:bg-gray-950">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase text-red-500">Proceso</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">De la necesidad a una solución mantenible</h2>
              <ol className="mt-8 space-y-6">
                {[
                  ["01", "Diagnóstico", "Entendemos el proceso, los usuarios y el resultado que debe producir el software."],
                  ["02", "Diseño técnico", "Definimos alcance, experiencia, arquitectura e integraciones antes de construir."],
                  ["03", "Desarrollo iterativo", "Entregamos avances funcionales para validar temprano y tomar mejores decisiones."],
                  ["04", "Lanzamiento y evolución", "Publicamos, medimos y acompañamos las mejoras que necesita el producto."],
                ].map(([number, title, text]) => (
                  <li key={number} className="flex gap-4">
                    <span className="text-lg font-black text-red-500">{number}</span>
                    <div>
                      <h3 className="font-bold">{title}</h3>
                      <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-400">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-sm font-bold uppercase text-red-500">Preguntas frecuentes</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Antes de comenzar</h2>
              <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                {content.faq.map(([question, answer]) => (
                  <details key={question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-bold marker:hidden">{question}</summary>
                    <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-500 py-14 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <h2 className="text-3xl font-black">Hablemos de lo que necesitas construir</h2>
              <p className="mt-2 text-red-50">Cuéntanos el problema y te ayudamos a aterrizar el siguiente paso.</p>
            </div>
            <a
              href="mailto:zenkaisoft.col@gmail.com?subject=Proyecto para Zenkaisoft"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-red-600 transition-colors hover:bg-gray-950 hover:text-white"
            >
              Escribir a Zenkaisoft <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
