import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`


:root {
--bold:700;
--regular:400;
--transition-3: all 0.3s ease-in-out;
--boxShadow-1: 0px 3px 25px 5px rgba(0,0,0,0.2);
--boxShadow-2: 0px 3px 25px 5px rgba(0,0,0,0.4);
--borderRadius: 15px;

--btnColor:#FFFFFF ;
--btnBgColor:#0079FF ;
--btnHoverBgColor:#60ABFF ;
--errorColor:#F74646;
}
.lightTheme{
  --bgColor:#F6F8FF;
  --fontColor:#4B6A9B;
  --appBgColor:#FEFEFE;
  --headingColor:#2B3442;
  --logoColor:#222731;
  --themeBtnColor: #697C9A;
  --themeBtnHoverColor:#222731;

}

.darkTheme{
  --bgColor:#141D2F;
  --fontColor:#FFFFFF;
  --appBgColor:#1E2A47;
  --headingColor:#FFFFFF;
  --logoColor:#FFFFFF;
  --themeBtnColor: #FFFFFF;
  --themeBtnHoverColor:#90A4D4;

}

*, *::before, *::after{
  padding: 0;
	margin: 0;
	box-sizing:border-box;
  font: inherit;
}

html {
  color-scheme: light dark;
  font-size: 100%; /*16px*/
  height: 100%;
}


body {
  font-family: 'Space Mono', monospace;
  font-weight:var(--regular);
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--bgColor);
  color:var(--fontColor)
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
    text-decoration: none;
}

button {
  border-radius: var(--borderRadius);
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color:var(--btnBgColor);
  color:var(--btnColor);
  box-shadow: var(--boxShadow-1);
  outline: none;
  cursor: pointer;
  transition: var(--transition-3);
}

button:hover {
  box-shadow: var(--boxShadow-2);
  background-color:var(--btnHoverBgColor);
}
button:focus,
button:focus-visible {
  background-color:var(--btnHoverBgColor);
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
