import React from 'react'
import { Container } from 'react-bootstrap'
import imgBanner from '../../../../assets/devSafioImageBanner.svg'
import NewContrat_article from './ui_NewContrat'

const BigBanner = () => {
    return <>
        <div className='container-big-banner' >
            <Container className='big-banner-left'>
                <NewContrat_article />
            </Container>
            <div className='big-banner-right'>
                <div className='container-img-banner'>
                    <img src={imgBanner}></img>
                </div>
            </div>

        </div>
    </>
}

export default BigBanner




