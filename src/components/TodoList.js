import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h2>hello from todo list</h2>
                <TodoItem />
            </section>
        )
    }
}
