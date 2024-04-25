import { useState } from 'react';

type FormData = {
  name: string;
  age: string;
  email: string;
};

const FormWithControlled = () => {
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    email: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChangeInputField = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setDisabled(value === '');
    }

    setFormData((prev) => ({ ...(prev || {}), [name]: value }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name: <span className="req">*</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChangeInputField}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChangeInputField}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChangeInputField}
        />
      </label>
      <button disabled={disabled}>submit</button>
    </form>
  );
};

export default FormWithControlled;
