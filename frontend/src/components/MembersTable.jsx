import { useState } from "react";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { requests } from "../data";

export default function MembersTable() {
  const [filteredRequests, setFilteredRequests] = useState(requests);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(13);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter function
  const filterRequests = (term) => {
    const filtered = requests.filter((request) =>
      Object.values(request).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(term.toLowerCase()),
      ),
    );
    setFilteredRequests(filtered);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRequests.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full p-8">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            filterRequests(e.target.value);
          }}
          className="max-w-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Rows per page
            </option>
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="p-2 text-left font-medium text-muted-foreground w-[100px]">
                Request ID
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground">
                Vehicle
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground">
                VIN
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground">
                Requested services
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground w-[200px]">
                <div className="flex items-center">
                  Preferred drop-off times
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </th>
              <th className="p-2 text-right font-medium text-muted-foreground">
                Request expires in
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((request) => (
              <tr key={request.id} className="border-b border-muted">
                <td className="p-2 font-medium">{request.id}</td>
                <td className="p-2">{request.vehicle}</td>
                <td className="p-2 font-mono">{request.vin}</td>
                <td className="p-2">
                  {request.service}
                  {request.additionalServices > 0 && (
                    <span className="ml-1 text-muted-foreground">
                      +{request.additionalServices}
                    </span>
                  )}
                </td>
                <td className="p-2">
                  <div>
                    {request.date} {request.time}
                    {request.timeSlots && (
                      <div className="mt-1 space-y-1">
                        {request.timeSlots.map((slot) => (
                          <div
                            key={slot}
                            className="rounded bg-secondary px-2 py-0.5 text-xs"
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-2 text-right text-orange-500">
                  {request.expiresIn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center justify-center mt-4"
        aria-label="Pagination"
      >
        <ul className="flex items-center space-x-1">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-2 py-1 rounded-md ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-muted"
              }`}
              aria-label="Previous page"
            >
              Previous
            </button>
          </li>
          {Array.from({
            length: Math.ceil(filteredRequests.length / itemsPerPage),
          }).map((_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`px-2 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                aria-label={`Page ${index + 1}`}
                aria-current={currentPage === index + 1 ? "page" : undefined}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(filteredRequests.length / itemsPerPage)
              }
              className={`px-2 py-1 rounded-md ${
                currentPage ===
                Math.ceil(filteredRequests.length / itemsPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-muted"
              }`}
              aria-label="Next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
