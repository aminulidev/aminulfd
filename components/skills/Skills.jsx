import Skill from "./Skill";
import {skillData} from './data';

const Skills = () => {
  return (
    <section id='skills' className='skills section_gap'>
        <div className="container skills_container">
            <div className="title">
                <h5>What I Know</h5>
                <h2>Skills</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="frontend">
                        <div className="row g-5">
                            {
                                skillData.map((data)=>{
                                    return <Skill key={data.id} icon={data.icon} iconClass={data.iconClass} title={data.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
