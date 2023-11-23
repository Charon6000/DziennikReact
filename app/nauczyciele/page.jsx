"use client"
import {useState, useEffect} from 'react';

export default function Strona()
{
    const [uczniowie, setUczniowie] = useState([]);
    useEffect(()=>{
        async function dane()
        {
            const data = await fetch('/api/nauczyciele');
            const ucz = await data.json();
            setUczniowie(ucz);
        }
        dane()
    },[])
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Przedmiot</th>
                </tr>
            </thead>
            <tbody>
                {uczniowie.map((ucz, index)=>{
                    return (
                        <tr>
                            <td>{ucz.id}</td>
                            <td>{ucz.imie}</td>
                            <td>{ucz.nazwisko}</td>
                            <td>{ucz.przedmiot}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
        </>
    )

}