📌 Propuesta de Implementación de un Sistema Integrado de Gestión (SIG) para el Taller de Costura "Tijera de Oro"
📖 Introducción

El Taller de Costura "Tijera de Oro" se encuentra en una fase de crecimiento en la que la eficiencia operativa es crucial para su sostenibilidad y expansión. Actualmente, la gestión de sus procesos principales como el manejo de los inventarios de materiales, relación con proveedores y mantenimiento de maquinaria se basa en métodos manuales y descentralizados. Esta dependencia de registros en papel y hojas de cálculo ha introducido un alto nivel de incertidumbre, errores e ineficiencias que afectan directamente a la rentabilidad y capacidad de producción del taller.

La presente propuesta detalla el desarrollo e implementación de un Sistema Integrado de Gestión (SIG) a la medida. Se tiene como objetivo centralizar la digitalización y automatizar los procesos críticos del taller, proporcionando información en tiempo real, confiable y accesible, que permita una toma de decisiones estratégica, reduzca los costos operativos y optimice toda la cadena de valor de la confección.
📌 Situación Actual (Problemática Ampliada)

La operación actual del taller se caracteriza por los siguientes desafíos:

    Inventario Inexacto: La falta de un sistema centralizado provoca que el inventario físico rara vez coincida con los registros, lo que genera compras innecesarias o, peor aún, detener la producción por desabastecimiento.

    Procesos Propensos a Errores: La captura manual de entradas y salidas de material es lenta y susceptible a errores de digitación, omisiones y duplicidades, lo que distorsiona la información financiera y operativa.

    Gestión de Proveedores: La imposibilidad de acceder rápidamente al historial de compras, precios y desempeño de proveedores debilita la capacidad de negociación y planificación del taller.

    Mantenimiento: Las máquinas se reparan solo cuando fallan, causando retrasos críticos. No existe un historial de mantenimiento que ayude a diagnosticar problemas recurrentes o a planificar sustituciones preventivas de piezas.

🎯 Objetivos
Objetivo General

Desarrollar e implementar un Sistema Integrado de Gestión que automatice el control de inventario, la gestión de proveedores y el plan de mantenimiento de máquinas, con el fin de incrementar la productividad, reducir costos y mejorar la toma de decisiones en el Taller de Costura "Tijera de Oro".
Objetivos Específicos

    Digitalizar el registro y seguimiento de todos los materiales (materia prima y producto terminado).
    Centralizar la información de proveedores y el historial de compras para facilitar el análisis y la negociación.
    Establecer un registro digital del historial de mantenimiento para cada máquina.

🛠 Metodología

Se propone utilizar una metodología ágil, para el desarrollo del proyecto, lo que permitirá iteraciones rápidas, retroalimentación constante del cliente y una entrega incremental de funcionalidades de valor. Este enfoque garantiza que el sistema final se ajuste perfectamente a las necesidades reales del taller.

    Análisis: Definición detallada de los requisitos, el alcance y el plan del proyecto.
    Diseño: Elaboración de prototipos de la interfaz de usuario (UI) y el diseño de la base de datos.
    Desarrollo: Construcción incremental del sistema en sprints de 2-3 semanas.
    Pruebas: Ciclos de pruebas de funcionalidad, usabilidad y rendimiento.

🧩💡 Cómo Gestionaremos la Problemática: Diseño de la Solución

La problemática se abordará con una arquitectura de software moderna y robusta:

    Frontend: Una aplicación web responsive desarrollada con componentes como Bootstrap y DataTables, para una interfaz intuitiva, moderna y con capacidades avanzadas de visualización de datos.

    Backend: Una API RESTful, Esta API será el corazón del sistema, gestionando toda la lógica de negocio, autenticación y comunicación con la base de datos.

    Base de Datos: Un sistema de gestión de bases de datos relacional como SQLite, para garantizar la integridad, consistencia y seguridad de la información.

🗄 Diseño Preliminar de la Base de Datos

