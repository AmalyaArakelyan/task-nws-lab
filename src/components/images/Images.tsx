import React, {useEffect} from "react"
import { Dispatch } from "redux"
import { useDispatch, shallowEqual,  useSelector } from "react-redux"
import './Images.scss'
import { getImages, setPage } from "../../store/image/actionCreators"

type Props = {
}
export const Images: React.FC<Props> = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const images: readonly image[] = useSelector(
        (state: StoreType) => state.image.images,
        shallowEqual
    )
    const page: number = useSelector(
        (state: StoreType) => state.image.page,
        shallowEqual
    )
    const selected: category | null = useSelector(
        (state: StoreType) => state.category.selected,
        shallowEqual
    )
    // @ts-ignore
    useEffect(() => dispatch(getImages(selected,page)), [selected, page])

    const handleSetPage = () =>{
        dispatch(setPage())
    }

    return (
        <div className="images">
            <ul >
                {images?.map(image =>{
                    return <li key={image.id}>
                        <img src={image.url}/>
                    </li>
                })
                }
            </ul>
            {images.length? <button type="button" onClick={handleSetPage}>Load More</button> : null}
        </div>
    )
}
export default Images