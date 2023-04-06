const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ScholarNet`
    },[title])
}

export default useTitle;