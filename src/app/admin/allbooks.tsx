"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";

interface Book {
  bookId: string;
  title: string;
  author: string;
  category: string;
  imageUrl?: string;
}

interface BooksProps {
  bookArray: Book[];
}

export default function allbooks({ bookArray }: BooksProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Book Management
      </h1>
      <div className="rounded-lg shadow">
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                {/* <TableHead>Stock</TableHead> */}
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookArray.map((book) => (
                <TableRow key={book.bookId}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.category}</TableCell>
                  {/* <TableCell>
                            <div className="flex items-center space-x-2">
                              <span>{book.stock || 0}</span>
                            </div>
                          </TableCell> */}
                  <TableCell>
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-600 text-white">
                      Available
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
