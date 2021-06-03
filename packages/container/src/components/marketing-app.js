import React, { useRef, useLayoutEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';


export const MarketingApp = () => {
    const rootRef = useRef();
    const history = useHistory();
    useLayoutEffect(() => {

        const { onParentNavigate } = mount(rootRef.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location;
                if ( pathname !== nextPathName ) {
                    history.push(nextPathName)
                }
            }
        });

    history.listen(onParentNavigate)
    }, [])
    return <div ref={rootRef}/>
}
