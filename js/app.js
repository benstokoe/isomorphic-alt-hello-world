import React from 'react';
import router from './router';
import App from './components/App.react';

router.run(function(Handler) {
    React.render(
        <Handler />,
        document.getElementById('app')
    )
});
