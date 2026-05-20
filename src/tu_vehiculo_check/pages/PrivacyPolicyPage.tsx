export const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Política de Privacidad</h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-1">Tu Vehículo Check</h2>
            <p className="text-sm text-gray-400 mb-10">Última actualización: Mayo 2026</p>

            <Section title="1. Introducción">
                <p>
                    Tu Vehículo Check ("la Aplicación") respeta tu privacidad y se compromete a proteger tus datos
                    personales. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu
                    información.
                </p>
            </Section>

            <Section title="2. Datos que recopilamos">
                <p className="mb-3">La Aplicación recopila y procesa los siguientes datos:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><span className="font-medium">Email:</span> Para autenticación y comunicación</li>
                    <li><span className="font-medium">Contraseña:</span> Almacenada de forma segura con hash bcrypt</li>
                    <li><span className="font-medium">Información del vehículo:</span> Marca, modelo, matrícula, año</li>
                    <li><span className="font-medium">Historial de mantenimiento:</span> Cambios de aceite, cargas de combustible, servicios</li>
                    <li><span className="font-medium">Lecturas de odómetro:</span> Kilometraje y fechas</li>
                    <li><span className="font-medium">Notificaciones:</span> Preferencias de alertas de mantenimiento</li>
                </ul>
            </Section>

            <Section title="3. Cómo usamos tus datos">
                <p className="mb-3">Utilizamos tu información para:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Autenticarte en la aplicación</li>
                    <li>Almacenar y sincronizar tu historial de mantenimiento</li>
                    <li>Enviarte notificaciones de recordatorio de mantenimiento</li>
                    <li>Mejorar la experiencia de la aplicación</li>
                    <li>Cumplir con obligaciones legales</li>
                </ul>
            </Section>

            <Section title="4. Seguridad de los datos">
                <ul className="list-disc list-inside space-y-1">
                    <li>Tus datos se almacenan en MongoDB Atlas con encriptación</li>
                    <li>Las contraseñas se hashean con bcrypt</li>
                    <li>La comunicación entre la app y el servidor usa HTTPS</li>
                    <li>Acceso restringido solo a personal autorizado</li>
                </ul>
            </Section>

            <Section title="5. Almacenamiento local">
                <p>Tu aplicación guarda datos localmente en tu dispositivo:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Datos cacheados para funcionamiento offline</li>
                    <li>Puedes borrar estos datos en cualquier momento desde Ajustes</li>
                </ul>
            </Section>

            <Section title="6. Terceros">
                <p>No compartimos tus datos con terceros sin tu consentimiento, excepto:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Proveedores de servicios necesarios (hosting, email)</li>
                    <li>Si lo requiere la ley</li>
                </ul>
            </Section>

            <Section title="7. Derechos del usuario">
                <p className="mb-3">Tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Acceder a tus datos personales</li>
                    <li>Solicitar la corrección de datos inexactos</li>
                    <li>Solicitar la eliminación de tus datos</li>
                    <li>Descargar una copia de tus datos</li>
                </ul>
                <p className="mt-3">
                    Para ejercer estos derechos, contacta a:{" "}
                    <a href="mailto:zenkaisoft.col@gmail.com" className="text-blue-600 underline">
                        zenkaisoft.col@gmail.com
                    </a>
                </p>
            </Section>

            <Section title="8. Retención de datos">
                <p>
                    Guardamos tus datos mientras uses la aplicación. Si eliminas tu cuenta, tus datos se borran en
                    30 días.
                </p>
            </Section>

            <Section title="9. Cambios en esta política">
                <p>
                    Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos.
                </p>
            </Section>

            <Section title="10. Contacto">
                <p>Si tienes preguntas sobre esta Política de Privacidad, contacta a:</p>
                <ul className="mt-2 space-y-1">
                    <li>
                        <span className="font-medium">Email:</span>{" "}
                        <a href="mailto:zenkaisoft.col@gmail.com" className="text-blue-600 underline">
                            zenkaisoft.col@gmail.com
                        </a>
                    </li>
                    <li><span className="font-medium">Empresa:</span> ZenKaiSoft</li>
                </ul>
            </Section>
        </div>
    );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-8">
        <h3 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-1">{title}</h3>
        <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
);
