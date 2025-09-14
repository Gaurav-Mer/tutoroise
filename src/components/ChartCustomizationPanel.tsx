/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Palette, BarChart3, TrendingUp, Zap, Eye, Download } from 'lucide-react';

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

interface ChartCustomizationPanelProps {
    customization: ChartCustomization;
    onCustomizationChange: (customization: ChartCustomization) => void;
    onExport: () => void;
}

const colorSchemes = [
    { value: 'default', label: 'Default', colors: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'] },
    { value: 'vibrant', label: 'Vibrant', colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'] },
    { value: 'pastel', label: 'Pastel', colors: ['#a8e6cf', '#ffd3a5', '#fd9853', '#ff8a80', '#d1c4e9'] },
    { value: 'monochrome', label: 'Monochrome', colors: ['#2d3748', '#4a5568', '#718096', '#a0aec0', '#cbd5e0'] },
    { value: 'gradient', label: 'Gradient', colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'] },
    { value: 'neon', label: 'Neon', colors: ['#ff073a', '#40e0d0', '#da70d6', '#32cd32', '#ff4500'] },
    { value: 'earth', label: 'Earth', colors: ['#8b4513', '#228b22', '#4682b4', '#cd853f', '#d2691e'] }
];

const chartTypes = [
    { value: 'bar', label: 'Bar Chart', icon: BarChart3 },
    { value: 'line', label: 'Line Chart', icon: TrendingUp },
    { value: 'area', label: 'Area Chart', icon: TrendingUp },
    { value: 'pie', label: 'Pie Chart', icon: Zap },
    { value: 'doughnut', label: 'Doughnut', icon: Zap },
    { value: 'scatter', label: 'Scatter Plot', icon: Eye },
    { value: 'composed', label: 'Combined', icon: BarChart3 },
    { value: 'radar', label: 'Radar Chart', icon: Eye }
];

export const ChartCustomizationPanel: React.FC<ChartCustomizationPanelProps> = ({
    customization,
    onCustomizationChange,
    onExport
}) => {
    const updateCustomization = (key: keyof ChartCustomization, value: any) => {
        onCustomizationChange({
            ...customization,
            [key]: value
        });
    };

    return (
        <div className="space-y-6">
            {/* Chart Type Selection */}
            <Card className="professional-card">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        Chart Type
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Chart Title</Label>
                        <Input
                            value={customization.chartTitle}
                            onChange={(e) => updateCustomization('chartTitle', e.target.value)}
                            placeholder="Enter chart title..."
                            className="w-full"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {chartTypes.map((type) => {
                            const Icon = type.icon;
                            return (
                                <Button
                                    key={type.value}
                                    variant={customization.chartType === type.value ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => updateCustomization('chartType', type.value)}
                                    className="h-auto p-3 flex flex-col gap-1"
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-xs">{type.label}</span>
                                </Button>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            {/* Color Scheme */}
            <Card className="professional-card">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <Palette className="h-4 w-4 text-primary" />
                        Color Scheme
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Select
                        value={customization.colorScheme}
                        onValueChange={(value) => updateCustomization('colorScheme', value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {colorSchemes.map((scheme) => (
                                <SelectItem key={scheme.value} value={scheme.value}>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {scheme.colors.slice(0, 4).map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                        {scheme.label}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <div className="space-y-2">
                        <Label className="text-sm font-medium">Background Color</Label>
                        <Input
                            type="color"
                            value={customization.backgroundColor}
                            onChange={(e) => updateCustomization('backgroundColor', e.target.value)}
                            className="h-10"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Visual Options */}
            <Card className="professional-card">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">Visual Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="showGrid"
                                checked={customization.showGrid}
                                onCheckedChange={(checked) => updateCustomization('showGrid', checked)}
                            />
                            <Label htmlFor="showGrid" className="text-sm">Grid</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="showLegend"
                                checked={customization.showLegend}
                                onCheckedChange={(checked) => updateCustomization('showLegend', checked)}
                            />
                            <Label htmlFor="showLegend" className="text-sm">Legend</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="showTooltip"
                                checked={customization.showTooltip}
                                onCheckedChange={(checked) => updateCustomization('showTooltip', checked)}
                            />
                            <Label htmlFor="showTooltip" className="text-sm">Tooltip</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="dataLabels"
                                checked={customization.dataLabels}
                                onCheckedChange={(checked) => updateCustomization('dataLabels', checked)}
                            />
                            <Label htmlFor="dataLabels" className="text-sm">Data Labels</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="stackedBars"
                                checked={customization.stackedBars}
                                onCheckedChange={(checked) => updateCustomization('stackedBars', checked)}
                            />
                            <Label htmlFor="stackedBars" className="text-sm">Stacked Bars</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="smoothLines"
                                checked={customization.smoothLines}
                                onCheckedChange={(checked) => updateCustomization('smoothLines', checked)}
                            />
                            <Label htmlFor="smoothLines" className="text-sm">Smooth Lines</Label>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Animation & Effects */}
            <Card className="professional-card">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">Animation & Effects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="animation"
                            checked={customization.animation}
                            onCheckedChange={(checked) => updateCustomization('animation', checked)}
                        />
                        <Label htmlFor="animation" className="text-sm">Enable Animation</Label>
                    </div>

                    {customization.animation && (
                        <>
                            <div className="space-y-2">
                                <Label className="text-sm">Duration: {customization.animationDuration}ms</Label>
                                <Slider
                                    value={[customization.animationDuration]}
                                    onValueChange={([value]) => updateCustomization('animationDuration', value)}
                                    min={300}
                                    max={2000}
                                    step={100}
                                    className="w-full"
                                />
                            </div>
                        </>
                    )}

                    <div className="space-y-2">
                        <Label className="text-sm">Opacity: {customization.opacity}%</Label>
                        <Slider
                            value={[customization.opacity]}
                            onValueChange={([value]) => updateCustomization('opacity', value)}
                            min={10}
                            max={100}
                            step={5}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm">Border Radius: {customization.borderRadius}px</Label>
                        <Slider
                            value={[customization.borderRadius]}
                            onValueChange={([value]) => updateCustomization('borderRadius', value)}
                            min={0}
                            max={20}
                            step={1}
                            className="w-full"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Typography */}
            <Card className="professional-card">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">Typography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-sm">Font Size: {customization.fontSize}px</Label>
                        <Slider
                            value={[customization.fontSize]}
                            onValueChange={([value]) => updateCustomization('fontSize', value)}
                            min={10}
                            max={24}
                            step={1}
                            className="w-full"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm">Font Weight</Label>
                        <Select
                            value={customization.fontWeight}
                            onValueChange={(value) => updateCustomization('fontWeight', value)}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="normal">Normal</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="semibold">Semi Bold</SelectItem>
                                <SelectItem value="bold">Bold</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Layout */}
            <Card className="professional-card">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base">Layout</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label className="text-sm">Aspect Ratio</Label>
                        <Select
                            value={customization.aspectRatio}
                            onValueChange={(value) => updateCustomization('aspectRatio', value)}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="16:9">16:9 (Widescreen)</SelectItem>
                                <SelectItem value="4:3">4:3 (Standard)</SelectItem>
                                <SelectItem value="1:1">1:1 (Square)</SelectItem>
                                <SelectItem value="3:2">3:2 (Photo)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <Label className="text-xs">Top: {customization.marginTop}</Label>
                            <Slider
                                value={[customization.marginTop]}
                                onValueChange={([value]) => updateCustomization('marginTop', value)}
                                min={0}
                                max={50}
                                step={5}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs">Bottom: {customization.marginBottom}</Label>
                            <Slider
                                value={[customization.marginBottom]}
                                onValueChange={([value]) => updateCustomization('marginBottom', value)}
                                min={0}
                                max={50}
                                step={5}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs">Left: {customization.marginLeft}</Label>
                            <Slider
                                value={[customization.marginLeft]}
                                onValueChange={([value]) => updateCustomization('marginLeft', value)}
                                min={0}
                                max={50}
                                step={5}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs">Right: {customization.marginRight}</Label>
                            <Slider
                                value={[customization.marginRight]}
                                onValueChange={([value]) => updateCustomization('marginRight', value)}
                                min={0}
                                max={50}
                                step={5}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Export */}
            <Card className="professional-card">
                <CardContent className="pt-6">
                    <Button
                        onClick={onExport}
                        className="w-full"
                        size="lg"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Export Chart
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};