import React, {useEffect} from "react"
import { Dispatch } from "redux"
import { useDispatch, shallowEqual,  useSelector } from "react-redux"
import './Category.scss'
import { getCategories, selectCategory } from "../../store/category/actionCreators"
import { reset } from "../../store/image/actionCreators"

import { Link } from "react-router-dom";

type Props = {
    id:number
}

export const Category: React.FC<Props> = ({id}) => {
    const dispatch: Dispatch<any> = useDispatch()

    const categories: readonly category[] = useSelector(
        (state: StoreType) => state.category.categories,
        shallowEqual
    )
    const selected: category | null = useSelector(
        (state: StoreType) => state.category.selected,
        shallowEqual
    )
    // @ts-ignore
    useEffect(() => dispatch(getCategories()), [dispatch])

    const handleSelectCategory = () =>{
        debugger
        const category : category | undefined = categories.find(elem=>elem.id === +id)
        dispatch(selectCategory(category))
        dispatch(reset())
    }

    useEffect(handleSelectCategory, [id, categories, dispatch])



    return (
        <ul className="category">
            <li
                className={selected?.id ? '' : 'active'}
            >
                <Link to={`/`}>Home</Link>
            </li>
            {categories?.map(category =>{
                return <li
                    key={category.id}
                    className={selected?.id === category.id ? 'active' : ''}
                >
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </li>
            })}
        </ul>
    )
}
export default Category