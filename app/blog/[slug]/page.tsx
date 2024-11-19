
interface BlogPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = params;


    const formattedSlug = slug.replace(/-/g, ' '); 

    return (
        <div>
            <h1>Blog Title:</h1>
            <p>{formattedSlug}</p>
        </div>
    );
}
