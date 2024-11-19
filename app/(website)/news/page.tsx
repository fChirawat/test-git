import newsdb from "./db"
import Link from "next/link"

async function getAllNews() {
    return newsdb
}

export default async function NewsPage(){

    const new_list = await getAllNews()

    return(
        <>
            <div>
                แสดงรายการข่าว
            </div>
            <div>
                <ul>
                    {new_list.map(item => (
                        <li key={item.id}>
                            <Link href={`/news/${item.id}`}>
                            {item.title}
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}