import { useState } from "react";
import { requests } from "../data";
import Pagination from "./Pagination";
import Search from "./shared/Search";
import PaginationFilter from "./PaginationFilter";

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

  // handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRequests(e.target.value);
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
        {/* search bar */}
        <Search searchTerm={searchTerm} onChange={handleSearch} />

        {/*pagination filter */}
        <PaginationFilter
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="p-2 text-left font-medium text-muted-foreground w-[100px]">
                Member ID
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground">
                Name
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground">
                Email
              </th>
              <th className="p-2 text-left font-medium text-muted-foreground">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((request) => (
              <tr key={request.id} className="border-b border-muted">
                <td className="p-2 font-medium">{request.id}</td>
                <td className="p-2">{request.vehicle}</td>
                <td className="p-2 font-mono">{request.vin}</td>
                <td className="p-2 text-right text-orange-500">
                  {request.expiresIn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  pagination */}
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        filteredRequests={filteredRequests}
      />
    </div>
  );
}