A continuación, se presenta un modelo entidad-relación simplificado que constituye la base del sistema:

-- 🏛 Entidades Principales

CREATE TABLE materiales (
id SERIAL PRIMARY KEY,
codigo VARCHAR(50) UNIQUE NOT NULL,
nombre VARCHAR(100) NOT NULL,
tipo VARCHAR(50) NOT NULL, -- hilo, tela, boton, prenda, etc.
unidad_medida VARCHAR(20) NOT NULL, -- metros, unidades, kg, etc.
stock_minimo INTEGER NOT NULL,
stock_maximo INTEGER NOT NULL,
stock_actual INTEGER DEFAULT 0
);

CREATE TABLE proveedores (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
contacto VARCHAR(100),
telefono VARCHAR(20),
email VARCHAR(100)
);

CREATE TABLE maquinas (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
modelo VARCHAR(50),
fecha_compra DATE,
estado VARCHAR(20) -- Operativa, En Mantenimiento, Inactiva
);

-- 🖇 Entidades de Transacción y Relación

CREATE TABLE movimientos_inventario (
id SERIAL PRIMARY KEY,
material_id INTEGER REFERENCES materiales(id) ON DELETE CASCADE,
tipo_movimiento VARCHAR(10) NOT NULL, -- ENTRADA / SALIDA
cantidad INTEGER NOT NULL,
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
motivo TEXT -- Compra, Producción, Venta, Ajuste
);

CREATE TABLE compras (
id SERIAL PRIMARY KEY,
proveedor_id INTEGER REFERENCES proveedores(id) ON DELETE SET NULL,
fecha_orden DATE NOT NULL,
fecha_entrega DATE,
estado VARCHAR(20) -- Pendiente, Completa, Cancelada
);

CREATE TABLE detalle_compra (
id SERIAL PRIMARY KEY,
compra_id INTEGER REFERENCES compras(id) ON DELETE CASCADE,
material_id INTEGER REFERENCES materiales(id) ON DELETE CASCADE,
cantidad INTEGER NOT NULL,
precio_unitario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE mantenimientos (
id SERIAL PRIMARY KEY,
maquina_id INTEGER REFERENCES maquinas(id) ON DELETE CASCADE,
tipo VARCHAR(20) NOT NULL, -- PREVENTIVO / CORRECTIVO
fecha_solicitud DATE NOT NULL,
fecha_realizacion DATE,
descripcion_falla TEXT,
trabajo_realizado TEXT,
costo DECIMAL(10, 2)
);

✅ Conclusiones

La implementación del Sistema Integrado de Gestión para el Taller de Costura "Tijera de Oro" no es un gasto, sino una inversión estratégica para modernizar sus operaciones. Con esto se resolverá la problemática actual, transformando datos dispersos en información poderosa y accesible. Los beneficios esperados incluyen: aumento de la productividad, reducción de costos por errores y desabastecimiento, optimización del capital destinado a inventario y una mejora significativa en la capacidad de planificación y crecimiento del negocio.
💡📋 Recomendaciones

    Compromiso de la Dirección: Es crucial el apoyo y compromiso continuo de la administración del taller para liderar el cambio organizacional que conlleva la implementación de un nuevo sistema.
    Participación del Usuario Final: Involucrar a los operarios y al personal administrativo desde las etapas de diseño y prueba garantizará que el sistema sea intuitivo y se adopte sin resistencia.
    Implementación por Fases: Se recomienda desplegar el sistema por módulos (por ejemplo, Inventario primero, luego Proveedores, luego Mantenimiento) para facilitar la capacitación y minimizar la interrupción operativa.
    Plan de Respaldo y Contingencia: Establecer desde el inicio políticas de respaldo automático de la información y un plan claro de acción en caso de incidencias técnicas.

👨‍💻 Autores

    Equipo de Desarrollo:
        Mery Acevedo
        Nestor Ivan Fabian Colocho
        Alejandro Ernesto Juarez Argumedo
