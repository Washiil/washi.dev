export type BlogPost = {
    title: string; // Title of the blog post
    description?: string; // Optional short description of the post
    author: string; // Author's name
    date: string; // Date of publication in ISO format
    tags?: string[]; // Optional list of tags for categorization
    draft?: boolean; // Indicates if the post is a draft
};
  