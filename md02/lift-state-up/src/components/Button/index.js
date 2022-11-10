import Dog from "../../assets/dog.png";
import Cat from "../../assets/cat.jpg";

export function Button(props) {
  function handleChangeImg(e) {
    if (e.target.innerText === "Dog") {
      props.onClick(Dog);
    } else {
      props.onClick(Cat);
    }
  }

  return (
    <button onClick={handleChangeImg} className="btn btn-primary m-2">
      {props.children}
    </button>
  );
}
