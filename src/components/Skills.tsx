import '../assets/comp-skill-list.css'

type SkillListProps = {
  data: Array<Skill>
}

export default function SkillList({ data }: SkillListProps) {
  return (
    <ul className='skill-list'>
      {data.map((skill: Skill) => {
        let props: { title?: string } = {};
        if (skill.experience) {
          props.title = `${skill.experience} years of experience`;
        }
        return (
          <li key={skill.id} {...props}>{skill.name}</li>
        );
      })}
    </ul>
  );
}