import React from 'react';
import BgChange from '../hooks/useState/BgChange';
import ButtonTrigger from '../hooks/useState/ButtonTrigger';
import Management from '../hooks/useState/CheckboxesManagement';
import Toggle from '../hooks/useState/ToggleVisibility';
import Counter from '../hooks/useState/Counter';

function US() {
  return (
    <div className="App">
      <h2>useState</h2>
      <h3>1. Counter Application</h3>
      <Counter />
      <h3>2. Background color changer</h3>
      <BgChange />
      <h3>3. Toggle Visibility</h3>
      <Toggle />
      <h3>4. Button Trigger</h3>
      <ButtonTrigger />
      <h3>5. Checkbox Management</h3>
      <Management />
    </div>
  );
}

export default US;
