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

    const [rows] = await conn.execute("Select * From szkoly");
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
    const [rows] = await conn.execute("INSERT INTO szkoly (nazwa) VALUES (?)",[body.nazwa]);
    conn.end();
    return NextResponse.json(rows);
}