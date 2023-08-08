import React from 'react'
import styler from './Image.module.scss'


const  Image: React.FC = () :JSX.Element => {
    
    const testArray = [1,3,4,3]

    const count = testArray.length

    const classImage = (num: number) =>{
        if(num === 1){
            return styler.imageContainerOne
        }else if
        (num === 2){
            return styler.imagesContainerTwo
        }
        else{
            return styler.imageContainerTree
        }
    }

    return (
        <div className={styler.imageContainer}>
            <div className={styler.imageText}>
                <div>Ваши фотографии:</div>
                <div className={styler.ImageCounter}>{count}</div>
            </div>
            <div className={classImage(count)}>
                {testArray.map(item => <div className={styler.images}><img src='' alt="" /></div>)}
            </div>
        </div>
    )
}

export default Image
