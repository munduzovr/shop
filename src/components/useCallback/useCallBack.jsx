import React, { useCallback, useEffect, useState } from 'react';

const Example = ({modalContent, closeModal}) => {
    // useEffect - это хук, поэтому его можно вызывать только на верхнем уровне компонента или в кастомных хуках. Мы не можем вызывать его внутри циклов и условий. 

//Best practise useEffect - нужно выполнять только одну задачу с использованием useffect
// //для нескольких задач нужно использовать несколькок useffect для одного и того же компонента
// назначение useEffect на короткие и одноцелевые функции предотвращают нежелательную повторную визуализацию и позволяет сохранить код чистым и читабельным.
    // useCallback - это хук React который позволяет кэшировать определение функции между повторными рендерингами. При первоначальном рендере useCallback возвращает переданную нами функцию. А при последующих рендерах она либо вернет уже сохранненую функцию из последнего рендера (если зависимости не изменились) либо вернет функцию которую мы передали во время этого рендера.

    const [count, setCount] = useState(0)
    const getRes = useCallback(() => {
        return 2 * 2
    }, [])

    useEffect(() => {
        setCount((count) => count + 1)
    }, [getRes])
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const { data } = await axios.get('.../api/user')
    //         setUser(data)
    //     }
    //     getUsers()
    // }, [])
    // useEffect(() => {
    //     let timeout = setTimeout(() => closeModal(), 3000)
    //     return () => clearTimeout(timeout)
    // })


    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(items));

    },[])

    useEffect(()=>{
        const products = JSON.parse(localStorage.getItem('items'))
        console.log(products);
    },[])
    return (
        <div>
            <p> value f count{count}</p>
        </div>
    );
};

export default Example;