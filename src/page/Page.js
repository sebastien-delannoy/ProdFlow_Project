import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";



function Pages() {
  const [pagination, setPagination] = useState({
    data: new Array(1000).fill().map((value, index) => ({
      id: index,
      title: "coucou",
      body: "everybody",
    })),
    offset: 0,
    numberPerPage: 4,
    pageCount: 0,
    currentData: [],
  });
  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);
  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };
  return (
    <div>
      {pagination.currentData &&
        pagination.currentData.map((item, index) => (
          <div key={item.id} className="post">
            <h3>{`${item.title} - ${item.id}`}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
export default Pages;
