import React, { useMemo, useState } from 'react'
import './style/Navbartop.scss'
import logo from '../../../../assets/devSafioLogo.svg'

// instale react-bootstrap-icons facilita el trabajo con iconos 
import { DistributeVertical, XLg } from 'react-bootstrap-icons';

const Navbartop = () => {
    const SCREEN_BREAK_POINT = 760;

    const getDimensionWindows = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return width;
    }
    const [movilMode, setMovilMode] = useState(getDimensionWindows() <= SCREEN_BREAK_POINT);

    //EL COMPONENETE SOLO SE RENDERIZA CUANDO CAMBIE DE VALOR movilMode
    window.addEventListener('resize', () => {
        console.log(getDimensionWindows())
        setMovilMode(getDimensionWindows() <= SCREEN_BREAK_POINT)
    })






    return (<>
        <div className='navbar-top'>
            <div className='navbar-part-left'><img src={logo}></img></div>
            <div className='navbar-part-right'>
                {/* //modo desktop */}
                {!movilMode &&
                    <>
                        <div className='nav-ul-list info--text--normal'>
                            <a className='info--text--normal' href='#'>Inicia sesión</a>
                            <a className='info--text--normal' href='#'>Administra la página</a>
                        </div>
                        <div className='container-button'>
                            {/* <input type={'button'} className='btn-dev info--text--normal 
                            btn-transparent ' value={'Registrate'} /> */}
                            <a className='btn-dev-a btn-blue' href='#'> Registrate</a>
                            <a className='btn-dev-a btn-white' href='#'> Contáctanos</a>
                        </div>
                    </>
                }
                {movilMode && <>
                    <DistributeVertical className='tooggle--icon--menu' />
                    {/* , XLg  */}
                </>

                }
            </div>

        </div>



        {/* <a href='#'>{movilMode}</a> */}
    </>
    )
}

export default Navbartop