'use client'

import { MoyaPaginationControl } from "@/components/MoyaPaginationControl";
import { useEffect, useState } from "react";

export function BlogList() {
    const [cursor, setCursor] = useState<string>();
    const [formerCursors, setFormerCursors] = useState<string[]>([]);

    const fetchBlogs = async (cursor?: string) => {
        const response = await fetch(`/api/blogs?cursor=${cursor}`)
        const data = await response.json() as {
            blogs: { id: string }[],
            cursor?: string;
        }
        return data
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
        <MoyaPaginationControl {...{ cursor, setCursor, formerCursors, setFormerCursors }}>
        </MoyaPaginationControl>
    </>
}
