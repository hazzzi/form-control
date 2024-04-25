import { useState } from 'react';

const FormWithUncontrolled = () => {
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const age = data.get('age');
    const email = data.get('email');
    console.log({ name, age, email });
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    setDisabled(!event.currentTarget.reportValidity());
  };

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChangeForm}>
      <label>
        Name: <span className="req">*</span>
        <input type="text" name="name" required />
      </label>
      <label>
        Age:
        <input type="number" name="age" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button disabled={disabled}>submit</button>
    </form>
  );
};

export default FormWithUncontrolled;
