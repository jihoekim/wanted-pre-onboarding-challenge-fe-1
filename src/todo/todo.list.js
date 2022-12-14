// @ts-check

import {
    List 
} from '@mui/material';

import React from "react";
import TodoListItem from "./todo.list.iteml.js";

/** 
 * @typedef {object} Props
 * @prop {Array} todos
 * @prop {string|null=} selected
 * @prop {function|null} [onSelect] callback for selected Todo changes
 * 
 * @param {Props} props
 */
function TodoList(props) {

    /**
     * 
     * @param {string} id 
     */
    function handleSelected(id) {
        if (props.onSelect) props.onSelect(id);
    }

    return (
        <List>
            {
                props.todos?.length > 0 ?
                props.todos.map(
                    (todo) => <TodoListItem 
                                key={todo.id} 
                                value={todo.title}
                                selected={todo.id=== props.selected}
                                onClick={()=>handleSelected(todo.id)}/>) 
                : <span>no todos</span>
            }
        </List>
    );
};

export default TodoList;