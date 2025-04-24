// import styled from "styled-components"

// import Card from "../../components/Card"


// const TechSection = ({ title, tech }) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       {tech.map((item) => {
//         return (
//           <Card
//             key={item.title}
//             title={item.title}
//             tags={item.tags.join(", ")}
//           />
//         )
//       })}
//     </>

//   )

// }
//export default TechSection



const TechSection = ({ tech }) => {
  return (
    <div>
      {tech.map((tech) => (
        <div key={tech.title}>
          <h3>{tech.title}</h3>
          <ul>
            {tech.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TechSection