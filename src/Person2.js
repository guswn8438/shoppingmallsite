// 1. JSX 문법을 사용하기 위함
// 2. React.Fragment 컴포넌트를 사용하기 위함
import React from 'react' 

function Person2(props){    // props 객체 : {name : "syleemomo", age : 3}

    return (
        <>
            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
        </>
    )
}


export default Person2  // 외부에서 해당 컴포넌트를 사용하기 위함