'use client';

import { Hero } from './Hero';
import { Intro } from './Intro';
import { CEO } from './CEO';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Announcer } from './Announcer';
import { Partners } from './Partners';

export function MainPage() {
  return (
    <>
      <Hero />
      <Intro />
      <CEO />
      <Services />
      <Portfolio />
      <Announcer />
      <Partners />
    </>
  );
}
