# Mentee TODO App

Este repositorio corresponde a un proyecto de prueba el cual tiene como objetivo ser un laboratorio para diferentes implementaciones básicas durante el proceso de Mentee en Pragma.

## Tecnologías utilizadas

- ReactJS
- ViteJS
- TypeScript

### Librerías adicionales

- Redux Toolkit
- ContextAPI (Suministrada por ReactJS)

### Documentación adicional ViteJS

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Estructura de carpetas

El proyecto implementa una estructura sencilla de carpetas y hace uso de atomic design para la organización de los componentes utilizados dentro del proyecto

```
.
|-- src/                              # Carpeta Source
|   |-- components/                   # Carpeta de componentes
|   |    |-- atoms/                   # Átomos
|   |    |   └── component-file.tsx   # Ejemplo de componente atómico
|   |    └-- molecules/               # Carpeta de componentes
|   |        └── component-file.tsx   # Ejemplo de componente molecular
|   └-- hooks/                        # Carpeta de hooks
|            └── hook-file.ts         # Ejemplo de archivo de hooks
|-- store/                            # Carpeta de Store de Redux
|   └─- slices/                       # Carpeta de Slices para Redux
|-- README.md                         # Readme del sitio
|-- index.html                        # Index html del sitio
└── .gitignore                        # gitignore del sitio
```

## Variables de entorno

Para la versión actual del proyecto, no se cuenta con variables de entorno.

## ¿Cómo ejecutar el proyecto?

1. Clona el repositorio en tu repositorio local

```
git clone https://github.com/mperezs06408/mentee_todo_app
```

2. Instala las dependencias del proyecto

```
npm i
```

3. Corre el proyecto en entorno de desarrollo en el puerto 3000.

```
npm run dev
```
