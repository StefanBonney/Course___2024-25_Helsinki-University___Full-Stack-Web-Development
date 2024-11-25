const Course = ({ course }) => {
    console.log('Course (course)', course)
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };
  
  const Header = ({ name })  => {
    console.log('Header (name)', name)
    return (
      <h2>{name}</h2>
    )
  }
  
  const Content = ({ parts }) => {
    console.log('Content (parts)', parts)
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    );
  };
  
  const Part = ({ name, exercises }) => {
    console.log('Part (name, exercises)', name, exercises)
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };
  
  
  const Total = ({parts}) => {
    console.log('Total (parts)', parts)
    return (
      <p>
        <b>
          total of {parts.reduce((sum, part) => {
            console.log('Sum:', sum, 'Next add:', part);
            return sum + part.exercises;
          }, 0)} exercises
        </b>
      </p>
    )
  }
  
    export default Course;