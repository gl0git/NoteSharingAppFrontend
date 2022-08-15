import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Dropdown.css'

function SearchbarDropdown(props){
  const { options, onInputChange, placeholder, page, hrefAdditionals } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder={placeholder}
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.slice(0, 6).map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
                window.location.href = `http://localhost:3000/${page}/${option}${hrefAdditionals}`
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};



export default SearchbarDropdown