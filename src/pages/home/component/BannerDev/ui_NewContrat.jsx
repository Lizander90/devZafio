import React from 'react'

const NewContrat_article = () => {
    return <>
        <div className='container--bigBanner-info'>
            <p className='big--text--title'
                style={{ color: '#ffff' }}>
                ¿Buscas talento TI?
            </p>
            <div className='medium--text--title article-tittle'
                style={{ color: '#ffff' }}>
                <span>Contrata</span> <span style={{ color: 'rgba(0, 143, 247, 1)' }}>Talento TI </span><span>rápdo,</span>
                inteligente y eficiente
            </div>
            <p className='info--text--normal'
                style={{ color: '#ffff' }}>
                Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas
            </p>
            <a className='btn-dev-a btn-white' href='#'>QUIERO CONTRATAR</a>
            {/* <input
                className='btn-dev info--text--normal btn-white btn-contact-now'
                type={'button'} value={'QUIERO CONTRATAR'}></input> */}
        </div>
    </>
}

export default NewContrat_article