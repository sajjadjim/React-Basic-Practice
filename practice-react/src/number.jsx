export default function NewIfElse({ value }) {
  if (value > 5) {
    return (
      <div style={{ color: 'red', fontWeight: 'bold' }}>
        <p>Lower Number: {value}</p>
      </div>
    );
  } else {
    return (
      <div style={{ color: 'green', fontWeight: 'bold' }}>
        <p>Higher Number: {value}</p>
      </div>
    );
  }
}
