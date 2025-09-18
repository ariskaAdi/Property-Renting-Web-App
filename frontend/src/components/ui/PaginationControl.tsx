"use client";

import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";


type PaginationMeta = {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}

type PaginationControlsProps = {
    meta: PaginationMeta;
    onPageChange: (newPage: number) => void;
}

export const PaginationControls = ({meta, onPageChange}: PaginationControlsProps) => {
    return (
        <div className="flex items-center justify-end space-x-4 mt-6">
      <span className="text-sm font-medium text-muted-foreground">
        Page {meta.page} of {meta.totalPages}
      </span>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(meta.page - 1)}
          disabled={meta.page <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous Page</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(meta.page + 1)}
          disabled={meta.page >= meta.totalPages}
        >
          <span className="sr-only">Next Page</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
    )
}