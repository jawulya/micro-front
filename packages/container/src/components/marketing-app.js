import React, { useRef, useLayoutEffect } from 'react';
import { mount } from 'marketing/MarketingApp';


export const MarketingApp = () => {
    const rootRef = useRef();
    useLayoutEffect(() => {
        mount(rootRef.current);
    })
    return <div ref={rootRef}/>
}
