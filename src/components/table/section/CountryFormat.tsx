/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { countriesList } from '@/utils/Countries';
import React from 'react';

const CountryFormat = (props: any) => {
    const value = props?.value || "";

    // Handle cases where value might be undefined or null
    if (!value) {
        return <div className="flex items-center h-full">-</div>;
    }

    const getCountryInfo = (countryValue: string) => {
        // If the value is already an object with code and name
        if (typeof countryValue === 'object') {
            return countryValue;
        }

        // If it's a string, try to extract country info
        if (typeof countryValue === 'string') {
            return countriesList.find(it =>
                it.name === countryValue ||
                it.code === countryValue ||
                it.name.toLowerCase() === countryValue.toLowerCase() ||
                it.code.toLowerCase() === countryValue.toLowerCase()
            );
        }

        return { code: 'XX', name: countryValue };
    };

    const countryInfo = getCountryInfo(value);

    // Return early if no country info found
    if (!countryInfo) {
        return (
            <div className="flex items-center h-full">
                <span className="text-sm text-gray-700">{value}</span>
            </div>
        );
    }

    const flagUrl = `https://flagcdn.com/16x12/${countryInfo.code?.toLowerCase()}.png`;

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        // Hide the image if it fails to load instead of showing broken image
        e.currentTarget.style.display = 'none';
    };

    return (
        <div
            className="flex items-center gap-2 h-full py-1 w-full"
            style={{ pointerEvents: 'none' }} // This prevents the component from interfering with AG Grid's cell clicking
        >
            <img
                src={flagUrl}
                alt={`${countryInfo.name} flag`}
                className="w-4 h-4 object-contain rounded-sm border border-gray-200 flex-shrink-0"
                onError={handleImageError}
                draggable={false} // Prevent dragging
                style={{ pointerEvents: 'none' }} // Ensure image doesn't interfere with clicks
            />
            <span className="text-sm text-gray-700 truncate flex-1">
                {countryInfo.name}
            </span>
        </div>
    );
};

export default CountryFormat;