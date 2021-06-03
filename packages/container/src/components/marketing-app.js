import React, { useRef, useLayoutEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';


export default () => {
    const rootRef = useRef();
    const history = useHistory();
    useLayoutEffect(() => {

        const { onParentNavigate } = mount(rootRef.current, {
            initialPath: history.location.pathname,
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
