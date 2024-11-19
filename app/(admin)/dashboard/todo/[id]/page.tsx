import { mysqlPool } from "@/app/utils/db"

export default async function TodoViewpage( {
    params
    
}: {
    params: { id: number }
}) {
    const todosId = await params.id
    const promisePool = mysqlPool.promise()
    const [rows,fields] = await promisePool.execute(`select * from todos where id = ${todosId}`)

    if(rows.length >0){

        const data = rows[0];
        return (
            <>
                <div className="p-3">
                    <h1>Todo view : {todosId}</h1>
                    <div>title : {data.title}</div>
                    <div>Description : {data.description} </div>
                    <div>Created At : {data.created_at.toISOString()}</div>
                    <div>Updared At : {data.updated_at.toISOString()}</div>

                    {/* <div>
                        <Link href={}
                    </div> */}
                </div>
            </>
        )
    }else {
    return(
        <>
            <div className="p-3">
                <h1>NO DATA Found</h1>
            </div>
        </>
        )
    }   
}