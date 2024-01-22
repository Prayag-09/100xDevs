/* eslint-disable no-unused-vars */
import { useState } from 'react';
import InputHandling from './components/InputHandling';
import CardsName from './components/CardsName';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [intrests, setIntrests] = useState('');
  const [link, setLink] = useState('');
  const [linkName, setlinkName] = useState('');

  function handleInputs(value, setValue) {
    setValue(value.target.value);
  }

  return (
    <div>
      <InputHandling handleInputs={handleInputs} />
      <CardsName
          name={name}
          description={description}
          intrests={intrests}
          link={link}
          linkName={linkName}
      />
    </div>
  );
}

export default App;