export default function EditPage({
    params
}: {
    params: { id: number }
}) {
    return(
        <>
            <div>
                แก้ไขข้อมูลข่าว {params.id}
            </div>
        </>
    )
}