/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/FileUpload';
import { DataTable } from '@/components/DataTable';
import { DataCharts } from '@/components/DataCharts';
import { CustomizationPanel } from '@/components/CustomizationPanel';
import { ChartCustomizationPanel } from '@/components/ChartCustomizationPanel';
import { Table, BarChart3, Upload, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-data-viz.jpg';

interface CustomizationOptions {
    fontSize: number;
    fontFamily: string;
    headerColor: string;
    rowColor: string;
    borderColor: string;
    stripedRows: boolean;
    cellPadding: number;
    borderWidth: number;
    headerFontWeight: string;
    animateRows: boolean;
    enableGrouping: boolean;
    enablePivot: boolean;
    enableCharting: boolean;
    rowHeight: number;
    headerHeight: number;
}

interface ChartCustomization {
    chartType: 'bar' | 'line' | 'area' | 'pie' | 'doughnut' | 'scatter' | 'composed' | 'radar';
    colorScheme: 'default' | 'vibrant' | 'pastel' | 'monochrome' | 'gradient' | 'neon' | 'earth';
    showGrid: boolean;
    showLegend: boolean;
    showTooltip: boolean;
    animation: boolean;
    animationDuration: number;
    strokeWidth: number;
    borderRadius: number;
    opacity: number;
    fontSize: number;
    fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';
    backgroundColor: string;
    gradientDirection: 'horizontal' | 'vertical' | 'radial';
    dataLabels: boolean;
    responsive: boolean;
    aspectRatio: '16:9' | '4:3' | '1:1' | '3:2';
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    chartTitle: string;
    showTrendline: boolean;
    stackedBars: boolean;
    smoothLines: boolean;
}

const Index = () => {
    const [data, setData] = useState<any[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCharts, setShowCharts] = useState(false);
    const [customization, setCustomization] = useState<CustomizationOptions>({
        fontSize: 14,
        fontFamily: 'Inter',
        headerColor: '#f1f5f9',
        rowColor: '#ffffff',
        borderColor: '#e2e8f0',
        stripedRows: true,
        cellPadding: 8,
        borderWidth: 1,
        headerFontWeight: '600',
        animateRows: true,
        enableGrouping: true,
        enablePivot: false,
        enableCharting: true,
        rowHeight: 35,
        headerHeight: 40,
    });
    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [chartCustomization, setChartCustomization] = useState<ChartCustomization>({
        chartType: 'bar',
        colorScheme: 'default',
        showGrid: true,
        showLegend: true,
        showTooltip: true,
        animation: true,
        animationDuration: 1000,
        strokeWidth: 2,
        borderRadius: 4,
        opacity: 80,
        fontSize: 12,
        fontWeight: 'normal',
        backgroundColor: '#ffffff',
        gradientDirection: 'horizontal',
        dataLabels: false,
        responsive: true,
        aspectRatio: '16:9',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        chartTitle: 'Data Visualization',
        showTrendline: false,
        stackedBars: false,
        smoothLines: true
    });

    const handleDataLoad = (newData: any[], newHeaders: string[]) => {
        setIsLoading(true);
        setTimeout(() => {
            setData(newData);
            setHeaders(newHeaders);
            setIsLoading(false);
        }, 500);
    };

    const handleExport = () => {
        if (data.length === 0) return;

        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'exported-data.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const hasData = data.length > 0;

    if (!hasData) {
        return (
            <div className="min-h-screen bg-gradient-secondary">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 gradient-bg opacity-10" />
                    <div className="relative container mx-auto px-4 py-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 animate-fade-in">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                                        <Sparkles className="h-4 w-4" />
                                        Data Visualization Tool
                                    </div>
                                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                                        Transform Your
                                        <span className="gradient-bg bg-clip-text text-transparent"> CSV Data</span>
                                    </h1>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        Upload, customize, and visualize your data with powerful tables and interactive charts.
                                        Drag & drop columns, customize styling, and export your results.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Table className="h-4 w-4 text-primary" />
                                        Interactive Tables
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <BarChart3 className="h-4 w-4 text-primary" />
                                        Dynamic Charts
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Upload className="h-4 w-4 text-primary" />
                                        Easy Import/Export
                                    </div>
                                </div>
                            </div>

                            asf
                        </div>
                    </div>
                </div>

                {/* Upload Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2">Get Started</h2>
                            <p className="text-muted-foreground">Upload your CSV file to begin exploring your data</p>
                        </div>
                        <FileUpload onDataLoad={handleDataLoad} isLoading={isLoading} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card shadow-soft">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h1 className="text-xl font-bold">Data Visualizer</h1>
                            <Separator orientation="vertical" className="h-6" />
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Table className={`h-4 w-4 ${!showCharts ? 'text-primary' : 'text-muted-foreground'}`} />
                                <Switch
                                    checked={showCharts}
                                    onCheckedChange={setShowCharts}
                                    id="view-toggle"
                                />
                                <BarChart3 className={`h-4 w-4 ${showCharts ? 'text-primary' : 'text-muted-foreground'}`} />
                                <Label htmlFor="view-toggle" className="text-sm font-medium cursor-pointer">
                                    {showCharts ? 'Charts' : 'Table'}
                                </Label>
                            </div>

                            <Button
                                onClick={() => {
                                    setData([]);
                                    setHeaders([]);
                                }}
                                variant="outline"
                                size="sm"
                            >
                                New File
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            {/* <div className="container mx-auto px-4 py-6"> */}
            {/* <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]"> */}
            {/* Customization Sidebar */}
            {/* <div className="lg:col-span-1">
                        {showCharts ? (
                            <ChartCustomizationPanel
                                customization={chartCustomization}
                                onCustomizationChange={setChartCustomization}
                                onExport={handleExport}
                            />
                        ) : (
                            <CustomizationPanel
                                customization={customization}
                                onCustomizationChange={setCustomization}
                                onExport={handleExport}
                            />
                        )}
                    </div> */}

            {/* Data Visualization Area */}
            {/* <div className="lg:col-span-3">
                        <div className={`h-full ${showCharts ? 'professional-card' : 'shadow-medium'}`}>
                            {showCharts ? (
                                <div className="h-full p-6">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <BarChart3 className="h-5 w-5 text-primary" />
                                            <h2 className="text-xl font-semibold">Chart Visualization</h2>
                                        </div>
                                        <Badge variant="outline" className="gradient-bg text-primary-foreground border-0">
                                            Professional Charts
                                        </Badge>
                                    </div>
                                    <DataCharts
                                        data={data}
                                        headers={headers}
                                        customization={chartCustomization}
                                    />
                                </div>
                            ) : (
                                <Card className="h-full shadow-medium">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="flex items-center gap-2">
                                            <Table className="h-5 w-5 text-primary" />
                                            Data Table
                                        </CardTitle>
                                    </CardHeader>
                                    <div className="h-full">
                                        <DataTable
                                            data={data}
                                            headers={headers}
                                        // customization={customization}
                                        // onSelectionChanged={setSelectedRows}
                                        />
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div> */}
            {/* </div> */}
            {/* </div> */}
            <Card className="h-full shadow-medium">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2">
                        <Table className="h-5 w-5 text-primary" />
                        Data Table
                    </CardTitle>
                </CardHeader>
                <div className="h-full">
                    <DataTable
                        data={data}
                        headers={headers}
                    // customization={customization}
                    // onSelectionChanged={setSelectedRows}
                    />
                </div>
            </Card>
        </div>
    );
};

export default Index;