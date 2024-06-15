'use client';

import NavBar from './components/navbar/navbar';
import Image from 'next/image';
import Section from './components/sections';
import React, { useState } from 'react';
import { LinkList } from './core/link/linkList';
import { LinkUnic } from './core/link/linkUnic';
import Button from './core/button';
import ImageComponent from './core/image';

export default function Home() {
  const [navbarClass, setNavbarClass] = useState('navbar');

  const menu = () => {
    if (navbarClass === 'navbar') {
      setNavbarClass('navbar navbar--responsive');
    } else {
      setNavbarClass('navbar');
    }
  };

  return (
    <body>
      <div id="home" className="header">
        <ImageComponent
          src="/assets/images/codigos-de-carreira-logo.svg"
          alt="Logo do podcast Códigos de Carreira"
          width={165}
          height={57}
          className="header__logo"
        />
      </div>

      <NavBar
        links={[
          { path: '#home', label: 'Home', className: ['navbar__option'] },
          { path: '#sobre', label: 'Sobre', className: ['navbar__option'] },
          {
            path: '#episodios',
            label: 'Episódios',
            className: ['navbar__option'],
          },
          {
            path: '#contato',
            label: 'Contato',
            className: ['navbar__option'],
          },
          {
            path: 'https://anchor.fm/codigosdecarreira',
            label: 'Ouvir',
            className: ['navbar__option', 'navbar__option--cta'],
          },
        ]}
        onClickHandler={menu}
        customClass={navbarClass}
      />

      <div className="main-container">
        <Section
          titles={['Códigos de Carreira', 'Podcast']}
          subtitle={
            'Um podcast com insights capazes de transformar sua jornada profissional'
          }
          className={['introduction']}
        >
          <LinkList links={[]} />

          <Button
            imageSrc="/assets/images/spotify.webp"
            width={200}
            height={50}
            className="music-service"
            ariaLabel="Ouvir no Spotify"
            href={
              'https://open.spotify.com/show/0rnYFVAu6Pdx2HngU2DD3x?si=4c842f1b76484eea'
            }
            type="button"
          />

          <Button
            imageSrc="/assets/images/apple-podcasts.webp"
            width={200}
            height={50}
            className="music-service"
            ariaLabel="Ouvir no Apple Podcasts"
            href={
              'https://podcasts.apple.com/br/podcast/c%C3%B3digos-de-carreira/id1536203584'
            }
            type="button"
          />
        </Section>

        <Section
          titles={[
            'O melhor podcast pra quem se interessa por carreiras na área de tecnologia',
          ]}
          paragraphs={[
            'O Códigos de Carreira é um podcast que tem como objetivo ajudar você a se desenvolver profissionalmente. Aqui, você encontra insights e dicas para alavancar sua carreira e se destacar no mercado de trabalho.',
          ]}
          className={['welcome']}
        ></Section>
      </div>
    </body>
  );
}
