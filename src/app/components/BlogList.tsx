'use client'

import { useEffect, useState } from "react";
import { PaginationControl } from "./PaginationControl";

export function BlogList() {
    const [cursor, setCursor] = useState<string>();
    const [formerCursors, setFormerCursors] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const _c = formerCursors[formerCursors.length - 1];
            const response = await fetch(`/api/blogs?cursor=${_c}`)
            const blogs = await response.json() as { id: string }[]
            setCursor(blogs[blogs.length - 1].id);
        })()

        return () => { }
    }, [formerCursors])

    return <>
        <PaginationControl {...{ cursor, setCursor, formerCursors, setFormerCursors }}>
        </PaginationControl>
    </>
}
