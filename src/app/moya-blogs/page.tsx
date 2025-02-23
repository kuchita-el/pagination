'use client'

import { PaginationControl } from "@/components/PaginationControl";
import { useEffect, useState } from "react";

export function BlogList() {
    const [cursor, setCursor] = useState<string>();
    const [formerCursors, setFormerCursors] = useState<string[]>([]);

    const fetchBlogs = async (cursor?: string) => {
        const response = await fetch(`/api/blogs?cursor=${cursor}`)
        const blogs = await response.json() as { id: string }[]
        return {
            blogs: blogs,
            cursor: blogs[blogs.length - 1].id
        }
    }

    useEffect(() => {
        const _cursor = formerCursors.length === 0 ? undefined : formerCursors[formerCursors.length - 1];
        fetchBlogs(_cursor)
            .then(data => {
                setCursor(data.cursor);
            })
        return () => { }
    }, [formerCursors])

    return <>
        <PaginationControl {...{ cursor, setCursor, formerCursors, setFormerCursors }}>
        </PaginationControl>
    </>
}
