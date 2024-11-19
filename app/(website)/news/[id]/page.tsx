export default function NewBypage({
    params
}: {
    params: { id: number }
    
}) {
    return(
        <>
            <div>
                หน้าแสดงข่าวที่่ {params.id} Lorem ipsum dolor sit amet consectetur adipisicing elit. At libero enim sapiente doloremque ipsa officia nesciunt dolorum, rem, ad veniam nam tempora, laudantium delectus quia perspiciatis necessitatibus alias temporibus non?
            </div>
        </>
    )
}