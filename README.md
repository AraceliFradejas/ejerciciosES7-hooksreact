# Rick and Morty · Práctica Hooks Basics

Versión en castellano · [English version](#english-version)

## Versión en castellano

Práctica de hooks del módulo FRONTEND [REACT] del máster **Rock The Code** de [The Power Tech School](https://thepower.education/thepowermba/tech). El enunciado pedía pedir datos a una API (la de Rick y Morty), guardarlos en un estado con `useState`, lanzar la petición una única vez con `useEffect`, y pintar cada personaje en un componente hijo aparte que reciba los datos por props.

La parte que más me ha costado pensar ha sido el "flip" de la imagen: el enunciado deja claro que el estado que controla el giro tiene que vivir en el propio componente hijo (`Character`), no en `App`, porque cada tarjeta gira de forma independiente. Lo he resuelto con un estado booleano y una clase CSS que aplica `rotate(180deg)` cuando `isFlipped` es `true`.

### Qué hace

- `App` guarda los personajes en un estado (`useState([])`).
- Un `useEffect` con el array de dependencias vacío hace la petición a la API una única vez, al montar.
- Cada personaje se pinta con el componente `Character`, que recibe el objeto completo por props.
- `Character` tiene su propio estado (`isFlipped`) para saber si hay que darle la vuelta a la imagen al hacer click.

### Estructura

```text
src/
  App.jsx                    # Estado de personajes + useEffect con la petición
  App.css
  components/
    Character/
      Character.jsx          # Componente hijo, recibe el personaje por props
      Character.css
  main.jsx
  index.css
```

### Tecnologías

React 19, Vite y la [API pública de Rick y Morty](https://rickandmortyapi.com/).

### Instalación local

```bash
git clone https://github.com/AraceliFradejas/ejerciciosES7-hooksreact.git
cd ejerciciosES7-hooksreact
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Memoria del proyecto

El detalle de los requisitos cumplidos y las capturas de la app funcionando están en la [memoria del proyecto](MEMORIA.md).

### Redes sociales

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Autora

**Araceli Fradejas Muñoz** · Proyecto académico del máster Rock The Code de [The Power Tech School](https://thepower.education/thepowermba/tech).

---

## English version

[Volver a la versión en castellano](#versión-en-castellano)

Hooks exercise from the FRONTEND [REACT] module of the **Rock The Code** master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech). The assignment asked to fetch data from an API (the Rick and Morty one), store it in state with `useState`, fire the request only once with `useEffect`, and render each character in a separate child component that receives the data through props.

The part that took me the most thinking was the image "flip": the brief makes clear that the state controlling the rotation has to live inside the child component (`Character`) itself, not in `App`, since every card flips independently. I solved it with a boolean state and a CSS class that applies `rotate(180deg)` when `isFlipped` is `true`.

### What it does

- `App` stores the characters in a state (`useState([])`).
- A `useEffect` with an empty dependency array makes the API request only once, on mount.
- Each character is rendered with the `Character` component, which receives the full object through props.
- `Character` keeps its own state (`isFlipped`) to know whether the image should flip on click.

### Structure

```text
src/
  App.jsx                    # Characters state + useEffect with the fetch
  App.css
  components/
    Character/
      Character.jsx          # Child component, receives the character through props
      Character.css
  main.jsx
  index.css
```

### Technologies

React 19, Vite and the [public Rick and Morty API](https://rickandmortyapi.com/).

### Local setup

```bash
git clone https://github.com/AraceliFradejas/ejerciciosES7-hooksreact.git
cd ejerciciosES7-hooksreact
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Project report

Requirements checklist and screenshots of the working app are in the [project report](MEMORIA.md).

### Social media

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Author

**Araceli Fradejas Muñoz** · Academic project for the Rock The Code master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech).

