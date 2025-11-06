import styles from "./styles.module.css"

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return (
    <div className={styles.pagination}>
      <nav className={styles.paginationNav}>
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          «
        </button>
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          ‹
        </button>
        
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`paginationButton ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          ›
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          »
        </button>
      </nav>
    </div>
  );
}