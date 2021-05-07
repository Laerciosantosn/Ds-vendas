import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SalePage } from 'types/sale';
import { formatCurrency, formatLocalDate } from 'utils/format';
import { BASE_URL } from 'utils/request';


const DataTable: React.FC = () => {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });


  useEffect(() => {
   axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
   .then((response => {
    setPage(response.data);
   }))
   
  }, [])

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Seller</th>
            <th>Clients visited</th>
            <th>Closed deals</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{formatLocalDate(sale.date, "dd/MM/yyyy")}</td>
                <td>{sale.seller.name}</td>
                <td>{sale.visited}</td>
                <td>{sale.deals}</td>
                <td>{formatCurrency(sale.amount)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;