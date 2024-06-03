import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

export default function Pagination() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const page = parseInt(searchParams.get("page") || '1', 10);
    const params = new URLSearchParams(searchParams);

    const ITEM_PER_PAGE = 2;
    const totalItems = 6; // Replace with actual total items count from your fetch
    const hasPrev = page > 1;
    const hasNext = ITEM_PER_PAGE * page < totalItems;

    const handleChangePage = (type) => {
        if (type === "prev" && hasPrev) {
            params.set("page", page - 1);
        } else if (type === "next" && hasNext) {
            params.set("page", page + 1);
        }
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className='flex flex-row justify-between'>
            <button
                className='bg-green-900 p-2 rounded-lg text-xs font-semibold'
                disabled={!hasPrev}
                onClick={() => handleChangePage("prev")}
            >
                --Previous
            </button>
            <button
                className='bg-green-900 p-2 rounded-lg text-xs font-semibold'
                disabled={!hasNext}
                onClick={() => handleChangePage("next")}
            >
                Next++
            </button>
        </div>
    );
}
