import React, { useEffect, useState } from 'react';

// const apiurl = 'https://api.github.com/users/mojombo/repos';
const MainApp = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState([]);
  const [fdata, setFdata] = useState([]);

  // console.log(query);

  useEffect(() => {
    getData();
  }, [query]);

  const InputChange = (e) => {
    setQuery(e.target.value);
  };

  const getData = async () => {
    const resp = await fetch(`https://api.github.com/users/${query}/repos`);
    const data = await resp.json();
    // console.log(data);
    setUser(data);
    // console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFdata(user);
  };

  console.log(fdata);

  return (
    <>
      <div className='cont'>
        <div className='form-div'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='user' className='lab'>
              Enter github user name
            </label>
            <input type='text' value={query} onChange={InputChange} />
            <button type='submit'>submit</button>
          </form>
        </div>
      </div>
      {/* {fdata.map((cval) => {
        console.log(cval);
        return <h2></h2>;
      })} */}
      <div className='tablecon'>
        <table>
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Language</th>
              <th>Discription</th>
            </tr>
          </thead>
          {fdata.map((cval, index) => {
            return (
              <tbody>
                <tr key={index}>
                  <td>{cval.name}</td>
                  <td>{cval.language}</td>
                  <td>{cval.description}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default MainApp;
