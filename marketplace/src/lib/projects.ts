import { ProjectDto } from "./projects.types";
import  prisma  from "./prisma"
import { ProjectModel } from "@/generated/prisma/models";


export async function getProjects(): Promise<ProjectDto[]> {
    const projects = await prisma.project.findMany();
    console.log("db: projects findMany", projects);

    return projects.map((project: ProjectModel) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        createdAt: project.createdAt,
    }));
}