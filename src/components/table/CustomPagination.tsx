/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronLeft, ChevronRight } from "lucide-react";

// 🎯 Custom Pagination Component
export const CustomPagination: React.FC<{
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    pageSize: number;
    onPageSizeChange: (size: number) => void;
    totalItems: number;
}> = ({ currentPage, totalPages, onPageChange, pageSize, onPageSizeChange, totalItems }) => {
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let l;

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1);
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push('...', totalPages);
        } else {
            rangeWithDots.push(totalPages);
        }

        return rangeWithDots;
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Show</span>
                    <select
                        value={pageSize}
                        onChange={(e) => onPageSizeChange(Number(e.target.value))}
                        className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                    >
                        <option value={5100}>100</option>
                        <option value={200}>200</option>
                        <option value={500}>500</option>
                        <option value={1000}>1000</option>
                    </select>
                    <span className="text-sm text-gray-600">entries</span>
                </div>
                <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold text-gray-900">{startItem}</span> to{' '}
                    <span className="font-semibold text-gray-900">{endItem}</span> of{' '}
                    <span className="font-semibold text-gray-900">{totalItems}</span> results
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1">
                    {totalPages <= 1 ? null : getVisiblePages().map((page, index) => (
                        page === '...' ? (
                            <span key={index} className="px-3 py-1.5 text-gray-400">...</span>
                        ) : (
                            <button
                                key={index}
                                onClick={() => onPageChange(Number(page))}
                                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${currentPage === page
                                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};