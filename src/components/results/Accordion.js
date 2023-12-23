import React from 'react';


export default function Accordion({ accordion }) {

  return (
    <div>
      <div className={accordion ? 'panelDown' : 'panelUp'}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet mattis neque, nec varius orci. Integer ultricies sagittis mattis. Nunc sed est fermentum, lacinia nunc et, laoreet massa. Aliquam pretium justo non lorem aliquam consequat. Aenean eget justo ac magna consectetur tincidunt eu et nulla. Donec tincidunt nulla egestas, posuere lacus sit amet, bibendum ex. Aliquam erat volutpat. Vivamus quis viverra risus.</p>
      </div>
    </div>
  )
}