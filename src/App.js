import React, { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState();
  const [people, setPeople] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getData();
  }, [query]);

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
  };

  const getData = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${query}/repos`);
      // console.log(resp);
      if (resp.ok) {
        const data = await resp.json();
        // console.log(data);
        setPeople(data);
        setError('');
      } else {
        throw new Error('Person not found');
      }
    } catch (e) {
      console.log(e);
      setPeople([]);
      setError('Person not found');
    }
  };

  // console.log(value);
  return (
    <>
      <div className='cont'>
        <div className='form-div'>
          <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={inputChange} />
            <button type='submit'>search</button>
          </form>
        </div>
      </div>
      <div className='cont1'>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
      <div className='tablecon cont'>
        <table>
          <thead>
            <tr>
              <th>Repo Name</th>
              <th>Language</th>
              <th>Discription</th>
            </tr>
          </thead>
          {people.map((cval, index) => {
            return (
              <tbody key={index}>
                <tr>
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
export default App;

// import React, { useEffect, useState } from 'react';

// // const apiurl = 'https://api.github.com/users/mojombo/repos';
// const MainApp = () => {
//   const [query, setQuery] = useState('');
//   const [user, setUser] = useState([]);
//   const [fdata, setFdata] = useState([]);

//   // console.log(query);

//   useEffect(() => {
//     getData();
//   }, [query]);

//   const InputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const getData = async () => {
//     const resp = await fetch(`https://api.github.com/users/${query}/repos`);
//     const data = await resp.json();
//     // console.log(data);
//     setUser(data);
//     // console.log(user);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFdata(user);
//   };

//   console.log(fdata);

//   return (
//     <>
//       <div className='cont'>
//         <div className='form-div'>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor='user' className='lab'>
//               Enter github user name
//             </label>
//             <input type='text' value={query} onChange={InputChange} />
//             <button type='submit'>submit</button>
//           </form>
//         </div>
//       </div>
//       {/* {fdata.map((cval) => {
//         console.log(cval);
//         return <h2></h2>;
//       })} */}
//       <div className='tablecon'>
//         <table>
//           <thead>
//             <tr>
//               <th>Repo Name</th>
//               <th>Language</th>
//               <th>Discription</th>
//             </tr>
//           </thead>
//           {fdata.map((cval, index) => {
//             return (
//               <tbody>
//                 <tr key={index}>
//                   <td>{cval.name}</td>
//                   <td>{cval.language}</td>
//                   <td>{cval.description}</td>
//                 </tr>
//               </tbody>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default MainApp;
