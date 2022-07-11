import {createContext} from "react";
import ProjectMainView from "./ProjectMainView";
import Sidebar from "./Sidebar";

export const ProjectContext = createContext(null);

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