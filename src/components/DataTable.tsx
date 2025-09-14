/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useCallback, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridApi, ModuleRegistry, themeBalham, themeMaterial } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import {
    Search,
    Download,
    RefreshCw,
    MoreHorizontal,
    ArrowUpDown,
    DollarSign,
    Calendar,
} from "lucide-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { themeAlpine } from 'ag-grid-community';
import { CustomPagination } from "./table/CustomPagination";
import { PriceRenderer } from "./table/section/PriceSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import CountryFormat from "./table/section/CountryFormat";


ModuleRegistry.registerModules([AllCommunityModule]);


// ✅ Sample Data
const SAMPLE_DATA = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
        salary: 85000,
        joinDate: "2023-01-15",
        performance: 92,
    },
    {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        role: "Manager",
        status: "Active",
        salary: 75000,
        joinDate: "2023-02-20",
        performance: 88,
    },
];

const SAMPLE_HEADERS = [
    "id",
    "name",
    "email",
    "role",
    "status",
    "salary",
    "joinDate",
    "performance",
];

// ✅ Reusable Button
const ActionButton: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost";
}> = ({ children, onClick, variant = "secondary" }) => {
    const base =
        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1";
    const styles = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
        secondary:
            "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
        ghost:
            "text-gray-600 hover:bg-gray-100 focus:ring-gray-300 border border-transparent",
    };
    return (
        <button onClick={onClick} className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
};

