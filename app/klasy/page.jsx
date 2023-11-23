"use client"
import {useState, useEffect} from 'react';

export default function Strona()
{
    const [uczniowie, setUczniowie] = useState([]);
    useEffect(()=>{
        async function dane()
        {
            const data = await fetch('/api/klasy');
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
                    <th>Nazwa</th>
                    <th>Szkola</th>
                    <th>Wychowawca</th>
                </tr>
            </thead>
            <tbody>
                {uczniowie.map((ucz, index)=>{
                    return (
                        <tr>
                            <td>{ucz.id}</td>
                            <td>{ucz.nazwa}</td>
                            <td>{ucz.szkola}</td>
                            <td>{ucz.wychowawca}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
        </>
    )

}