import {createContext, useContext} from "react";
import CountDown from "../CountDown";

const ProjectContext = createContext(null);

function Sidebar() {
    const project = useContext(ProjectContext);

    return (
        <div className="project-view__sidebar">
            <CountDown target={project.expiry_time.toDate()} />
        </div>
    );
}

export default function ProjectView({project}) {
    console.log(project);
    return (
        <ProjectContext.Provider value={project}>
            <div className="project-view">
                <Sidebar />
            </div>
        </ProjectContext.Provider>
    );
}