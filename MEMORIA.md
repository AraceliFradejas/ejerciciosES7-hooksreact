# Memoria del proyecto · Rick and Morty (práctica Hooks Basics)

## 1. Resumen

Práctica de hooks del máster Rock The Code de The Power Tech School. El objetivo real es practicar `useState` y `useEffect` combinados: pedir datos a una API externa, guardarlos en un estado, y repartir la lógica entre un componente padre y uno hijo con su propio estado local.

## 2. Enunciado y requisitos

Según las capturas del enunciado ("Bases de la práctica" y "Arquitectura"):

1. Hacer una petición a la API de Rick y Morty.
2. Guardar los datos de la API en un estado.
3. Pintar los personajes con los atributos que se quieran, con imagen como mínimo.
4. Cada personaje se pinta en un componente específico (hijo), al que se le envían los datos del personaje para que los reciba y los pinte.
5. El componente hijo debe tener un estado propio que controle que, al hacer click en la imagen de un personaje, esta rote 180 grados (mediante cambio de clase o estilos en línea apoyándose en ese estado).
6. La estructura de carpetas debe quedar como en la captura: `src/components/Character/Character.jsx` y `Character.css`.

## 3. Cómo lo he resuelto

- `App.jsx` guarda los personajes en un estado (`const [characters, setCharacters] = useState([])`).
- Un `useEffect` con el array de dependencias vacío (`[]`) hace el `fetch` a `https://rickandmortyapi.com/api/character` una única vez, al montar `App`, y guarda `data.results` en el estado.
- `App` recorre el array con `.map()` y pinta un componente `Character` por cada personaje, pasándole el objeto completo por props.
- `Character.jsx` tiene su propio estado (`const [isFlipped, setIsFlipped] = useState(false)`). Al hacer click en la imagen, se alterna ese estado, y la clase `flipped` (que aplica `transform: rotate(180deg)`) se añade o se quita según su valor.
- Cada componente tiene su propio CSS (`App.css` y `components/Character/Character.css`).

## 4. Estructura final

```text
src/
  App.jsx
  App.css
  components/
    Character/
      Character.jsx
      Character.css
  main.jsx
  index.css
```

## 5. Capturas

App funcionando en local, con la primera tarjeta (Rick Sanchez) ya girada tras el click:

![Personajes de Rick y Morty, uno de ellos girado tras el click](docs/screenshots/personajes-funcionando.png)

## 6. Validación

- `npm run build`: compila sin errores.
- `npm run lint` (oxlint): sin avisos.
- Comprobación manual en el navegador: los 20 personajes de la primera página de la API se pintan con imagen, nombre, especie y estado, y cada imagen gira 180 grados al hacer click (y vuelve a girar si se hace click de nuevo), de forma independiente para cada tarjeta.

## 7. Tecnologías

React 19 y Vite, más la API pública de Rick y Morty (sin librerías adicionales para las peticiones: `fetch` nativo es suficiente para el ejercicio).

## 8. Autora

**Araceli Fradejas Muñoz** · Proyecto académico del máster Rock The Code de [The Power Tech School](https://thepower.education/thepowermba/tech).
