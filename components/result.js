import React from 'react';
import Card from "./card/card";

const Result = ({cards}) => {
    return (
        <div>
            {cards?.map((item, index) => {
                return <Card name={item.node.name} owner={item.node.owner} key={index}/>
            })}
        </div>
    );
};

export default Result;
