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
    const checkWidth = () => setIsWide(window.innerWidth > 768);
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
                {isWide ? (
                  <span>
                    PREVISÃO DE <br /> VENDAS DE
                    <br /> PRODUTOS
                  </span>
                ) : (
                  <span>
                    PREVISÃO DE VENDAS
                    <br /> DE PRODUTOS
                  </span>
                )}
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
                    NECESSIDADE MÍNIMA <br />
                    DE ARRECADAÇÃO
                  </span>
                </LineTitle>
                <Number>
                  <span class="percentage">25%</span>
                </Number>
              </LineContent>
              <LineRect />
              <LineVertManutencao>
                <LineInfo>
                  <div>
                    Arrecadações para <br />
                    custos do espaço <br />e nosso trabalho
                  </div>
                </LineInfo>
              </LineVertManutencao>
            </Line>
          ) : (
            <Line>
              <LineContent>
                <LineTitle>
                  <span>
                    NECESSIDADE
                    <br />
                    MÍNIMA DE
                    <br />
                    ARRECADAÇÃO
                  </span>
                </LineTitle>
                <div class="pagaOsCustos">
                  <Number>
                    <span class="percentage">25%</span>
                  </Number>
                  <LineInfo>
                    <span class="arrecadacoes">
                      Paga os custos <br />
                      do espaço e do
                      <br /> nosso trabalho
                    </span>
                  </LineInfo>
                </div>
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
                  <span class="percentage">30%</span>
                </Number>
              </div>
            ) : (
              <div class="contribuicaoSugerida">
                <LineTitle>
                  <div>
                    CONTRIBUIÇÃO
                    <br />
                    SUGERIDA
                  </div>
                </LineTitle>
                <Number>
                  <span class="percentageDesktop">30%</span>
                </Number>
                <LineRect />
              </div>
            )}
            <LineVertManutencao>
              <span class="ouMais">OU MAIS</span>
              <LineInfo>
                <span>
                  Para manutencão e ampliacão <br />
                  (equilibra as contas e possibilita <br />
                  investir no projeto)
                </span>
              </LineInfo>
              <LineRect />
            </LineVertManutencao>
          </LineVert>
        </ContribuicaoColRight>
      </ContribuicaoContainer>
    </ContribuicaoSection>
  );
}

export default Contribuicao;
