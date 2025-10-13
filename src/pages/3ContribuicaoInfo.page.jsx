import React, { useEffect, useState } from "react";

import {
  ContribuicaoSection,
  ContribuicaoContainer,
  ContribuicaoColLeft,
  ContribuicaoColRight,
  Line,
  LineVert,
  LineVertManutencao,
  LineRect,
  LineContent,
  LineInfo,
  Number,
  LineTitle,
  IconWrapper,
} from "../style/ContribuicaoInfoStyle.jsx";

function Contribuicao() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth > 1200);
    checkWidth(); // run on mount
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <ContribuicaoSection id="contribuicao">
      <ContribuicaoContainer>
        <ContribuicaoColLeft>
          <Line>
            <LineContent>
              <LineTitle>
                <span>TOTAL DE CUSTOS</span>
              </LineTitle>
              <Number>
                <span class="reais">R$</span>
                <span class="number">680.900</span>
              </Number>
            </LineContent>
            <LineRect />
          </Line>
          <IconWrapper icon="pepicons-pop:division-circle" />

          <Line>
            <LineContent>
              <LineTitle>
                <span>
                  PREVISÃO DE <br /> VENDAS DE
                  <br /> PRODUTOS
                </span>
              </LineTitle>
              <Number>
                <span class="reais">R$</span>
                <span class="number">2.725.500</span>
              </Number>
            </LineContent>
            <LineRect />
          </Line>
          <IconWrapper icon="pepicons-pop:equal-circle" />

          {!isWide ? (
            <Line>
              <LineContent>
                <LineTitle>
                  <span>
                    NECESSIDADE <br />
                    MÍNIMA DE <br />
                    ARRECADAÇÃO
                  </span>
                </LineTitle>
                <Number className="vert">
                  <span class="percentage25">25%</span>
                </Number>
              </LineContent>
              <LineRect />
              <LineVertManutencao>
                <LineInfo>
                  <div>
                    Arrecadações para custos <br /> do espaço e nosso trabalho
                  </div>
                </LineInfo>
              </LineVertManutencao>
            </Line>
          ) : (
            <Line>
              <LineContent>
                <LineTitle>
                  <span>
                    NECESSIDADE <br />
                    MÍNIMA DE
                    <br /> ARRECADAÇÃO
                  </span>
                </LineTitle>
                <Number>
                  <LineInfo>
                    <span class="arrecadacoes">
                      De arrecadações
                      <br /> para pagar os custos <br />
                      do espaço e do
                      <br /> nosso trabalho
                    </span>
                  </LineInfo>
                  <span class="percentage25">25%</span>
                </Number>
              </LineContent>
              <LineRect />
            </Line>
          )}
        </ContribuicaoColLeft>
        <ContribuicaoColRight>
          <LineVert>
            {!isWide ? (
              <div class="contribuicaoSugerida">
                <LineTitle style={{ textAlign: "end" }}>
                  CONTRIBUIÇÃO
                  <br />
                  SUGERIDA
                </LineTitle>
                <Number>
                  <span class="percentage30">30%</span>
                </Number>
              </div>
            ) : (
              <div>
                <LineTitle>
                  <div class="contribuicaoSugerida">
                    CONTRIBUIÇÃO
                    <br />
                    SUGERIDA
                  </div>
                </LineTitle>
                <Number>
                  <span class="percentage">30%</span>
                </Number>
              </div>
            )}
            <LineRect />
            <LineVertManutencao>
              <span class="ouMais">OU MAIS</span>
              <LineInfo>
                <span>
                  Para manutencão e ampliacão <br />
                  (equilibra as contas e possibilita <br />
                  investir no projeto)
                </span>
              </LineInfo>
            </LineVertManutencao>
            <LineRect />
          </LineVert>
        </ContribuicaoColRight>
      </ContribuicaoContainer>
    </ContribuicaoSection>
  );
}

export default Contribuicao;
