import Child from './Child.jsx';

const Parent = () => {
  const name = "pulkit";
  const version = "1.0.0";
  const age = 19;

  return (
    <div style={{ padding: '20px', border: '2px solid #646cff', borderRadius: '8px' }}>
      <h2>Parent Component (v{version})</h2>
      <Child name={name} age={age} />
    </div>
  );
};

export default Parent;