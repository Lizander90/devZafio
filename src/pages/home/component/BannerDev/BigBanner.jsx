import React from 'react'
import imgBanner from '../../../../assets/devSafioImageBanner.svg'

const BigBanner = () => {
    return <>
        <div className='container-big-banner'>
            <div className='big-banner-left'>
                <p className='big--text--title'
                    style={{ color: '#ffff' }}>
                    ¿Buscas talento TI?
                </p>
                <div className='medium--text--title article-tittle'
                    style={{ color: '#ffff' }}>
                    <span>Contrata</span> <span style={{ color: 'rgba(0, 143, 247, 1)' }}>Talento TI </span><span>rápdo,</span><br />
                    inteligente y eficiente
                </div>
                <p className='info--text--normal'
                style={{ color: '#ffff' }}>
                    Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades<br/> técnicas
                </p>
                <input className='btn-dev info--text--normal btn-white btn-contact-now' type={'button'} value={'Quiero contratar'}></input>
            </div>

            <div className='big-banner-right'>
                <img src={imgBanner}></img>
            </div>

        </div>
    </>
}

export default BigBanner




