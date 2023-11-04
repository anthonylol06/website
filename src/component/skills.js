import '../style/skills.css'

function skills() {
    const skills = ["Java", "Javascript", "CSS", "HTML", "Flutter", "C++", "C", "UNIX", "MySQL", "React.JS", "Node.JS", "Python", "RISC-V"];
    const skillsmap = skills.map(
        (skills) => 
        <li>{skills}</li>
    )
    
    return (
        <div className="Skills">
            <p>Skills</p>
            {skillsmap}
        </div>
    );
}

export default skills