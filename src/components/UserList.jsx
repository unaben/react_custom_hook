import React from "react";
import useFetch from "../hooks/useFetch";

const UserList = () => {
  const URL = "https://api.github.com/users";
  const fetchedData = useFetch(URL);
  return (
    <>
      <ul className="mt-3 list-unstyled">
        <h2 className="text-center text-uppercase ">Fetched Data</h2>
        {!!fetchedData &&
          fetchedData.slice(0, 10).map((data) => {
            return (
              <div key={data.id} className="rounded">
                <img
                  src={data.avatar_url}
                  alt={data.login}
                  style={{ maxWidth: "150px" }}
                />
                <li>{data.login}</li>
              </div>
            );
          })}
      </ul>
    </>
  );
};

export default UserList;