// ✅ Custom Cell Renderers
const StatusBadge: React.FC<{ value: string }> = ({ value }) => {
    const active = value?.toLowerCase() === "active";

    return (
        <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${active
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
                }`}
        >
            {value}
        </span>
    );
};

const CurrencyCell: React.FC<{ value: number }> = ({ value }) => (
    <div className="flex items-center gap-1 text-gray-900 font-medium">
        <DollarSign className="w-4 h-4 text-gray-500" />
        {value?.toLocaleString() || 0}
    </div>
);

const DateCell: React.FC<{ value: string }> = ({ value }) => {
    if (!value) return <span className="text-gray-400">-</span>;
    const date = new Date(value);
    return (
        <div className="flex items-center gap-1 text-gray-700">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-xs">
                {date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
            </span>
        </div>
    );
};

// ✅ DataTable
export const DataTable: React.FC<{
    data?: any[];
    headers?: string[];
}> = ({ data = SAMPLE_DATA, headers = SAMPLE_HEADERS }) => {
    const [gridApi, setGridApi] = useState<GridApi | null>(null);
    const [quickFilterText, setQuickFilterText] = useState("");
    const [currency, setCurrency] = useState('USD');
    // Columns
    const columnDefs: ColDef[] = useMemo(() => {
        return headers.map((header) => {
            console.log("header", header)
            const colDef: ColDef = {
                field: header,
                headerName:
                    header.charAt(0).toUpperCase() +
                    header.slice(1).replace(/([A-Z])/g, " $1"),
                sortable: true,
                filter: true,
                resizable: true,
                flex: 1,
                minWidth: 140,
            };
            if (header === "status") {
                colDef.cellRenderer = (p: any) => <StatusBadge value={p.value} />;
            } else if (header.toLowerCase().includes("salary")) {
                colDef.cellRenderer = (p: any) => <CurrencyCell value={p.value} />;
                colDef.filter = "agNumberColumnFilter";
            } else if (header.toLowerCase().includes("date")) {
                colDef.cellRenderer = (p: any) => <DateCell value={p.value} />;
                colDef.filter = "agDateColumnFilter";
            } else if (["price", "amount", "money", "unitcost", "selling price", "sellingprice"].includes(header?.toLowerCase())) {
                colDef.cellRenderer = (p: any) => <PriceRenderer value={p.value} currency={currency} />;
                colDef.filter = "agPriceColumnFilter";
            } else if (["country"].includes(header.toLowerCase())) {
                colDef.cellRenderer = (p: any) => <CountryFormat value={p.value} />;
                // Fix: Use standard text filter instead of custom filter
                colDef.filter = "agTextColumnFilter";
                colDef.filterParams = {
                    filterOptions: ['contains', 'startsWith', 'endsWith'],
                    suppressAndOrCondition: true,
                    // Custom text matcher for country filtering
                    textMatcher: ({ value, filterText }: { value: any, filterText: string }) => {
                        if (!value || !filterText) return false;

                        // Handle both string values and objects
                        const searchText = typeof value === 'object' ? value.name || value.code || '' : String(value);
                        return searchText.toLowerCase().includes(filterText.toLowerCase());
                    }
                };
            }
            return colDef;
        });
    }, [headers, currency]);

    // Filters
    const handleQuickFilter = useCallback(
        (val: string) => {
            setQuickFilterText(val);
            gridApi?.setGridOption("quickFilterText", val);
        },
        [gridApi]
    );

    const resetFilters = useCallback(() => {
        gridApi?.setFilterModel(null);
        setQuickFilterText("");
        gridApi?.setGridOption("quickFilterText", "");
    }, [gridApi]);

    const exportData = useCallback(
        (format: "csv" | "excel") => {
            if (format === "csv") {
                gridApi?.exportDataAsCsv({ fileName: "export.csv" });
            } else {
                gridApi?.exportDataAsExcel({ fileName: "export.xlsx" });
            }
        },
        [gridApi]
    );

    const autoSizeStrategy = useMemo(() => {
        return {
            type: 'fitCellContents',
            defaultMinWidth: 200,
            skipHeader: true
        };
    }, []);




    return (
        <div className="min-h-dvh bg-white">
            {/* Header */}
            <div className="border-b bg-white">
                <div className="mx-auto max-w-full px-6 py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Data Analytics
                        </h1>
                        <p className="text-xs text-gray-600">
                            Clean and interactive data visualization
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <ActionButton onClick={resetFilters}>
                            <RefreshCw className="h-4 w-4" /> Reset
                        </ActionButton>
                        <ActionButton onClick={() => exportData("csv")}>
                            <Download className="h-4 w-4" /> CSV
                        </ActionButton>
                        <ActionButton onClick={() => exportData("excel")}>
                            <Download className="h-4 w-4" /> Excel
                        </ActionButton>
                        <ActionButton variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                        </ActionButton>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="mx-auto max-w-full px-6 py-4 flex justify-between items-center">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={quickFilterText}
                        onChange={(e) => handleQuickFilter(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                {/* Currency selector */}
                <div >
                    <Select
                        value={currency}
                        onValueChange={(value) => setCurrency(value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                            <SelectItem value="INR">INR (₹)</SelectItem>
                            <SelectItem value="GBP">GBP (£)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            <div className="mx-auto max-w-full px-6 pb-12">
                <div
                    className="ag-theme-quartz"
                    style={{ height: "auto", width: "100%" }}
                >
                    <div
                        // className="ag-theme-quartz border rounded-sm overflow-hidden"
                        style={{ width: "100%", maxHeight: "600px", borderRadius: "12px" }}
                    >
                        <AgGridReact
                            rowData={data}
                            columnDefs={columnDefs}
                            pagination={true}
                            paginationPageSize={10}
                            domLayout="autoHeight"
                            rowHeight={40}
                            headerHeight={40}
                            rowStyle={{
                                display: "flex",
                                alignItems: "center",
                                fontSize: "12px",
                                border: "0",
                                // borderBottom: "1px solid #E5E7EB",
                            }}
                            defaultColDef={{
                                cellStyle: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    paddingLeft: "12px",
                                    paddingRight: "12px",
                                    border: 0
                                },
                                headerStyle: {
                                    fontWeight: "400",
                                    textAlign: "center",
                                    border: 0,
                                    textDecoration: "uppercase",
                                    backgroundColor: "#fafafa",

                                },

                            }}
                            theme={themeMaterial}
                            rowSelection="multiple"
                            suppressPaginationPanel
                            context={{ currency }}
                            autoSizeStrategy={autoSizeStrategy}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
