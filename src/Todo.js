import React, {Component} from 'react'

class Todo extends Component{   // this : 정의한 컴포넌트를 가리킴
    constructor(props){
        super(props)
        this.state = {  // 초기 데이터
            name : "cleaning",
            done : false,
            description : 'cleaning my room on weekends'
        }
    }
    // 이벤트핸들러 함수    (생략가능)
    changeName = () => {
        console.log(this)
        this.setState({name : '변경됨!'})
    }
    
    // HTML 템플릿
    render(){
        const   {name, done, description} = this.state  // 구조분해
        const {user, friend} = this.props   //this.props : 외부에서 전달한 데이터 (객체)
        return(
            <>
            <h1>{user} - {friend}</h1>
            <h3>할 일 타이틀 : {name}</h3>
            <h4>할 일 상태 : {done ? "완료" : "진행중"}</h4>
            <p>할 일에 대한 설명 : {description}</p>
            <button onClick={this.changeName}>할 일 타이틀 변경</button>
            </>
        )
    }
}

export default Todo