'use client';

import { Hero } from './Hero';
import { Intro } from './Intro';
import { CEO } from './CEO';
import { Curriculum } from './Curriculum';
import { Portfolio } from './Portfolio';
import { Announcer } from './Announcer';
import { Partners } from './Partners';

export function MainPage() {
  return (
    <>
      <Hero />
      <Intro />
      <CEO />
      <Curriculum />
      <Portfolio />
      <Announcer />
      <Partners />
    </>
  );
}
