import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Rented {
  bookId: string;
  renterId: string;
  renterName: string;
  renterEmail: string;
  bookTitle: string;
  rentDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: "active" | "returned" | "overdue";
  fine?: number;
  createdAt?: Date;
  updatedAt?: Date;
  daysRemaining?: number;
}

interface RentedProps {
  rentedArray: Rented[];
}

export default function rented({ rentedArray }: RentedProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Rented Books
      </h1>
      <div className="rounded-lg shadow">
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Rented Date</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Days Left</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rentedArray.map((book) => {
                const today = new Date();
                const dueDate = new Date(book.dueDate);
                const daysRemaining = Math.ceil(
                  (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
                );

                return (
                  <TableRow key={book.bookId}>
                    <TableCell>{book.bookTitle}</TableCell>
                    <TableCell>
                      {new Date(book.rentDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(book.dueDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          daysRemaining <= 3
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {daysRemaining} days
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Renew
                      </Button>
                      <Button variant="destructive" size="sm">
                        Return
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
