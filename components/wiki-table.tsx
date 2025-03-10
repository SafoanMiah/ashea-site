import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface WikiTableProps {
  headers: string[]
  rows: string[][]
  className?: string
}

export function WikiTable({ headers, rows, className }: WikiTableProps) {
  return (
    <div className={`wiki-table-container ${className}`}>
      <Table>
        <TableHeader className="bg-primary/5">
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index} className="font-medium text-primary">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="hover:bg-primary/5 transition-colors duration-200">
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

