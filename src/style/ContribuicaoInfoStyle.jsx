import styled from "styled-components";
import { Section, ContentContainer } from "./PageContainers";
import { Icon } from "@iconify/react";
import { ReactFitty } from "react-fitty";

export const ContribuicaoSection = styled(Section)`
  box-shadow: 0px -10px 12px rgba(0, 0, 0, 0.1); /* Horizontal offset, vertical offset, blur radius, color */
  font-family: "MDNichrome";
  letter-spacing: 0.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: var(--color-brown2);

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100dvh; */
  }

  color: white;
  /* background-color: lightpink; */
`;

export const ContribuicaoContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* height: 100dvh; */
  width: 100dvw;

  @media (min-width: 1200px) {
    /* width: 100%; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  /* background-color: #d3d3d330; */
`;

export const ContribuicaoColLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* max-width: 700px; */
  /* height: 100%; */
  /* margin-bottom: 30px; */
  @media (min-width: 1200px) {
    /* justify-content: space-around; */
    width: 100%;
    /* max-width: 60dvw; */
    align-items: start;
  }

  /* background-color: #f080806b; */
`;

export const ContribuicaoColRight = styled.div`
  /* justify-content: space-around; */
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 50%; */

  @media (min-width: 1200px) {
    /* width: 30%; */
    /* max-width: 400px; */
    /* justify-content: center; */
    /* align-items: center; */

    /* width: 40dvw; */
    /* height: 100dvh; */
  }

  /* background-color: lightgreen; */
`;

export const Line = styled.div`
  /* width: 100%; */
  width: 100%;

  max-width: 800px;

  @media (min-width: 1200px) {
    max-width: 100%;
    /* width: 100%; */
  }
  /* background-color: #3d70cf6b; */
`;

export const LineVert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;

  .contribuicaoSugerida {
    background-color: #3d70cf6b;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    max-width: 300px;
    flex-direction: column;
    .contribuicaoSugerida {
      background-color: #3d70cf6b;
      flex-direction: row;
      width: 100%;
    }
  }
`;

export const LineVertManutencao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  .ouMais {
    font-size: calc(2 * var(--contribuicao-texto-small-screen));
    width: 100%;
    text-align: end;
  }

  span {
    /* margin: 8px 0px; */
  }

  @media (min-width: 1200px) {
    align-items: start;

    .ouMais {
      font-size: calc(2 * var(--contribuicao-texto-big-screen));
      /* margin: 8px 0px; */
      width: 100%;
      text-align: start;
    }
  }
  /* background-color: #a14dbb6b; */
`;

export const LineRect = styled.div`
  height: 2px;
  background-color: white;
  transform: translateZ(0);
  backface-visibility: hidden;
  will-change: transform;
`;

export const LineContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  /* background-color: lightblue; */
`;

export const ContribuicaoSugerida = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1200px) {
    align-items: start;
    flex-direction: column;
  }
  /* background-color: #3d70cf6b; */
`;

export const LineInfo = styled.span`
  font-family: "Hanken Grotesk", sans-serif;
  font-size: var(--contribuicao-texto-small-screen) !important;
  letter-spacing: 0.02em;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  text-align: end;
  /* width: 100%; */

  /* background-color: #583a0d; */

  @media (min-width: 1200px) {
    align-items: start;
    min-width: 300px;
    font-size: var(--contribuicao-texto-big-screen) !important;
    flex-direction: column;
    justify-content: start;
    text-align: start;
    /* width: 100dvw; */
    max-width: 25%;
  }
`;

export const LineTitle = styled.div`
  display: flex;
  flex-direction: row;
  /* max-width: 40%; */
  /* justify-content: space-between; */
  align-items: start;
  font-size: var(--contribuicao-titulos-small-screen);
  width: 40%;

  /* background-color: #00003f2f; */

  @media (min-width: 1200px) {
    flex-direction: column;
    width: 100%;
    font-size: var(--contribuicao-titulos-big-screen);
  }
`;
// export const Number = styled(ReactFitty)`
export const Number = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  /* height: 100%; */

  font-size: var(--contribuicao-numeros-small-screen);
  /* height: 10px; */
  .number {
    line-height: 0.8;
  }
  .reais {
    font-size: calc(0.8 * var(--contribuicao-numeros-small-screen));
    overflow: visible;
  }

  .percentage25 {
    line-height: 0.8;
    font-size: calc(2.8 * var(--contribuicao-numeros-small-screen));
  }
  /* background-color: darkgoldenrod; */
  .percentage30 {
    line-height: 0.8;
    font-size: calc(3 * var(--contribuicao-numeros-small-screen));
  }
  /* background-color: darkgoldenrod; */

  @media (min-width: 1200px) {
    font-size: var(--contribuicao-numeros-big-screen);
    justify-content: end;
    .number {
      line-height: 0.6;
      transform: translateY(-10px);
    }
    .reais {
      font-size: calc(0.33 * var(--contribuicao-numeros-big-screen));
      overflow: visible;
    }

    .percentage {
      line-height: 0.8;
      font-size: calc(1.6 * var(--contribuicao-numeros-big-screen));
    }
  }
  /* background-color: #00800067; */
`;

export const IconWrapper = styled(Icon)`
  /* font-size: calc(0.8 * var(--contribuicao-icon-size)); */
  font-size: var(--contribuicao-icon-size);
  margin: 2dvh 0;

  @media (min-width: 1200px) {
    margin: 3dvh 0;
    font-size: calc(1.4 * var(--contribuicao-icon-size));
  }
`;

export default {
  ContribuicaoSection,
  ContribuicaoContainer,
  ContribuicaoColLeft,
  ContribuicaoColRight,
  Line,
  LineVert,
  LineVertManutencao,
  LineRect,
  LineContent,
  ContribuicaoSugerida,
  LineInfo,
  LineTitle,
  Number,
  IconWrapper,
};
