import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

import './ComoFunciona.css';
import './bootstrap.min.css';

import icone1 from '../../img/icone-01.svg';
import icone2 from '../../img/icone-02.svg';
import icone3 from '../../img/icone-03.svg';
import icone4 from '../../img/icone-04.svg';

const ComoFunciona = () => {
  return (
    <PageLayout>
      <section className="como-funciona">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="upper text-center titulo">
                Como Funciona
              </h2>
            </div>
          </div>
          <div className="row descricao">
            <h4 className="text-center">
              O projeto VotaSP nasceu com o objetivo de ajudar a população do
              estado de São Paulo a escolher os seus candidatos a deputado
              Estadual e Federal com mais co;nciência com base no que defendem em
              suas campanhas.
            </h4>
          </div>
          <div>
            <div className="row">
              <div className="col-6">
                <figure className="passos passo1">
                  <img
                    className="icone"
                    src={icone1}
                    alt="Icone do questionário"
                  />
                </figure>
                <p className="bold">
                  Você responde um questionário de (no mínimo) 21 questões.
                </p>
              </div>
              <div className="col-6">
                <figure className="passos passo2">
                  <img
                    className="icone"
                    src={icone2}
                    alt="Icone do cruzamento das suas respostas com as dos candidatos e candidatas."
                  />
                </figure>
                <p>
                  Nós cruzamos as suas respostas com os candidatos e candidatas
                  cadastradas.
                </p>
              </div>
              <div className="col-6">
                <figure className="passos passo3">
                  <img
                    className="icone"
                    src={icone3}
                    alt="Icone 3 dos candidatos com mais afinidade com você."
                  />
                </figure>
                <p>
                  Te informamos quem dos candidatos e candidatas pensam mais
                  parecido com você.
                </p>
              </div>
              <div className="col-6">
                <figure className="passos passo4">
                  <img
                    className="icone"
                    src={icone4}
                    alt="Icone 4. Você pode olhar as respostas de todos os candidatos e candidatas."
                  />
                </figure>
                <p>
                  Você pode olhar as respostas e perfil de todos eles e elas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="algoritmo"> 
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="upper text-center titulo">
                Como é Feito o Cálculo do Ranking
              </h2>
            </div>
            <div>
              <div className="row">
                <div className="col-12">
                  <p className="bold">1. Coletamos as respostas do eleitor ou da eleitora. </p>
                  <p>2. Para cada pergunta respondida seguimos os passos seguintes para cada candidato(a)</p>
                  <div className="passosItem2">
                    <p>a. Comparamos a resposta x do eleitor com a resposta x do candidato e pontuamos de acordo com a tabela abaixo:</p>
                    <div>
                      <table className="tabelaRanking">
                        <thead className="bold">
                          <tr>
                            <td>Resposta do Eleitor(a)</td>
                            <td>Resposta do Candidato(a)</td>
                            <td>Pontuação do Candidato(a)</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Discordo Plenamente</td>
                            <td>Discordo Plenamente</td>
                            <td className="number">4</td>
                          </tr>
                          <tr>
                            <td>Discordo Plenamente</td>
                            <td>Discordo</td>
                            <td className="number">2</td>
                          </tr>
                          <tr>
                            <td>Discordo Plenamente</td>
                            <td>Concordo</td>
                            <td className="number">-3</td>
                          </tr>
                          <tr>
                            <td>Discordo Plenamente</td>
                            <td>Concordo Plenamente</td>
                            <td className="number">-4</td>
                          </tr>
                          {}
                          <tr>
                            <td>Discordo</td>
                            <td>Discordo Plenamente</td>
                            <td className="number">2</td>
                          </tr>
                          <tr>
                            <td>Discordo</td>
                            <td>Discordo</td>
                            <td className="number">4</td>
                          </tr>
                          <tr>
                            <td>Discordo</td>
                            <td>Concordo</td>
                            <td className="number">-2</td>
                          </tr>
                          <tr>
                            <td>Discordo</td>
                            <td>Concordo Plenamente</td>
                            <td className="number">-3</td>
                          </tr>
                          {}
                          <tr>
                            <td>Concordo</td>
                            <td>Discordo Plenamente</td>
                            <td className="number">-3</td>
                          </tr>
                          <tr>
                            <td>Concordo</td>
                            <td>Discordo</td>
                            <td className="number">-2</td>
                          </tr>
                          <tr>
                            <td>Concordo</td>
                            <td>Concordo</td>
                            <td className="number">4</td>
                          </tr>
                          <tr>
                            <td>Concordo</td>
                            <td>Concordo Plenamente</td>
                            <td className="number">2</td>
                          </tr>
                          {}
                          <tr>
                            <td>Concordo Plenamente</td>
                            <td>Discordo Plenamente</td>
                            <td className="number">-4</td>
                          </tr>
                          <tr>
                            <td>Concordo Plenamente</td>
                            <td>Discordo</td>
                            <td className="number">-3</td>
                          </tr>
                          <tr>
                            <td>Concordo Plenamente</td>
                            <td>Concordo</td>
                            <td className="number">2</td>
                          </tr>
                          <tr>
                            <td>Concordo Plenamente</td>
                            <td>Concordo Plenamente</td>
                            <td className="number">4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>b. Somamos todos os pontos obtidos e normalizamos os dados para obter o percentual de afinidade. </p>
                    <div className="passo2Itemb">
                      <p>i. O máximo de pontos que um candidato(a) pode obter é o número de respostas do eleitor multiplicado por 4, que é a pontuação máxima.</p>
                      <p>ii. Suponha que o eleitor(a) tenha respondido 20 questões. O máximo portanto seria 20 * 4 = 80. </p>
                      <p>iii. Se o candidato(a), a partir da tabela acima, obteve 60 pontos dividimos 60 por 80 o que resulta no valor 0,75.</p>
                      <p>iv. Multiplicamos esse valor por 100 o que resulta em um índice de afinidade de 75% considerando as 20 respostas que o eleitor(a) respondeu.</p>
                    </div>
                    <p>c. Fazemos esse mesmo cálculo para todos os candidatos e candidatas.</p>
                    <p>d. Ordenamos de forma descendente pela pontuação de cada candidato e exibimos os 100 melhores pontuados como possibilidade do usuário(a) ver todos(as)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </PageLayout >
  );
};

export default ComoFunciona;
