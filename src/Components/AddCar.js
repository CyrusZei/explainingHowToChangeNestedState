import React from 'react';

const AddCar = ({ addcar, getInput, stateData }) => {
  return (
    <div>
      <h1>add car</h1>
      <input
        type="text"
        placeholder="Enter car name"
        onChange={e => getInput(e)}
        value={stateData.carinput}
      />
      <button onClick={addcar}>add car</button>
    </div>
  );
};
export default AddCar;
