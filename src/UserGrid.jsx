import { useState, useEffect, useCallback } from "react";

import SnackBar from "./SnackBar";

export default function UserGrid() {
  const [data, setData] = useState(null);
  const [renderData, setRenderDate] = useState(null);
  const [error, setError] = useState(false);
  const [chips, setChips] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
        setRenderDate(d);

        // process to get chips
        const citySet = new Set();
        const companySet = new Set();
        d.forEach((user) => {
          citySet.add(user.address.city);
          companySet.add(user.company.name);

          //   setChips([
          //     ...[...citySet].map((c) => {
          //       return {
          //         key: "city",
          //         value: c,
          //       };
          //     }),
          //     ...[...companySet].map((c) => {
          //       return {
          //         key: "company",
          //         value: c,
          //       };
          //     }),
          //   ]);

          setChips([
            [...citySet].map((c) => {
              return {
                key: "city",
                value: c,
              };
            })[0],
            [...companySet].map((c) => {
              return {
                key: "company",
                value: c,
              };
            })[1],
          ]);
        });
      })
      .catch((e) => {
        setData(null);
        setRenderDate(null);
        setError(true);
      });
  }, []);

  const chipOnClickCB = useCallback((e) => {
    e.preventDefault();
    const { target } = e;
    const { key, value } = target.dataset;

    setRenderDate(
      data.filter((d) => {
        switch (key) {
          case "city":
            return d.address.city === value;
          case "company":
            return d.company.name === value;
        }

        return true;
      })
    );
  });

  return (
    <>
      {error ? (
        <SnackBar message="Error occured try later" />
      ) : renderData?.length ? (
        <div>
          <div className="chips">
            {chips.map((chip) => {
              return (
                <a
                  key={chip.value}
                  href="#"
                  className="chip"
                  data-key={chip.key}
                  data-value={chip.value}
                  onClick={chipOnClickCB}
                >
                  {chip.value}
                </a>
              );
            })}
          </div>
          <table>
            <thead>
              <tr>
                <td>S no</td>
                <td>Name</td>
                <td>City</td>
                <td>Company</td>
              </tr>
            </thead>
            <tbody>
              {renderData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.address.city}</td>
                    <td>{user.company.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Data is fetching</div>
      )}
    </>
  );
}

// name, city, company name,
