import { useState, useCallback } from "react";

const Teste = () => {
  const [name, setName] = useState('Bruno');
  const [age, setAge] = useState(21);

  // useMemo = referencia em variaveis(const, var, let)
  // useCallback = referencia de funcao

  const handleChangeName = useCallback(() => {
    console.log('alterou')
    setName((prev) => (prev === 'Bruno' ? 'Daniel' : 'Bruno'));
  }, []) ;

  const handleChangeAge = useCallback(() => {
      const newAge = 10 * age
      console.log('age atual', age, newAge)
    setAge((prev) => (prev === 21 ? 26 : 21));
  }, [age]);

  return (
    <div>
      <p>
        Idade:{age}
      </p>
      <br />
      <p>
        Nome:{name}
      </p>
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  );
};

export { Teste };
