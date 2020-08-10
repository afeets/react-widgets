import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
  // assign default value
  const [ selected, setSelected ] = useState( options[0] );

  const [showDropdown, setShowDropdown] = useState(true);


  // toggle visibility of dropdown //
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      { showDropdown ?
        <Dropdown
        selected={ selected }
        options={options}
        onSelectedChange={ setSelected }
        /> : null
      }
    </div>
  );
};
