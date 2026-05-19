import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/data/projects";

export async function GET(request: NextRequest) {
  try {
    // Ambil query parameter ?tech=NestJS
    const { searchParams } = new URL(request.url);
    const tech = searchParams.get("tech");

    // Filter berdasarkan tech kalau ada query-nya
    const filtered = tech
      ? projects.filter((project) =>
          project.tech.some((t) =>
            t.toLowerCase().includes(tech.toLowerCase()),
          ),
        )
      : projects;

    return NextResponse.json(
      { success: true, data: filtered, total: filtered.length },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data projects!" },
      { status: 500 },
    );
  }
}
