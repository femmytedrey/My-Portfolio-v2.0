import { NextRequest, NextResponse } from "next/server";
import { Project } from "@/models/projectModel";
import { connectToDb } from "@/lib/dbConfig/connectToDb";
import { response } from "@/types/error";

export const GET = async () => {
  try {
    await connectToDb();
    const projects = await Project.find({}).sort({ createdAt: -1 });

    const transformedProjects = projects.map((project) => ({
      id: project._id.toString(),
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      image: project.image,
      technologies: project.technologies,
      category: project.category,
      featured: project.featured,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      date: project.date.toISOString().split("T")[0],
      status: project.status,
    }));

    return NextResponse.json({
      success: true,
      projects: transformedProjects,
    });
  } catch (error) {
    console.error("Get projects error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectToDb();
    const reqBody = await request.json();
    const {
      title,
      description,
      longDescription,
      image,
      technologies,
      category,
      featured,
      liveUrl,
      githubUrl,
      date,
      status,
    } = reqBody;

    const newProject = new Project({
      title,
      description,
      longDescription,
      image,
      technologies,
      category,
      featured,
      liveUrl,
      githubUrl,
      date,
      status,
    });

    const savedProject = await newProject.save();

    return NextResponse.json({
      success: true,
      message: "Project created successfully",
      project: savedProject,
    });
  } catch (error) {
    // console.error("Project creation error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to create project";

    return response({ success: false, message: errorMessage, status: 500 });
  }
};
