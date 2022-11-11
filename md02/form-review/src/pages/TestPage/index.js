import { useParams } from "react-router-dom";

export function TestPage() {
  const params = useParams();

  console.log(params);

  return <h1>Oi</h1>;
}
