import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ecosystemData, getProjectBySlug } from "@/lib/ecosystem-data";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";

// Generate static routes for all ecosystem projects at build time (Great for SEO)
export function generateStaticParams() {
  return ecosystemData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Quantachain Ecosystem`,
    description: project.description,
  };
}

export default function EcosystemProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/ecosystem" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Ecosystem
          </Link>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center p-3 flex-shrink-0 shadow-sm">
                  <Image src={project.logo} alt={project.name} width={50} height={50} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
                      {project.name}
                    </h1>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full border border-gray-200 bg-white text-[10px] font-bold tracking-wider uppercase text-gray-500">
                      {project.category}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      project.status === "Live" 
                        ? "border border-[#C4ED5F] bg-[#C4ED5F]/10 text-[#7bb800]" 
                        : "border border-blue-200 bg-blue-50 text-blue-600"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black border border-gray-200 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-gray max-w-none mb-10">
              <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>About the Project</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-4" style={{ fontFamily: "var(--font-syne)" }}>Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#7bb800] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
