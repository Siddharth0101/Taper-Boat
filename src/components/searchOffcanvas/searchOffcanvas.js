import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const SearchOffcanvas = ({ showSearch, handleCloseSearch }) => {
  return (
    <Offcanvas show={showSearch} onHide={handleCloseSearch}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Search Results</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>Search results will appear here.</Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchOffcanvas;
