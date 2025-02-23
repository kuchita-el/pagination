import { useState } from "react";

const button = "rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700";

export function PaginationControl({
    cursor,
    formerCursors,
    setFormerCursors
}: {
    cursor?: string;
    setCursor: (value: string) => void;
    formerCursors: string[];
    setFormerCursors: (value: string[]) => void;
}) {

    const [numberOfPages, setNumberOfPages] = useState(1);

    const back = () => {
        setNumberOfPages(numberOfPages - 1);
        setFormerCursors(formerCursors.slice(0, formerCursors.length - 1))
    }

    const next = () => {
        if (cursor) {
            setNumberOfPages(numberOfPages + 1);
            setFormerCursors([...formerCursors, cursor]);
        }
    }

    const disabledBack = numberOfPages === 1;
    const disabledNext = cursor === undefined;

    return (
        <div className="flex items-center gap-2">
            <button className={button} onClick={back} disabled={disabledBack}>前へ</button>
            <div>{numberOfPages}</div>
            <button className={button} onClick={next} disabled={disabledNext}>次へ</button>
        </div>
    )
}
