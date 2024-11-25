/*
App
  1 - Course
  2 -   Header
  3 -   Content
  4 -     Part
          Part
          ...
*/


// 1 - Course: course.name, course.parts
const Course = ({ course }) => {
  console.log('Course (course)', course)
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

// 2 - Header: course.name
const Header = ({ name })  => {
  console.log('Header (name)', name)
  return (
    <h1>{name}</h1>
  )
}

// 3 - Content: part.id, part.name, part.exercises
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

// 4 - Part: part.name, part.exercises
const Part = ({ name, exercises }) => {
  console.log('Part (name, exercises)', name, exercises)
  return (
    <p>
      {name} {exercises}
    </p>
  );
};


const Total = ({course}) => {
  console.log('Total (course)', course)
  return (
    <p><b> total of {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises} exercises </b></p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

export default App