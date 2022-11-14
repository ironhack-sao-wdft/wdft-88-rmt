export function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.img} alt={props.original_title} />
      <div class="card-body">
        <h5 class="card-title">{props.original_title}</h5>
        <p class="card-text">{props.overview}</p>
        <a href="#" class="btn btn-primary">
          Saiba mais
        </a>
      </div>
    </div>
  );
}
