import { createGlobalStyle } from "styled-components";

// import { GudeaRegular, DidactGothicRegular, MonstserratAlternatesRegular } from '../../../public/fonts/fonts'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Gudea;
    src: local('Gudea'), url('fonts/Gudea/Gudea-Bold.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Didact Gothic';
    src:  local('Didact Gothic'), local('DidactGothic'), url('fonts/Didact_Gothic/Didact_Gothic-Regular.tff) format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Alt';
    src: local('MontserratAlt'), local('Montserrat Alt'), url('fonts/Montserrat_Alternates/MontserratAlternates-Regular.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }

  body {
    font-family: Gudea, Nunito, Roboto, sans-serif;
  }
`

export { GlobalStyles }
