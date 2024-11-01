export async function getStaticPaths() {
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

    const paths = projects.map((project) => ({
        params: { kat: project.slug.toString() },
    }));

    return {
        paths,
        fallback: true, // No fallback, so 404 is shown for non-existent paths
    };
}

export async function getStaticProps({ params }) {
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

    const project = projects.find((p) => p.slug == params.kat);

    return {
        props: {
            project,
        },
    };
}

export default function ProjectsDetailPage({ project }) {
    return (
        <div>
            <h1>{project.title}</h1>
            {/* Display other project details here */}
        </div>
    );
}