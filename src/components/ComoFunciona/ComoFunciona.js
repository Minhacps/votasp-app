import React from 'react';
import PageLayout from '../PageLayout/PageLayout';

import PassosComoFunciona from './PassosComoFunciona';

import './ComoFunciona.css';
import './bootstrap.min.css';

const ComoFunciona = () => {
  return (
    <PageLayout>
      <section className="como-funciona">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="upper text-center titulo">Como Funciona?</h2>
            </div>
          </div>
          <div className="row descricao">
            <h4 className="text-center">
            O Meu Voto é um site que vai ajudar a população do Estado de São Paulo escolher seus candidatos e candidatas a deputado, deputada estadual e federal.
            </h4>
          </div>
          <PassosComoFunciona />
        </div>
      </section>
      <hr />
      <section className="algoritmo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="upper text-center titulo">Como é Feito o Cálculo do Ranking?</h2>
            </div>
            <div>
              <div className="row">
                <div className="col-12">
                  <p className="bold">1. Coletamos as respostas do eleitor ou da eleitora. </p>
                  <p>
                    2. Para cada pergunta respondida seguimos os seguintes passos: 
                  </p>
                  <div className="passosItem2">
                    <p>
                      a. Comparamos a resposta do eleitor ou da eleitora com a resposta do candidato ou candidata e pontuamos de acordo com a tabela abaixo:
                    </p>
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
                    <p>
                      b. Somamos todos os pontos obtidos e normalizamos os dados para obter o
                      percentual de afinidade.{' '}
                    </p>
                    <div className="passo2Itemb">
                      <p>
                        i. O máximo de pontos que um candidato ou candidata pode obter é o número de respostas do eleitor ou eleitora multiplicado por 4.
                      </p>
                      <p>
                        ii. Suponha que o eleitor ou eleitora tenha respondido 20 questões. O máximo portanto 
                        seria 20 * 4 = 80 pontos.{' '}
                      </p>
                      <p>
                        iii. Se o candidato ou candidata, a partir da tabela acima, obteve 60 pontos, dividimos 60 por 80, o que resulta no valor 0,75.
                      </p>
                      <p>
                        iv. Em seguida, multiplicamos esse valor por 100, o que resulta em um índice de afinidade de 75%, considerando assim as 20 respostas que o eleitor ou a eleitora respondeu.
                      </p>
                    </div>
                    <p>c. Fazemos esse mesmo cálculo para todos os candidatos e candidatas.</p>
                    <p>
                      d. Ordenamos de forma descendente pela pontuação de cada candidato ou candidata e exibimos uma lista por ordem de afinidade. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComoFunciona;
