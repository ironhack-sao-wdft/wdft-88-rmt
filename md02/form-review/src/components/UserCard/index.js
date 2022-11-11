export function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <strong>Email:</strong> <span>{props.email}</span>
      <strong>Senha:</strong> <span>{props.password}</span>
      <Link to={`/user/${props.id}`}></Link>
    </div>
  );
}
