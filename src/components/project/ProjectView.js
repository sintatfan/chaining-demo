import ProjectMainView from "./ProjectMainView";
import Sidebar from "./Sidebar";

export default function ProjectView() {
    return (
        <div className="project-view">
            <ProjectMainView />
            <Sidebar />
        </div>
    );
}