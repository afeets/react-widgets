import React, { useState } from 'react';

const Accordion = ( {items} ) =>{
  // array destructuring
  // initialize new piece of state
  const [activeIndex, setActiveIndex] = useState(null);

  // helper function
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {

    // determine if item is active, if true assign to variable which is then 
    // used in the classname for the div

    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>{item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

export default Accordion;
