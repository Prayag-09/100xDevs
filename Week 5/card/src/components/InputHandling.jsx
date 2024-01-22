/* eslint-disable react/prop-types */
function InputHandling({ handleInputs }) {
  return (
    <div>
      <input
        placeholder="Name"
        type="text"
        onChange={(e) => {
          handleInputs(e, 'name');
        }}
      />
      <br />
      <br />

      <input
        placeholder="Short Description"
        type="text"
        onChange={(e) => {
          handleInputs(e, 'description');
        }}
      />
      <br />
      <br />

      <input
        placeholder="Interests"
        type="text"
        onChange={(e) => {
          handleInputs(e, 'interests');
        }}
      />
      <br />
      <br />

      <input
        placeholder="Media Name"
        type="text"
        onChange={(e) => {
          handleInputs(e, 'linkName');
        }}
      />
      <br />
      <br />

      <input
        placeholder="Media Link"
        type="text"
        onChange={(e) => {
          handleInputs(e, 'link');
        }}
      />
      <br />
      <br />
    </div>
  );
}

export default InputHandling;
