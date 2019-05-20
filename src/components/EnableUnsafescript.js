//React imports
import React from 'react'

//Material UI components imports
import Card from '@material-ui/core/Card';

//MISC
import './component-styles.css';

const EnableUnsafescript = props => {
    return (
        // <div className='container-div'>
            // <Card className='enable-script-prompt'>
            //     <p>Please allow unsafe scripts to run on the browser </p>
            //     <p>(It's the shield icon on your url bar)</p>
            // </Card>
        // </div>

        <div class='flex-universal-align'>
            <div class="nes-container is-rounded is-dark font-p2play enable-script-prompt is-centered">
                <p>Please allow unsafe scripts to run on the browser </p>
                <p>(It's the shield icon on your url bar)</p>
            </div>
        </div>
    );
}

export default EnableUnsafescript;