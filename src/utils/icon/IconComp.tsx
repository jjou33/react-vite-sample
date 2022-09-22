const IconComp = (props: any) => {
  const { iconName } = props.list
  console.log(props.list)
  const path = require(`/images/${props.list}`)
  console.log(path)
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref=require("") />
      </svg>
    </div>
  )
}

export default IconComp
