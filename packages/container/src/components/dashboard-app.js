import React, { useRef, useLayoutEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
    const rootRef = useRef();

    useLayoutEffect(() => {
        mount(rootRef.current)
    }, [])

    return <div ref={rootRef}/>
}
