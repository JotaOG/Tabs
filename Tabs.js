import React from 'react';


export const Tabs = props => {

    const onClickHandler = (e, value) => {
        props.setContent(value);
    }

return props.tab.map((item, index)=>{
    return <button key={index} onClick={(e) => onClickHandler(e, item.message)}>{item.name}</button>})
}
