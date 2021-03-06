import React from 'react'
import Header from '../components/header/Header'
import Land from '../components/land/Land'
import Card from '../components/cards/CategoryCard/Card'
import { useGlobal } from '../context/GlobalContext'
import { ScrollToTop } from '../components/scrolltotop/ScroolTotop'

function LandingPage() {
    const { globalVidCategory } = useGlobal();
    return (
        <div className='main-land'>
            <ScrollToTop/>
            <Header />
            <Land />
            <Card Videoscatee={globalVidCategory} />
        </div>
    )
}

export default LandingPage
