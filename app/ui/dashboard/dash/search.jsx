'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams); // Retain existing search params
        params.set("page", 1)
        // Update the 'q' parameter based on input value
        if (e.target.value) {
            e.target.value.length > 2 && params.set("q", e.target.value);
        } else {
            params.delete("q");
        }

        // Replace the current route with the new search params
        router.replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="search-container">
            <div className="flex flex-row items-center gap-2 border-none bg-sky-800 p-2 pr-1 pl-3 text-white rounded-lg">
                <FaSearch className='flex flex-row size-3' />
                <input
                    placeholder={placeholder}
                    type='text'
                    className='text-xs border-none bg-sky-800 outline-none pl-1 placeholder-white'
                    onChange={handleSearch}
                />
            </div>
        </div>
    );
};

export default Search;
