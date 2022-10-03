/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/Pagination.css";
export default function Pagination({ countriesByPage, countries, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries / countriesByPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container_pag">
      <div>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button
                className="button_pag"
                key={number}
                onClick={() => paginado(number)}
              >
                {number}
              </button>
            );
          })}
      </div>
    </div>
  );
}
