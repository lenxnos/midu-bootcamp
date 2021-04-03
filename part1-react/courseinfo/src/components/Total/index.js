const Total = ({ parts }) => {

  const total = parts.reduce((prev, item) => {
    const { exercises } = item
    return prev + exercises
  }, 0)

  return <p>Number of exercises {total}</p>
}

export default Total
