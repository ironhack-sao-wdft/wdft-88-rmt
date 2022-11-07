import style from "./style.module.css";

function Card(props) {
  return (
    <>
      <div className="test">
        <h2 className={style.title}>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.img} alt="Foto" />
      </div>

      <button>Clique aqui!</button>
    </>
  );
}

export default Card;
