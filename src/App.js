import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components'
  }
];

const options = [
  {
    label: 'The colour red',
    value: 'red'
  },
  {
    label: 'The colour green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
];

export default () => {

  // toggle visibility of dropdown //
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
