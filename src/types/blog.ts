import { ReactElement } from "react";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    tags: string[];
    published: boolean;
    content: ReactElement;
}