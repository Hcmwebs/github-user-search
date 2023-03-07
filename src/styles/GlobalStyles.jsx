import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


:root {
--bold:700;
--regular:400;

  color-scheme: light dark;
  font-family: 'Space Mono', monospace;
}

*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}

html {
font-size: 100%; /*16px*/
height: 100%;
}


body {
  font-weight:var(--regular);
  min-height: 100vh;
  display: grid;
  place-items: center;
}

p {margin:0;}

h1, h2, h3, h4, h5 {
  margin: 0;
  font-weight:var(--bold);
  line-height: 1.3;
}
h1 {
  margin: 0;
  font-size: 1.802rem;
}

h2 {font-size: 1.602rem;}

h3 {font-size: 1.424rem;}

h4 {font-size: 1.266rem;}

h5 {font-size: 1.125rem;}

small, .text_small {font-size: 0.889rem;}

a {
    text-decoration: inherit;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

img, picture, svg {
  display: block;
  max-width:100%;
  object-fit: cover
}
.sectionCenter{
  width: 100%;
  padding-inline: 1.5rem;
}

`
export default GlobalStyles
