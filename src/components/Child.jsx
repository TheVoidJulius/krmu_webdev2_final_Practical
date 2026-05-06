const Child = (props) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>Child Component</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Child;