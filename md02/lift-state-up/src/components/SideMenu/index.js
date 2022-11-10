import { Button } from "../Button";

export function SideMenu(props) {
  return (
    <div className="m-2">
      <Button onClick={props.changeImgFunction}>Dog</Button>
      <Button onClick={props.changeImgFunction}>Cat</Button>
    </div>
  );
}
