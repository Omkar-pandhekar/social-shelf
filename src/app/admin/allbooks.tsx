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
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { books } from "../../components/ui/Temp";

interface Book {
  _id: string;
  bookId: string;
  title: string;
  author: string;
  category: string;
  imageUrl?: string;
  condition?: string;
  description?: string;
}

interface BooksProps {
  bookArray: Book[];
}

export default function Allbooks({ bookArray }: BooksProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editedBook, setEditedBook] = useState<Partial<Book>>({});
  const categories = [...new Set(books.map((book) => book.category))];

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setEditedBook({
      category: book.category,
      condition: book.condition || "",
      description: book.description || "",
      imageUrl: book.imageUrl || "",
    });
    setIsOpen(true);
  };

  const handleSave = async () => {
    if (!selectedBook) return;

    try {
      const response = await axios.put("/api/admin/update-book-details", {
        bookId: selectedBook._id,
        ...editedBook,
      });

      if (response.data.success) {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Book updated successfully!",
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          background: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          customClass: {
            popup: "border border-border shadow-lg",
          },
        });
        setIsOpen(false);
        // Refresh the page to show updated data
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating book:", error);
      Swal.fire({
        position: "bottom-end",
        icon: "error",
        title: "Failed to update book. Please try again.",
        toast: true,
        showConfirmButton: false,
        timer: 3000,
        background: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
        customClass: {
          popup: "border border-border shadow-lg",
        },
      });
    }
  };

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
                    <Button
                      variant="outline"
                      size="sm"
                      className="mr-2"
                      onClick={() => handleEdit(book)}
                    >
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Book Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                value={editedBook.category}
                onChange={(e) =>
                  setEditedBook({ ...editedBook, category: e.target.value })
                }
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Input
                id="condition"
                value={editedBook.condition}
                onChange={(e) =>
                  setEditedBook({ ...editedBook, condition: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={editedBook.description}
                onChange={(e) =>
                  setEditedBook({ ...editedBook, description: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                value={editedBook.imageUrl}
                onChange={(e) =>
                  setEditedBook({ ...editedBook, imageUrl: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
