// export async function getStaticPaths() {


//     const paths = projects.map((project) => ({
//         params: { kat: project.slug.toString() },
//     }));

//     return {
//         paths,
//         fallback: true, // No fallback, so 404 is shown for non-existent paths
//     };
// }

export const generateStaticParams = async () => {
    const projects = [
        {
            title: "Ecopedia",
            tags: [
                {
                    title: "Competition",
                    color: "rgba(197, 204, 102, 0.5)",
                },
            ],
            path: "/projects/ecopedia",
            slug: "ecopedia",
            image: "/images/projects/ecopedia/thumbnail.png",
        },

        {
            title: "Plantanator",
            tags: [
                {
                    title: "Competition",
                    color: "rgba(197, 204, 102, 0.5)",
                },
            ],
            path: "/projects/plantanator",
            slug: "plantanator",
            image: "/images/projects/plantanator/thumbnail.png",

        },

        {
            title: "Smart Sheet",
            tags: [
                {
                    title: "SAP",
                    color: "rgba(103, 152, 119, 0.5)",
                },

                {
                    title: "Passion Project",
                    color: "rgba(216, 178, 255, 0.5)",
                },
            ],
            path: "/projects/smart-sheet",
            slug: "smart-sheet",
            image: "/images/projects/smart-sheet/thumbnail.png",

        },
    ];
   
    return projects.map((project) => ({
      slug: project.slug,
    }))
};

export default function ProjectsDetailPage({ params }) {
    return (
        <div>
            <h1>{params.kat}</h1>
            {/* Display other project details here */}
        </div>
    );
}