export function Button(props) {
  return (
    <div>
      <h1>{props.qualquerCoisa}</h1>
      <button>{props.children}</button>
    </div>
  );
}
