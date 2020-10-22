//TODO
/*
<div id="pups">
  PupListEntry
  PupListEntry
  PupListEntry
  PupListEntry
  PupListEntry
</div>
*/
import React from 'react';
import PupListEntry from './PupListEntry.jsx';
import _ from 'lodash';

var PupList = function(props) {
  return (
    <div id="pups">
      {props.pupArray.map((pup) => (
        <PupListEntry pupName= {'pupper'} pupImg={pup}/>
      ))}
    </div>
  )
}

export default PupList