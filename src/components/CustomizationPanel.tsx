import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Palette, Type, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface CustomizationPanelProps {
    customization: CustomizationOptions;
    onCustomizationChange: (options: CustomizationOptions) => void;
    onExport: () => void;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
    customization,
    onCustomizationChange,
    onExport
}) => {
    const fontOptions = [
        { value: 'Inter', label: 'Inter' },
        { value: 'Arial', label: 'Arial' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times New Roman', label: 'Times New Roman' },
        { value: 'monospace', label: 'Monospace' },
    ];

    const fontWeightOptions = [
        { value: '400', label: 'Normal' },
        { value: '500', label: 'Medium' },
        { value: '600', label: 'Semi Bold' },
        { value: '700', label: 'Bold' },
    ];

    const colorPresets = [
        { name: 'Default', header: '#f1f5f9', row: '#ffffff', border: '#e2e8f0' },
        { name: 'Blue Theme', header: '#dbeafe', row: '#f8fafc', border: '#93c5fd' },
        { name: 'Green Theme', header: '#dcfce7', row: '#f0fdf4', border: '#86efac' },
        { name: 'Purple Theme', header: '#e9d5ff', row: '#faf5ff', border: '#c084fc' },
        { name: 'Dark Theme', header: '#374151', row: '#1f2937', border: '#6b7280' },
        { name: 'Professional', header: '#1e293b', row: '#f8fafc', border: '#cbd5e1' },
        { name: 'Warm', header: '#fef3c7', row: '#fffbeb', border: '#fbbf24' },
    ];

    const handlePresetChange = (preset: typeof colorPresets[0]) => {
        onCustomizationChange({
            ...customization,
            headerColor: preset.header,
            rowColor: preset.row,
            borderColor: preset.border,
        });
    };

    return (
        <Card className="w-full h-fit shadow-medium">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Palette className="h-5 w-5 text-primary" />
                    AG Grid Customization
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Font Settings */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Type className="h-4 w-4 text-muted-foreground" />
                        <Label className="text-sm font-medium">Typography</Label>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Font Size: {customization.fontSize}px</Label>
                            <Slider
                                value={[customization.fontSize]}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, fontSize: value[0] })
                                }
                                min={10}
                                max={20}
                                step={1}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Font Family</Label>
                            <Select
                                value={customization.fontFamily}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, fontFamily: value })
                                }
                            >
                                <SelectTrigger className="w-full h-9">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {fontOptions.map((font) => (
                                        <SelectItem key={font.value} value={font.value}>
                                            {font.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Header Font Weight</Label>
                            <Select
                                value={customization.headerFontWeight}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, headerFontWeight: value })
                                }
                            >
                                <SelectTrigger className="w-full h-9">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {fontWeightOptions.map((weight) => (
                                        <SelectItem key={weight.value} value={weight.value}>
                                            {weight.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Table Layout Settings */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium">Table Layout</Label>

                    <div className="space-y-3">
                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Row Height: {customization.rowHeight}px</Label>
                            <Slider
                                value={[customization.rowHeight]}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, rowHeight: value[0] })
                                }
                                min={25}
                                max={80}
                                step={5}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Header Height: {customization.headerHeight}px</Label>
                            <Slider
                                value={[customization.headerHeight]}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, headerHeight: value[0] })
                                }
                                min={30}
                                max={80}
                                step={5}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Cell Padding: {customization.cellPadding}px</Label>
                            <Slider
                                value={[customization.cellPadding]}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, cellPadding: value[0] })
                                }
                                min={4}
                                max={20}
                                step={2}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <Label className="text-xs text-muted-foreground mb-2 block">Border Width: {customization.borderWidth}px</Label>
                            <Slider
                                value={[customization.borderWidth]}
                                onValueChange={(value) =>
                                    onCustomizationChange({ ...customization, borderWidth: value[0] })
                                }
                                min={0}
                                max={4}
                                step={1}
                                className="w-full"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Striped Rows</Label>
                            <Switch
                                checked={customization.stripedRows}
                                onCheckedChange={(checked) =>
                                    onCustomizationChange({ ...customization, stripedRows: checked })
                                }
                            />
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Color Presets */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium">Color Themes</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {colorPresets.map((preset) => (
                            <Button
                                key={preset.name}
                                variant="outline"
                                size="sm"
                                onClick={() => handlePresetChange(preset)}
                                className="h-auto p-3 flex flex-col items-start gap-1"
                            >
                                <span className="text-xs font-medium">{preset.name}</span>
                                <div className="flex gap-1">
                                    <div
                                        className="w-3 h-3 rounded-sm border"
                                        style={{ backgroundColor: preset.header }}
                                    />
                                    <div
                                        className="w-3 h-3 rounded-sm border"
                                        style={{ backgroundColor: preset.row }}
                                    />
                                    <div
                                        className="w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: preset.border }}
                                    />
                                </div>
                            </Button>
                        ))}
                    </div>
                </div>

                <Separator />

                {/* Individual Color Controls */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium">Custom Colors</Label>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Header Color</Label>
                            <input
                                type="color"
                                value={customization.headerColor}
                                onChange={(e) =>
                                    onCustomizationChange({ ...customization, headerColor: e.target.value })
                                }
                                className="w-8 h-6 rounded border cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Row Color</Label>
                            <input
                                type="color"
                                value={customization.rowColor}
                                onChange={(e) =>
                                    onCustomizationChange({ ...customization, rowColor: e.target.value })
                                }
                                className="w-8 h-6 rounded border cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Border Color</Label>
                            <input
                                type="color"
                                value={customization.borderColor}
                                onChange={(e) =>
                                    onCustomizationChange({ ...customization, borderColor: e.target.value })
                                }
                                className="w-8 h-6 rounded border cursor-pointer"
                            />
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Advanced AG Grid Features */}
                <div className="space-y-3">
                    <Label className="text-sm font-medium">AG Grid Features</Label>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Row Animations</Label>
                            <Switch
                                checked={customization.animateRows}
                                onCheckedChange={(checked) =>
                                    onCustomizationChange({ ...customization, animateRows: checked })
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Row Grouping</Label>
                            <Switch
                                checked={customization.enableGrouping}
                                onCheckedChange={(checked) =>
                                    onCustomizationChange({ ...customization, enableGrouping: checked })
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Pivot Tables</Label>
                            <Switch
                                checked={customization.enablePivot}
                                onCheckedChange={(checked) =>
                                    onCustomizationChange({ ...customization, enablePivot: checked })
                                }
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Label className="text-xs text-muted-foreground">Built-in Charts</Label>
                            <Switch
                                checked={customization.enableCharting}
                                onCheckedChange={(checked) =>
                                    onCustomizationChange({ ...customization, enableCharting: checked })
                                }
                            />
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Export Button */}
                <Button onClick={onExport} className="w-full" variant="default">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                </Button>
            </CardContent>
        </Card>
    );
};