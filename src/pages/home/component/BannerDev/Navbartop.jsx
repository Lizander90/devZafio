import React from 'react'
import './style/Navbartop.scss'
import logo from '../../../../assets/devSafioLogo.svg'

const Navbartop = () => {
    return (
        <div className='navbar-top'>
            <div className='navbar-part-left'><img src={logo}></img></div>

            <div className='navbar-part-right'>
                <div className='nav-ul-list info--text--normal'>
                    <a href='#'>Inicia sesión</a>
                    <a href='#'>Administra la página</a>
                </div>

                <div className='container-button'>
                    <input type={'button'} className='btn-dev info--text--normal btn-transparent ' value={'Registrate'} />
                    <input type={'button'} className='btn-dev info--text--normal btn-white' value={'Contáctanos'} />
                </div>
            </div>

        </div>
    )
}

export default Navbartop