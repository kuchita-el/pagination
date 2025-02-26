import { useState } from "react";

const button = "rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700";

export function PaginationControl({
    onBack = () => { },
    onNext = () => { },
    disabledBack = false,
    disabledNext = false
}: {
    onBack?: () => void;
    onNext?: () => void;
    disabledBack?: boolean;
    disabledNext?: boolean;
}) {

    const [numberOfPages, setNumberOfPages] = useState(1);

    const _disabledBack = disabledBack || numberOfPages === 1;

    const back = () => {
        if (!_disabledBack) {
            setNumberOfPages(numberOfPages - 1);
            onBack();
        }
    }

    const next = () => {
        if (!disabledNext) {
            setNumberOfPages(numberOfPages + 1);
            onNext();
        }
    }

    return (
        <div className="flex items-center gap-2" >
            <button className={button} onClick={back} disabled={_disabledBack} > 前へ </button>
            <div> {numberOfPages} </div>
            <button className={button} onClick={next} disabled={disabledNext} > 次へ </button>
        </div>
    )
}
