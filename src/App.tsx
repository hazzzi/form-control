import './App.css';
import FormWithControlled from './FormWithControlled';
import FormWithUncontrolled from './FormWithUncontrolled';

function App() {
  return (
    <>
      <section>
        <h1>uncontrolled form</h1>
        <FormWithUncontrolled />
      </section>
      <section>
        <h1>controlled form</h1>
        <FormWithControlled />
      </section>
    </>
  );
}

export default App;
