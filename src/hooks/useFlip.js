import { useState } from 'react';

const useFlip = () => {
  const [value, setValue] = useState(true);
  const flip = () => {
    setValue((oldValue) => !oldValue);
  };

  return [value, flip];
};

export default useFlip;
