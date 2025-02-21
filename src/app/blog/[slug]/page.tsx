'use client'

import { useParams } from "next/navigation";

export default function BlogPage() {
    const params = useParams(); // `useParams` is synchronous in Client Components

    return (
        <div>
            <h1 className="text-zinc-200 text-4xl">{params.slug}</h1>
        </div>
    );
}
