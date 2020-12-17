import React, { useState, useEffect } from 'react';

import Card from './Card';

// import { Scrollbar } from "react-scrollbars-custom";

const sampledesc = `A weasel /ˈwiːzəl/ is a mammal of the genus Mustela of the
family Mustelidae. The genus Mustela includes the least
weasels, polecats, stoats, ferrets and mink. Members of this
genus are small, active predators, with long and slender
bodies and short legs. The family Mustelidae (which also
includes badgers, otters, and wolverines) is often referred to
as the "weasel family". In the UK, the term "weasel" usually
refers to the smallest species, the least weasel (M.
nivalis).[1] Weasels vary in length from 173 to 217 mm (6.8 to
8.5 in),[2] females being smaller than the males, and usually
have red or brown upper coats and white bellies; some
populations of some species moult to a wholly white coat in
winter. They have long, slender bodies, which enable them to
follow their prey into burrows. Their tails may be from 34 to
52 mm (1.3 to 2.0 in) long.[2] Weasels feed on small mammals
and have from time to time been considered vermin because some
species took poultry from farms or rabbits from commercial
warrens. They do, on the other hand, eat large numbers of
rodents. They can be found all across the world except for
Australia, Antarctica, and the neighbouring islands. A weasel
/ˈwiːzəl/ is a mammal of the genus Mustela of the family
Mustelidae. The genus Mustela includes the least weasels,
polecats, stoats, ferrets and mink. Members of this genus are
small, active predators, with long and slender bodies and
short legs. The family Mustelidae (which also includes
badgers, otters, and wolverines) is often referred to as the
"weasel family". In the UK, the term "weasel" usually refers
to the smallest species, the least weasel (M. nivalis).[1]
Weasels vary in length from 173 to 217 mm (6.8 to 8.5 in),[2]
females being smaller than the males, and usually have red or
brown upper coats and white bellies; some populations of some
species moult to a wholly white coat in winter. They have
long, slender bodies, which enable them to follow their prey
into burrows. Their tails may be from 34 to 52 mm (1.3 to 2.0
in) long.[2] Weasels feed on small mammals and have from time
to time been considered vermin because some species took
poultry from farms or rabbits from commercial warrens. They
do, on the other hand, eat large numbers of rodents. They can
be found all across the world except for Australia,
Antarctica, and the neighbouring islands. A weasel /ˈwiːzəl/
is a mammal of the genus Mustela of the family Mustelidae. The
genus Mustela includes the least weasels, polecats, stoats,
ferrets and mink. Members of this genus are small, active
predators, with long and slender bodies and short legs. The
family Mustelidae (which also includes badgers, otters, and
wolverines) is often referred to as the "weasel family". In
the UK, the term "weasel" usually refers to the smallest
species, the least weasel (M. nivalis).[1] Weasels vary in
length from 173 to 217 mm (6.8 to 8.5 in),[2] females being
smaller than the males, and usually have red or brown upper
coats and white bellies; some populations of some species
moult to a wholly white coat in winter. They have long,
slender bodies, which enable them to follow their prey into
burrows. Their tails may be from 34 to 52 mm (1.3 to 2.0 in)
long.[2] Weasels feed on small mammals and have from time to
time been considered vermin because some species took poultry
from farms or rabbits from commercial warrens. They do, on the
other hand, eat large numbers of rodents. They can be found
all across the world except for Australia, Antarctica, and the
neighbouring islands.`;

const сardData = [
  {
    id: 'c',
    title: 'Telecaster',
    text: sampledesc,
    price: '1',
    image: '/images/guitar1.jpg',
  },
  {
    id: 'f',
    title: 'Fender American Special Stratocaster MN Elitg Deluxe',
    text: sampledesc,
    price: '1',
    image: '/images/guitar2.jpg',
  },
  {
    id: 'a',
    title: 'Martin',
    text: sampledesc,
    price: '1',
    image: '/images/guitar3.jpg',
  },
  {
    id: 'g',
    title: 'Martin',
    text: sampledesc,
    price: '1',
    image: '/images/guitar4.jpg',
  },
  {
    id: 'd',
    title: 'Ukulele',
    text: sampledesc,
    price: '1',
    image: '/images/guitar5.jpg',
  },
  {
    id: 'h',
    title: 'PRS Custom 22',
    text: sampledesc,
    price: '1',
    image: '/images/guitar6.jpg',
  },
];

const CardList = ({ match, history }) => {
  useEffect(() => {
    const { id } = match.params;
    const exists = сardData.find(el => el.id === id);
    if (id && !exists) {
      history.push('/404');
    }
  }, [match]);

  return (
    <ul className="card-section">
      {сardData.map(card => (
        <Card
          key={card.id}
          isSelected={match.params.id === card.id}
          history={history}
          {...card}
        />
      ))}
    </ul>
  );
};

export default CardList;
