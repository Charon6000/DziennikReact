import { NextResponse } from "next/server";
const mysql = require('mysql2/promise');

export async function GET(request)
{
    const conn = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'dziennik'
        }
    )

    const [rows] = await conn.execute("Select * From uczniowie");
    conn.end();
    return NextResponse.json(rows);
}

export async function POST(request)
{
    const conn = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'dziennik'
        }
    )
    const body = await request.json();
    console.log(body);
    const [rows] = await conn.execute("INSERT INTO uczniowie (imie,nazwisko,plec,klasa) VALUES (?,?,?,?)",[body.imie, body.nazwisko,body.plec,body.klasa]);
    conn.end();
    return NextResponse.json(rows);
}

export async function DELETE(request)
{
    const conn = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'dziennik'
        }
    )
    const body = await request.json();
    console.log(body);
    const [rows] = await conn.execute("DELETE FROM uczniowie WHERE id LIKE ?",[body.id]);
    conn.end();
    return NextResponse.json(rows);
}

export async function UPDATE(request)
{
    const conn = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'dziennik'
        }
    )
    const body = await request.json();
    
    const [rows] = await conn.execute("UPDATE uczniowie SET imie = '?', nazwisko='?', plec=?, klasa=? WHERE id LIKE ?",[body.imie, body.nazwisko, body.plec, body.klasa, body.id]);
    conn.end();
    return NextResponse.json(rows);
}