// REACT
import React, { useState } from 'react';

// TYPES
import { PaginationType } from '../../types/pagination';

const itemsPerPage = 10; // Define how many items per page

export default function Pagination({ data, ItemComponent }: PaginationType): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentItems: any = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
        <div className="card-gallery">
            {currentItems.map((item: any) => (
                <ItemComponent key={item.id} item={item} />
            ))}
        </div> 
        <div>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>{'<'}</button>
            <span> Page {currentPage} of {totalPages} </span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>{'>'}</button>
        </div>
    </>
  );
}