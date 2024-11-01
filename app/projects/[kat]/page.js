export async function generateStaticParams() {
    const projectSlugs = ['ecopedia', 'plantanator', 'smart-sheet'];
  
    return {
      paths: projectSlugs.map((slug) => ({ params: { kat: slug } })),
      fallback: false,
    };
  }

export default function ProjectsDetailPage({params}){
    return(
        <div className="pt-[104px] md:pt-[136px]">
            <h1 className="text-h1 font-bold ">Projects Detail Page {params.kat}</h1>
        </div>
    )
}