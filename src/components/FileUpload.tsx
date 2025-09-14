/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileSpreadsheet, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Papa from 'papaparse';

interface FileUploadProps {
    onDataLoad: (data: any[], headers: string[]) => void;
    isLoading: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onDataLoad, isLoading }) => {
    const [error, setError] = React.useState<string | null>(null);

    const handleFile = useCallback((file: File) => {
        setError(null);

        if (!file.name.toLowerCase().endsWith('.csv')) {
            setError('Please upload a CSV file.');
            return;
        }

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim(),
            complete: (results) => {
                if (results.errors.length > 0) {
                    setError('Error parsing CSV file. Please check the format.');
                    return;
                }

                if (results.data.length === 0) {
                    setError('The CSV file appears to be empty.');
                    return;
                }

                const headers = Object.keys(results.data[0] as object);
                onDataLoad(results.data, headers);
            },
            error: () => {
                setError('Failed to read the CSV file.');
            }
        });
    }, [onDataLoad]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            handleFile(acceptedFiles[0]);
        }
    }, [handleFile]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'text/csv': ['.csv'],
            'application/csv': ['.csv']
        },
        multiple: false,
        disabled: isLoading
    });

    return (
        <div className="w-full space-y-4">
            <Card
                {...getRootProps()}
                className={`
          border-2 border-dashed transition-all duration-200 cursor-pointer
          ${isDragActive
                        ? 'border-primary bg-accent/50 shadow-medium'
                        : 'border-muted-foreground/30 hover:border-primary/50 hover:bg-accent/20'
                    }
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
                    <div className="relative">
                        <div className="p-4 rounded-full bg-gradient-accent">
                            {isDragActive ? (
                                <Upload className="h-8 w-8 text-primary animate-pulse" />
                            ) : (
                                <FileSpreadsheet className="h-8 w-8 text-primary" />
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">
                            {isDragActive ? 'Drop your CSV file here' : 'Upload CSV File'}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {isDragActive
                                ? 'Release to upload your data'
                                : 'Drag & drop your CSV file here, or click to browse'
                            }
                        </p>
                    </div>

                    {!isDragActive && (
                        <Button variant="secondary" size="sm" disabled={isLoading}>
                            Choose File
                        </Button>
                    )}
                </div>
            </Card>

            {error && (
                <Alert variant="destructive" className="animate-slide-up">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
        </div>
    );
};