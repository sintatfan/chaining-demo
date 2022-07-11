import {createContext, useContext} from "react";
import CountDown from "../CountDown";
import ProjectMainView from "./ProjectMainView";

const ProjectContext = createContext(null);

function Sidebar() {
    const project = useContext(ProjectContext);

    return (
        <div className="project-view__sidebar">
            <div style={{flex: 1}}></div>
            <CountDown target={project.expiry_time.toDate()} />
        </div>
    );
}

export default function ProjectView({project}) {
    console.log(project);
    return (
        <ProjectContext.Provider value={project}>
            <div className="project-view">
                <ProjectMainView />
                <Sidebar />
            </div>
        </ProjectContext.Provider>
    );
}