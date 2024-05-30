import { usePathname, useSearchParams, useRouter } from 'next/navigation'; // Import useRouter
import React from 'react';
import Link from 'next/link';

export default function Pagination() {
    const searchParams = useSearchParams();
    const router = useRouter(); // Use useRouter hook
    const pathname = usePathname();
    const page = searchParams.get("page") || 1;
    const params = new URLSearchParams(searchParams);

    const ITEM_PER_PAGE = 2;
    const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
    const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < 6;

    const handleChangePage = (type) => {
        if (type === "prev") {
            params.set("page", parseInt(page) - 1);
        } else if (type === "next") {
            params.set("page", parseInt(page) + 1);
        }
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <Link href="/prev">
                    <button className='bg-green-900 p-2 rounded-lg text-xs font-semibold' disabled={!hasPrev} onClick={() => handleChangePage("prev")}>--Previous</button>
                </Link>
                <Link href="/rere">
                    <button className='bg-green-900 p-2 rounded-lg text-xs font-semibold' disabled={!hasNext} onClick={() => handleChangePage("next")}>Next++</button>
                </Link>
            </div>
        </div>
    );
}
