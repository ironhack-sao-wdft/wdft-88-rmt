// export function Exemplo(props) {
//   if (props.age < 16) {
//     return <h1>Você não pode ver esse filme</h1>;
//   }

//   if (props.age < 18 && props.haveParents === false) {
//     return <h1>Você não pode ver esse filme</h1>;
//   }

//   return <h1>Titulo do filme</h1>;
// }

// 16 NÃO PODE DE JEITO NENHUM
// < 18 + PAIS PODE
// 18+ PODE

// if( (props.agr < 16) || (outra condiça2p) )

export function Exemplo(props) {
  if (props.age < 16 || (props.age < 18 && props.haveParents === false)) {
    return <h1>Você não pode ver esse filme</h1>;
  }

  return <h1>Titulo do filme</h1>;
}
