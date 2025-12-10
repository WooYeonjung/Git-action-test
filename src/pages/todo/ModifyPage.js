import { useNavigate } from "react-router-dom";

const ModifyPage = ({ tno }) => {
    const navigate = useNavigate();
    const moveToRead = useCallback(() => {
        navigate({ pathname: `/todo/read/${tno}` })
    },[navigate])
    const moveToList =  useCallback(() => {
        navigate({ pathname: `/todo/list` })
    },[navigate])


    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page
        <div onClick={moveToRead}>
          moveToRead
        </div>
         <div onClick={moveToList}>
        </div>
        </div>
    );
}

export default ModifyPage;
