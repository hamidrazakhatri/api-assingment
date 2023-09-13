import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Screen() {
  let navigation = useNavigate();
  const [data, seTdata] = useState([]);

  const getdata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        seTdata([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(data);
    getdata();
  }, []);
  const Del = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then(() => {console.log('ok')})
      .catch((err) => {});
    console.log(id);
  };

  return (
    <div>
      {data.map((e, i) => {
        return (
          <>
            <div key={i}>
              <p> name : {e.name}</p>
              <p> body : {e.body}</p>
              <p> email : {e.email}</p>
              <p>id : {e.id}</p>
              <button onClick={()=>{navigation(`/form/${e.id}`)}}> Edit</button>
              <button
                onClick={() => {
                  Del(e.id);
                }}
              >
                Delete
              </button>
              <hr />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Screen;
