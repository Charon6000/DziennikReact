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
        <table class="font-serif table-auto w-full text-white bg-blue-700 text-center">
            <thead>
                <tr>
                    <th class="border-4 border-orange-700 text-xl">ID</th>
                    <th class="border-4 border-orange-700 text-xl">Imie</th>
                    <th class="border-4 border-orange-700 text-xl">Nazwisko</th>
                    <th class="border-4 border-orange-700 text-xl">Przedmiot</th>
                </tr>
            </thead>
            <tbody>
                {uczniowie.map((ucz, index)=>{
                    return (
                        <tr>
                            <td class="border-4 border-green-700 text-lg">{ucz.id}</td>
                            <td class="border-4 border-green-700 text-lg">{ucz.imie}</td>
                            <td class="border-4 border-green-700 text-lg">{ucz.nazwisko}</td>
                            <td class="border-4 border-green-700 text-lg">{ucz.przedmiot}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
        </>
    )

}