import { mysqlPool } from "@/app/utils/db"
import Link from "next/link";

export default async function TodoPage({}){
    const promisePool = mysqlPool.promise()
    const todos = await promisePool.execute("select * from todos")
    const [rows, fields] = todos;
    console.log(todos)
    return(
        <>
            <div>
                <h1>Todo list page</h1>
                <ul>
                    {rows.map(row => (<li key={row.id}>
                        <Link className="uderline text-blue-500"
                            href={'todo/'+row.id}>{row.title}</Link>
                            </li>))}
                </ul>
            </div>
        </>
    )
}   