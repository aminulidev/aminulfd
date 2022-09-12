import './ExperienceItem';
import {experienceData} from './data';
import ExperienceItem from './ExperienceItem';

export default function Experience() {
    return (
        <section id="experience" className="experience section_gap">
            <div className="container experience_container">
                <div className="title">
                    <h5>Previous Company</h5>
                    <h2>Experience</h2>
                </div>
                <div className="row g-4 row-cols-12 row-cols-md-2 row-cols-lg-3 ">

                    {
                        experienceData.map((data) => {
                            return <ExperienceItem key={data.id} designation={data.designation} company={data.company} duration={data.duration} />
                        })
                    }

                </div>
            </div>
        </section>
    )
}
