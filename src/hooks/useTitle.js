import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Click With Jack`
    }, [title])
}
export default useTitle