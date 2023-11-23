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