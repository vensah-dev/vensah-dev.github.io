import React
 from "react";
export async function generateStaticParams() {
    const projectSlugs = ['ecopedia', 'plantanator', 'smart-sheet'];
  
    return {
      paths: projectSlugs.map((slug) => ({ params: { kat: slug } })),
      fallback: false,
    };
  }
  
  // Rest of your page component code here