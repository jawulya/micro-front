import React, { useRef, useLayoutEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';


export default ({onSignIn}) => {
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
            },
            onSignIn() {
                onSignIn();
            }
        });

        history.listen(onParentNavigate)
    }, [])
    return <div ref={rootRef}/>
}
