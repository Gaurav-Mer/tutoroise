/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    ScatterChart,
    Scatter,
    ComposedChart,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from 'recharts';

import {
    TrendingUp,
    BarChart3,
    PieChart as PieIcon,
    Zap,
    Activity,
    Download,
    Target,
    Layers
} from 'lucide-react';
import toast from 'react-hot-toast';

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

interface DataChartsProps {
    data: any[];
    headers: string[];
    customization?: ChartCustomization;
}

const colorSchemes = {
    default: ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'],
    vibrant: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'],
    pastel: ['#a8e6cf', '#ffd3a5', '#fd9853', '#ff8a80', '#d1c4e9', '#c7ecee', '#dcedc1'],
    monochrome: ['#2d3748', '#4a5568', '#718096', '#a0aec0', '#cbd5e0', '#e2e8f0', '#f7fafc'],
    gradient: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#43e97b', '#38f9d7'],
    neon: ['#ff073a', '#40e0d0', '#da70d6', '#32cd32', '#ff4500', '#9370db', '#00ced1'],
    earth: ['#8b4513', '#228b22', '#4682b4', '#cd853f', '#d2691e', '#808000', '#bc8f8f']
};

export const DataCharts: React.FC<DataChartsProps> = ({
    data,
    headers,
    customization = {
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
    }
}) => {
    const [activeTab, setActiveTab] = useState('bar');
    const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

    // Get numeric columns for charts
    const numericHeaders = useMemo(() => {
        return headers.filter(header => {
            return data.some(row => !isNaN(Number(row[header])) && row[header] !== '' && row[header] !== null);
        });
    }, [headers, data]);

    // Get colors based on customization
    const chartColors = colorSchemes[customization.colorScheme] || colorSchemes.default;

    // Enhanced data preparation with statistical analysis
    const enhancedChartData = useMemo(() => {
        const limitedData = data.slice(0, 50); // Increased for better analysis
        return limitedData.map((row, index) => {
            const processedRow: any = {
                index: index + 1,
                name: row[headers[0]] || `Row ${index + 1}`,
                originalData: row
            };

            // Add all numeric columns with proper formatting
            numericHeaders.forEach(header => {
                const value = row[header];
                if (value !== null && value !== undefined && value !== '') {
                    processedRow[header] = parseFloat(value) || 0;
                } else {
                    processedRow[header] = 0;
                }
            });

            return processedRow;
        });
    }, [data, headers, numericHeaders]);

    // Statistical insights
    const chartStats = useMemo(() => {
        if (numericHeaders.length === 0) return null;

        const stats: any = {};
        numericHeaders.forEach(header => {
            const values = enhancedChartData.map(row => row[header]).filter(val => !isNaN(val));
            if (values.length > 0) {
                stats[header] = {
                    min: Math.min(...values),
                    max: Math.max(...values),
                    avg: values.reduce((a, b) => a + b, 0) / values.length,
                    sum: values.reduce((a, b) => a + b, 0),
                    count: values.length
                };
            }
        });
        return stats;
    }, [enhancedChartData, numericHeaders]);

    // Prepare pie chart data using first numeric column
    const pieData = useMemo(() => {
        if (numericHeaders.length === 0) return [];
        const header = numericHeaders[0];
        return enhancedChartData.map((item, index) => ({
            name: item.name,
            value: item[header] || 0,
            fill: chartColors[index % chartColors.length],
            percentage: 0 // Will be calculated by Recharts
        }));
    }, [enhancedChartData, numericHeaders, chartColors]);

    // Chart configuration based on customization
    const getAspectRatio = () => {
        switch (customization.aspectRatio) {
            case '16:9': return 16 / 9;
            case '4:3': return 4 / 3;
            case '1:1': return 1;
            case '3:2': return 3 / 2;
            default: return 16 / 9;
        }
    };

    const chartMargin = {
        top: customization.marginTop,
        right: customization.marginRight,
        bottom: customization.marginBottom,
        left: customization.marginLeft
    };

    const chartTabs = [
        { value: 'bar', label: 'Bar Chart', icon: BarChart3, description: 'Compare categories' },
        { value: 'line', label: 'Line Chart', icon: TrendingUp, description: 'Show trends over time' },
        { value: 'area', label: 'Area Chart', icon: Activity, description: 'Stacked area visualization' },
        { value: 'pie', label: 'Pie Chart', icon: PieIcon, description: 'Show proportions' },
        { value: 'scatter', label: 'Scatter Plot', icon: Zap, description: 'Find correlations' },
        { value: 'composed', label: 'Combined', icon: Layers, description: 'Multiple chart types' },
        { value: 'radar', label: 'Radar Chart', icon: Target, description: 'Multi-dimensional data' }
    ];

    // Enhanced export function
    const exportChart = () => {
        try {
            // Create a canvas element to capture the chart
            const chartElement = document.querySelector('.recharts-wrapper');
            if (chartElement) {
                // Simple export notification
                toast(`Exporting ${customization.chartType} chart with ${enhancedChartData.length} data points`);
            }
        } catch (error) {
            toast.error("Unable to export chart. Please try again.");
        }
    };

    if (numericHeaders.length === 0) {
        return (
            <div className="chart-container h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                        <BarChart3 className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">No Numeric Data Found</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            Charts require at least one numeric column to display visualizations.
                            Please upload data with numeric values.
                        </p>
                    </div>
                    <Badge variant="outline" className="mt-4">
                        {headers.length} columns • {data.length} rows
                    </Badge>
                </div>
            </div>
        );
    }

    const renderChart = (type: string) => {
        const commonProps = {
            data: enhancedChartData,
            margin: chartMargin,
            style: {
                fontSize: customization.fontSize,
                fontWeight: customization.fontWeight
            }
        };

        const commonAxisProps = {
            tick: { fontSize: customization.fontSize, fill: 'hsl(var(--foreground))' },
            axisLine: { stroke: 'hsl(var(--border))' },
            tickLine: { stroke: 'hsl(var(--border))' }
        };

        const CustomTooltip = ({ active, payload, label }: any) => {
            if (active && payload && payload.length) {
                return (
                    <div className="bg-popover p-3 rounded-lg shadow-lg border">
                        <p className="font-medium">{label}</p>
                        {payload.map((entry: any, index: number) => (
                            <p key={index} style={{ color: entry.color }} className="text-sm">
                                {entry.dataKey}: {entry.value?.toLocaleString()}
                            </p>
                        ))}
                    </div>
                );
            }
            return null;
        };

        switch (type) {
            case 'bar':
                return (
                    <BarChart {...commonProps}>
                        {customization.showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                opacity={0.3}
                                stroke="hsl(var(--border))"
                            />
                        )}
                        <XAxis
                            dataKey="name"
                            {...commonAxisProps}
                        />
                        <YAxis {...commonAxisProps} />
                        {customization.showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {customization.showLegend && <Legend />}
                        {numericHeaders.slice(0, 6).map((header, index) => (
                            <Bar
                                key={header}
                                dataKey={header}
                                fill={chartColors[index % chartColors.length]}
                                radius={[customization.borderRadius, customization.borderRadius, 0, 0]}
                                fillOpacity={customization.opacity / 100}
                                animationDuration={customization.animation ? customization.animationDuration : 0}
                                stackId={customization.stackedBars ? "stack" : undefined}
                            />
                        ))}
                    </BarChart>
                );

            case 'line':
                return (
                    <LineChart {...commonProps}>
                        {customization.showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                opacity={0.3}
                                stroke="hsl(var(--border))"
                            />
                        )}
                        <XAxis dataKey="name" {...commonAxisProps} />
                        <YAxis {...commonAxisProps} />
                        {customization.showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {customization.showLegend && <Legend />}
                        {numericHeaders.slice(0, 6).map((header, index) => (
                            <Line
                                key={header}
                                type={customization.smoothLines ? "monotone" : "linear"}
                                dataKey={header}
                                stroke={chartColors[index % chartColors.length]}
                                strokeWidth={customization.strokeWidth}
                                strokeOpacity={customization.opacity / 100}
                                animationDuration={customization.animation ? customization.animationDuration : 0}
                                dot={{ r: 4, fill: chartColors[index % chartColors.length] }}
                                activeDot={{ r: 6, stroke: chartColors[index % chartColors.length] }}
                            />
                        ))}
                    </LineChart>
                );

            case 'area':
                return (
                    <AreaChart {...commonProps}>
                        {customization.showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                opacity={0.3}
                                stroke="hsl(var(--border))"
                            />
                        )}
                        <XAxis dataKey="name" {...commonAxisProps} />
                        <YAxis {...commonAxisProps} />
                        {customization.showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {customization.showLegend && <Legend />}
                        {numericHeaders.slice(0, 4).map((header, index) => (
                            <Area
                                key={header}
                                type="monotone"
                                dataKey={header}
                                stackId="1"
                                stroke={chartColors[index % chartColors.length]}
                                fill={chartColors[index % chartColors.length]}
                                fillOpacity={customization.opacity / 100}
                                strokeWidth={customization.strokeWidth}
                                animationDuration={customization.animation ? customization.animationDuration : 0}
                            />
                        ))}
                    </AreaChart>
                );

            case 'pie':
                const RADIAN = Math.PI / 180;
                const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
                    if (!customization.dataLabels) return null;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                        <text
                            x={x}
                            y={y}
                            fill="white"
                            textAnchor={x > cx ? 'start' : 'end'}
                            dominantBaseline="central"
                            fontSize={customization.fontSize}
                            fontWeight={customization.fontWeight}
                        >
                            {`${(percent * 100).toFixed(0)}%`}
                        </text>
                    );
                };

                return (
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomLabel}
                            outerRadius={140}
                            innerRadius={customization.chartType === 'doughnut' ? 60 : 0}
                            fill="#8884d8"
                            dataKey="value"
                            animationDuration={customization.animation ? customization.animationDuration : 0}
                        >
                            {pieData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={chartColors[index % chartColors.length]}
                                    fillOpacity={customization.opacity / 100}
                                />
                            ))}
                        </Pie>
                        {customization.showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {customization.showLegend && <Legend />}
                    </PieChart>
                );

            case 'scatter':
                return (
                    <ScatterChart {...commonProps}>
                        {customization.showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                opacity={0.3}
                                stroke="hsl(var(--border))"
                            />
                        )}
                        <XAxis
                            type="number"
                            dataKey={numericHeaders[0]}
                            name={numericHeaders[0]}
                            {...commonAxisProps}
                        />
                        <YAxis
                            type="number"
                            dataKey={numericHeaders[1] || numericHeaders[0]}
                            name={numericHeaders[1] || numericHeaders[0]}
                            {...commonAxisProps}
                        />
                        {customization.showTooltip && <Tooltip cursor={{ strokeDasharray: '3 3' }} />}
                        {customization.showLegend && <Legend />}
                        <Scatter
                            name="Data Points"
                            data={enhancedChartData}
                            fill={chartColors[0]}
                            fillOpacity={customization.opacity / 100}
                        />
                    </ScatterChart>
                );

            case 'composed':
                return (
                    <ComposedChart {...commonProps}>
                        {customization.showGrid && (
                            <CartesianGrid
                                strokeDasharray="3 3"
                                opacity={0.3}
                                stroke="hsl(var(--border))"
                            />
                        )}
                        <XAxis dataKey="name" {...commonAxisProps} />
                        <YAxis {...commonAxisProps} />
                        {customization.showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {customization.showLegend && <Legend />}
                        {numericHeaders.slice(0, 2).map((header, index) => (
                            index === 0 ? (
                                <Bar
                                    key={header}
                                    dataKey={header}
                                    fill={chartColors[index % chartColors.length]}
                                    fillOpacity={customization.opacity / 100}
                                />
                            ) : (
                                <Line
                                    key={header}
                                    type="monotone"
                                    dataKey={header}
                                    stroke={chartColors[index % chartColors.length]}
                                    strokeWidth={customization.strokeWidth}
                                />
                            )
                        ))}
                    </ComposedChart>
                );

            case 'radar':
                return (
                    <RadarChart {...commonProps} cx="50%" cy="50%" outerRadius="80%">
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis dataKey="name" tick={{ fontSize: customization.fontSize }} />
                        <PolarRadiusAxis tick={{ fontSize: customization.fontSize }} />
                        {customization.showTooltip && <Tooltip content={<CustomTooltip />} />}
                        {customization.showLegend && <Legend />}
                        {numericHeaders.slice(0, 3).map((header, index) => (
                            <Radar
                                key={header}
                                name={header}
                                dataKey={header}
                                stroke={chartColors[index % chartColors.length]}
                                fill={chartColors[index % chartColors.length]}
                                fillOpacity={customization.opacity / 200}
                                strokeWidth={customization.strokeWidth}
                            />
                        ))}
                    </RadarChart>
                );

            default:
                return <></>;
        }
    };

    return (
        <div className="h-full space-y-4">
            {/* Enhanced Chart Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold">{customization.chartTitle}</h2>
                    <div className="flex items-center gap-4">
                        <Badge variant="secondary" className="px-3 py-1">
                            {enhancedChartData.length} data points
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                            {numericHeaders.length} numeric columns
                        </Badge>
                        {chartStats && (
                            <Badge variant="outline" className="px-3 py-1">
                                Stats available
                            </Badge>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Select value={customization.colorScheme} onValueChange={() => { }}>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder="Color scheme" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(colorSchemes).map((scheme) => (
                                <SelectItem key={scheme} value={scheme}>
                                    {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm" onClick={exportChart}>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Statistics Panel */}
            {chartStats && (
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                    {Object.entries(chartStats).slice(0, 3).map(([key, stats]: [string, any]) => (
                        <div key={key} className="text-center">
                            <p className="text-sm font-medium text-muted-foreground">{key}</p>
                            <p className="text-lg font-bold">{stats.avg.toFixed(2)}</p>
                            <p className="text-xs text-muted-foreground">
                                {stats.min.toFixed(1)} - {stats.max.toFixed(1)}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                <TabsList className="grid w-full grid-cols-7 bg-muted/50 p-1">
                    {chartTabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="flex flex-col items-center gap-1 data-[state=active]:bg-background data-[state=active]:shadow-sm p-3"
                                title={tab.description}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="text-xs hidden sm:inline">{tab.label}</span>
                            </TabsTrigger>
                        );
                    })}
                </TabsList>

                {chartTabs.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value} className="h-[calc(100%-120px)] mt-4">
                        <div className="chart-container h-full">
                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                                aspect={customization.responsive ? undefined : getAspectRatio()}
                            >
                                {renderChart(tab.value as string || "")}
                            </ResponsiveContainer>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};