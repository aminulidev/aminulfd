import React, {useState, useEffect} from 'react';

export default function Year() {

    const [year , setYear] = useState();

    const getYear = () =>  setYear(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, [])
  return (
    <>
        {year}
    </>
  );
}