"use-client"
import { useState, useEffect} from "react";


export default function Formularzuczniow({setUczniowie})
{
    const[imie,setImie] = useState();
    const[nazwisko,setNazwisko] = useState();
    const[plec,setPlec] = useState();
    const[klasa, setKlasa] = useState([]);
    const[klasy, setKlasy] = useState([]);
    const[id,setId] = useState();

    const[imiee,setImiee] = useState();
    const[nazwiskoe,setNazwiskoe] = useState();
    const[plece,setPlece] = useState();
    const[klasae, setKlasae] = useState([]);
    const[ide,setIde] = useState();
    useEffect(()=>{
        async function dane()
        {
            const data = await fetch('/api/klasy');
            const kl = await data.json();
            setKlasy(kl);
        }
        dane()
    },[])
    const Wyslij = async()=>{
        const res = await fetch('api/uczniowie',{
            method: "POST",
            body: JSON.stringify({'imie': imie, 'nazwisko':nazwisko, 'plec':plec, 'klasa':klasa})
        })
        const data = await res.json();
        setUczniowie((p) => {return([...p,data[0]])});
    }
    
    const Usun = async()=>{
        const res = await fetch('api/uczniowie',{
            method: "DELETE",
            body: JSON.stringify({'id':id})
        })
        const data = await res.json();
        setUczniowie((p) => {return([...p,data[0]])});
    }

    const Edytuj = async()=>{
        const res = await fetch('api/uczniowie',{
            method: "UPDATE",
            body: JSON.stringify({'id':ide, 'imie': imiee, 'nazwisko':nazwiskoe, 'plec':plece, 'klasa':klasae})
        })
        const data = await res.json();
        setUczniowie((p) => {return([...p,data[0]])});
    }

    return(
        <>
        <p class="text-white">Klasa: <select class="text-black bg-orange-700" name={klasa} onChange={(e)=>setKlasa(e.target.value)}>
            {klasy.map((kl,index)=>{
                return(
                    <option class ="text-black"value={kl.id}>{kl.nazwa}</option>
                )
            })}
        </select><br/></p>
        <h2>Dodawanie</h2>
        <p class="text-white">Imie:<input class="text-black" name="imie" value={imie} onChange={(e)=>setImie(e.target.value)}/></p>
        <p class="text-white">Nazwisko:<input class="text-black" name="plec" value={nazwisko} onChange={(e)=>setNazwisko(e.target.value)}/></p>
        <p class="text-white">Plec:<input class="text-black" name="plec" value={plec} onChange={(e)=>setPlec(e.target.value)}/></p>
        <button type="button" onClick={Wyslij}>Wyslij</button>
        <br/>
        <h2>Usuwanie</h2>
        <p class="text-white">Id:<input class="text-black" name="id" value={id} onChange={(e)=>setId(e.target.value)}/></p>
        <button type="button" onClick={Usun}>Usun</button>
        <br/>
        <h2>Edycja</h2>
        <p class="text-white">Id:<input class="text-black" name="id" value={ide} onChange={(e)=>setIde(e.target.value)}/></p>
        <p class="text-white">Imie:<input class="text-black" name="imie" value={imiee} onChange={(e)=>setImiee(e.target.value)}/></p>
        <p class="text-white">Nazwisko:<input class="text-black" name="plec" value={nazwiskoe} onChange={(e)=>setNazwiskoe(e.target.value)}/></p>
        <p class="text-white">Plec:<input class="text-black" name="plec" value={plece} onChange={(e)=>setPlece(e.target.value)}/></p>
        <p class="text-white">Klasa: <select class="text-black bg-orange-700" name={klasae} onChange={(e)=>setKlasae(e.target.value)}>
            {klasy.map((kl,index)=>{
                return(
                    <option class ="text-black"value={kl.id}>{kl.nazwa}</option>
                )
            })}
        </select><br/></p>
        <button type="button" onClick={Edytuj}>Edytuj</button>
        </>
    )
}