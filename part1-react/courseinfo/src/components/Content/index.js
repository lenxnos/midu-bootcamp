import Part from './Part'

const Content = ({
  parts
 }) => (
  <div>
    { parts
      .map(({ name, exercises }, index) => (
        <Part key={index} part={name} exercise={exercises} />
        )
      )
    }
  </div>
)

export default Content
