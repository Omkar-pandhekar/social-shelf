"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import classNames from "classnames";

interface Donate {
  bookId: string;
  name: string;
  email: string;
  title: string;
  author: string;
  condition: string;
  message?: string;
}

interface DonationsProps {
  donationArray: Donate[];
}

export default function Donations({ donationArray }: DonationsProps) {
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
                <TableHead>Name of Donor</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Title Of Book</TableHead>
                {/* <TableHead>Stock</TableHead> */}
                <TableHead>Condition</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donationArray.map((donate) => (
                <TableRow key={donate.bookId}>
                  <TableCell>{donate.name}</TableCell>
                  <TableCell>{donate.email}</TableCell>
                  <TableCell>{donate.title}</TableCell>
                  <TableCell>
                    <span
                      className={classNames(
                        "px-2 py-1 rounded-full text-sm font-medium",
                        {
                          "bg-green-100 text-green-800":
                            donate.condition === "New",
                          "bg-blue-100 text-blue-800":
                            donate.condition === "Good",
                          "bg-yellow-100 text-yellow-800":
                            donate.condition === "Acceptable",
                        }
                      )}
                    >
                      {donate.condition}
                    </span>
                  </TableCell>
                  <TableCell>{donate.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
