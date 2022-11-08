export function Score(props) {
  return props.score >= 7.8 ? (
    <div style={{ backgroundColor: "green" }}>
      <strong>{props.score}</strong>
    </div>
  ) : (
    <div style={{ backgroundColor: "red" }}>
      <strong>{props.score}</strong>
    </div>
  );
}

// If e Else > condição ? se for true : se for false

// So if > condição && se for true
