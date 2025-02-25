import styled, { createGlobalStyle } from 'styled-components';
import flowersPurple from 'images/mac-flowers.jpg'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

:root {
    --main-beige: rgb(242, 215, 217);
    --main-pastel-beige: white;
    --main-peach: rgb(116, 141, 166);
}

* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-family: 'Cabin', sans-serif;
}

section:nth-child(2n) {
    background-color: var(--main-pastel-beige);
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex; 
    flex-direction: column; 
}

section:nth-child(2n+1) {
    background-color: var(--main-beige);
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex; 
    flex-direction: column; 
}

h2 {
    font-family: 'Cabin', sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 40px;
}

h2 span {
    background-color: var(--main-peach);
    padding: 0 0.2em;
    border-radius: 5px;
}

a:link {
    color: black;
    text-decoration-line: none;
}

a:visited {
    color: black;
    text-decoration-line: none;
}

a:hover {
    font-weight: bold;
}

header {
    height: 520px;
    position: relative;
    background-size: cover;
    background-image: url(${flowersPurple});
}

footer {
    background-color: var(--main-peach);
    padding-top: 84px;
    padding-bottom: 84px;
}
`
export const Container = styled.div`
display: flex; 
flex-direction: column; 

@media (min-width: 768px){
    display: flex; 
    flex-direction: column; 
    width: 440vw;
    margin: 0 auto;
}

@media (min-width: 1024px){
    width: 60vw;
    margin: 0 auto;
    position: relative;
}
`
export const Hidden = styled.span`
    position:absolute;
    left:-10000px;
    top: auto;
    width:1px;
    height:1px;
    overflow:hidden;
`

export default GlobalStyles;