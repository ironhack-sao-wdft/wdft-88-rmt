import { Score } from "../Score";

export function Card(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.overview}</p>

      <Score score={props.score} />

      <img
        src={`https://image.tmdb.org/t/p/w500${props.imgSrc}`}
        alt={props.title}
      />
    </div>
  );
}
