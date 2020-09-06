const func = ({dispatch, getState}) => (next) => (action) => {
    if(typeof (action) === 'function') {
        action(dispatch, getState);
    }
    next(action);

};

export default func;