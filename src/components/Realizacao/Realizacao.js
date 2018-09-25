import React from 'react';
import './Realizacao.scss';

import Picture from './Picture/Picture';

import Amanda from '../../img/realizacao/Amanda.png';
import Anderson from '../../img/realizacao/Anderson.png';
import Andre from '../../img/realizacao/Andre.png';
import Bruno from '../../img/realizacao/Bruno.png';
import Claudia from '../../img/realizacao/Claudia.png';
import Eduardo from '../../img/realizacao/Eduardo.png';
import Elisa from '../../img/realizacao/Elisa.png';
import Gabriel from '../../img/realizacao/GRibeiro.png';
import Giulia from '../../img/realizacao/Giulia.png';
import Guilherme from '../../img/realizacao/Guilherme.png';
import Henrique from '../../img/realizacao/Henrique.png';
import Juliana from '../../img/realizacao/Juliana.png';
import Lai from '../../img/realizacao/Lai.png';
import Lucas from '../../img/realizacao/Lucas.png';
import Marcelo from '../../img/realizacao/Marcelo.png';
import Mathias from '../../img/realizacao/Mathias.png';
import Vanessa from '../../img/realizacao/Vanessa.png';
import VMiguez from '../../img/realizacao/VMiguez.png';
import VPerin from '../../img/realizacao/VPerin.png';

const realizacao = () => {
  const persons = [
    { name: 'Amanda Yoshizumi', picture: Amanda, role: 'UX Designer', altPicture: 'Foto da realizadora' },
    { name: 'Anderson Silva', picture: Anderson, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'André Bordignon', picture: Andre, role: 'IFSP', altPicture: 'Foto da realizadora' },
    { name: 'Bruno Wowk', picture: Bruno, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Claudia Oliveira', picture: Claudia, role: 'Minha Campinas', altPicture: 'Foto da realizadora' },
    { name: 'Eduardo Silva', picture: Eduardo, role: 'Minha Campinas', altPicture: 'Foto da realizadora' },
    { name: 'Elisa Mueller', picture: Elisa, role: 'Minha Campinas', altPicture: 'Foto da realizadora' },
    { name: 'Gabriel Ribeiro', picture: Gabriel, role: 'Batman', altPicture: 'Foto da realizadora' },
    { name: 'Giulia Losnak', picture: Giulia, role: 'Jornalista', altPicture: 'Foto da realizadora' },
    { name: 'Guilherme Luchesi', picture: Guilherme, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Henrique Degrecci', picture: Henrique, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Juliana Patete', picture: Juliana, role: 'Minha Campinas', altPicture: 'Foto da realizadora' },
    { name: 'Lai Xuancheng', picture: Lai, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Lucas Guima', picture: Lucas, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Marcelo Nisida', picture: Marcelo, role: 'Midiólogo', altPicture: 'Foto da realizadora' },
    { name: 'Mathias Geno', picture: Mathias, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Vanessa Souza', picture: Vanessa, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Victor Miguez', picture: VMiguez, role: 'Developer', altPicture: 'Foto da realizadora' },
    { name: 'Vitor Perin', picture: VPerin, role: 'Developer', altPicture: 'Fotos da realizadora' }
  ];

  let page = [];
  persons.forEach(person => {
    page.push(
      <Picture
        key={person.name}
        name={person.name}
        picture={person.picture}
        role={person.role}
      />
    )
  });

  return (
    <section className='Realizacao'>
      <h2>Realização</h2>
      <p>
        O site Meu Voto / Vota SP foi idealizado pela <a href="http://www.minhacampinas.org.br" target="_blank">Minha Campinas</a>, uma organização que tem por objetivo buscar uma maior participação da população nas tomadas de decisão de interesse público da cidade.
      </p>
      <p>
        Participaram da realização do projeto o <a href="https://www.cmp.ifsp.edu.br/" target="_blank">Instituto Federal de São paulo campus Campinas</a> e o Front End Campinas: um grupo de programadores e programadoras independentes que utilizam tecnologia para a construção de um sociedade melhor.
    </p>
      {page}
    </section>
  );
}

export default realizacao;
