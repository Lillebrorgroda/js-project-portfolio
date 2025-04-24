

const SkillSection = ({ skills }) => {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.title}>
          <h3>{skill.title}</h3>
          <ul>
            {skill.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;