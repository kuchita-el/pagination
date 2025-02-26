'use client'

import { PaginationControl } from "@/components/PaginationControl";
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
        return data;
    }

    useEffect(() => {
        fetchBlogs()
            .then(data => {
                setCursor(data.cursor);
            })
        return () => { }
    }, [])

    const onBack = async () => {
        return fetchBlogs(formerCursors[formerCursors.length - 1])
            .then(data => {
                setCursor(data.cursor);
                setFormerCursors(formerCursors.slice(0, formerCursors.length - 1))
            })
    }

    const onNext = async () => {
        if (cursor) {
            return fetchBlogs(cursor)
                .then(data => {
                    setCursor(data.cursor);
                    setFormerCursors([...formerCursors, cursor]);
                })
        }
    }


    return <>
        <PaginationControl {...{
            onBack,
            onNext,
            disabledNext: cursor === undefined
        }}>
        </PaginationControl>
    </>
}
