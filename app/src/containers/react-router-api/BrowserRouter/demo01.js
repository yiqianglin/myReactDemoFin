/**
 * Created by cc on 2017/4/7.
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


class Demo extends React.Components{
    render(){

        return(
            <BrowserRouter
                basename={optionalString}
                forceRefresh={optionalBool}
                getUserConfirmation={optionalFunc}
                keyLength={optionalNumber}
            >
                <div>skdfjkdjfk</div>
            </BrowserRouter>
        )

    }
}

export default Demo