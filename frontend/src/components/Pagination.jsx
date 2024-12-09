const Pagination = ({
  currentPage,
  itemsPerPage,
  paginate,
  filteredRequests,
}) => {
  return (
    <div>
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
};

export default Pagination;
