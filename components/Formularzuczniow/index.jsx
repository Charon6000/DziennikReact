"use-client"
import { useState, useEffect} from "react";

export default function Formularzuczniow({uczniowie})
{
    const[imie,setImie] = useState();
    const[nazwisko,setNazwisko] = useState();
    const[plec,setPlec] = useState();
    const[klasa, setKlasa] = useState([]);
    const[klasy, setKlasy] = useState([]);
    const[id,setId] = useState();

    // const[imiee,setImiee] = useState();
    // const[nazwiskoe,setNazwiskoe] = useState();
    // const[plece,setPlece] = useState();
    // const[klasae, setKlasae] = useState([]);
    // const[ide,setIde] = useState();
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
        if(klasa.length==0)
            setKlasa(1)

        if(plec != 1 || plec != 0)
            setPlec(1)

        const res = await fetch('api/uczniowie',{
            method: "POST",
            body: JSON.stringify({'imie': imie, 'nazwisko':nazwisko, 'plec':plec, 'klasa':klasa})
        })
        location.reload()
    }
    
    const Usun = async()=>{
        const res = await fetch('api/uczniowie',{
            method: "DELETE",
            body: JSON.stringify({'id':id})
        })
        location.reload()
    }

    // const Edytuj = async()=>{
    //     const res = await fetch('api/uczniowie',{
    //         method: "UPDATE",
    //         body: JSON.stringify({'id':ide, 'imie': imiee, 'nazwisko':nazwiskoe, 'plec':plece, 'klasa':klasae})
    //     })
    //     // const data = await res.json();
    //     // setUczniowie((p) => {return([...p,data[0]])});
    // }

    return(
        <>
        <div>
            <h2>Dodawanie</h2>
            <p class="text-white">Klasa: <select class="text-black bg-orange-700" name={klasa} onChange={(e)=>setKlasa(e.target.value)}>
                {klasy.map((kl,index)=>{
                        return(
                            <option class ="text-black"value={kl.id}>{kl.nazwa}</option>
                        )
                })}
            </select><br/></p>
            <p class="text-white">Imie:<input class="text-black" name="imie" value={imie} onChange={(e)=>setImie(e.target.value)}/></p>
            <p class="text-white">Nazwisko:<input class="text-black" name="plec" value={nazwisko} onChange={(e)=>setNazwisko(e.target.value)}/></p>
            {/* <p class="text-white">Plec:<input class="text-black" name="plec" value={plec} onChange={(e)=>setPlec(e.target.value)}/></p> */}
            <p class="text-white">Plec: <select class="text-black bg-orange-700" name={plec} onChange={(e)=>setPlec(e.target.value)}>
                <option selected class ="text-black"value='1'>Mezczyzna</option>
                <option class ="text-black"value='0'>Kobieta</option>
            </select><br/></p>
            <button type="button" onClick={Wyslij}>Wyslij</button>
            <br/>
        </div>
        <div class="">
            <h2>Usuwanie</h2>
            {/* <p class="text-white">Id:<input class="text-black" name="id" value={id} onChange={(e)=>setId(e.target.value)}/></p> */}
            <p class="text-white">ID: <select class="text-black bg-orange-700" name={id} onChange={(e)=>setId(e.target.value)}>
                {uczniowie.map((kl,index)=>{
                        return(
                            <option class ="text-black"value={kl.id}>{kl.id}</option>
                        )
                })}
            </select><br/></p>
            <button type="button" onClick={Usun}>Usun</button>
            <br/>
        </div>
        {/*<h2>Edycja</h2>
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
        <button type="button" onClick={Edytuj}>Edytuj</button>*/}
        </>
    )
}