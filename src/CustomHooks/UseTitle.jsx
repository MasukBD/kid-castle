import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - Kids - Castle - Toy - Shop`
    }, [title])
};

export default UseTitle;