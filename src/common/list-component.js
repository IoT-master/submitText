import React from 'react';

function NumberList(props) {
    const itemList = props.myList;
    const listItems = itemList.map((item, index) =>
        <li key={props.idList[index]}>
            {item}
        </li>
    );
    if (props.orderedList){
        return (
            <ol>{listItems}</ol>
        )
    } else {
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default NumberList;