/*

  <If test={cond}>
    <span>...</span>
    <span>...</span>
    <span>...</span>

    <Else>
      <span>...</span>
    </Else>
  </If>

*/

export default (props) => {
  const elseChild = props.children.filter(child => {
    return child.type && child.type.name === 'Else'
  })[0]

  const otherChildren = props.children.filter(child => {
    return child !== elseChild
  })

  if (props.test) {
    return otherChildren
  } else if (elseChild) {
    return elseChild
  } else {
    return false
  }
}

export const Else = (props) => {
  return props.children
}