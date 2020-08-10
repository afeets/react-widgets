import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  // change state of dropdown
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if( ref.current.contains(event.target)){
        return;
      }
      // required to close dropdown if click outside of element
      setOpen(false);
    }

    // Setup event listener
    document.body.addEventListener('click', onBodyClick);

    // Cleanup remove eventListener
    return() => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {

    // Don't display in list if already selected
    if (option.value === selected.value){
      return null;
    }

    return(
      <div
        key={ option.value }
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        { option.label }
      </div>
    );
  });

  console.log(ref.current);

  return(
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a colour</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : '' }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            { selected.label }
          </div>
          <div
            className={`menu ${open ? 'visible transition' : ''}`}
          >
            { renderedOptions }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
