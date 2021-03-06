import React,{useState} from 'react'
import { useGlobal } from '../context/GlobalContext'

import Header from '../components/header/Header'
import CardWithIcon from '../components/cards/exploreVideoCard/cardIcon'
import PlayListModal from '../components/playlistmanagment/playlistmodal/playlistmodal'

import './landing.css'
import { ScrollSpy } from 'bootstrap'
import { ScrollToTop } from '../components/scrolltotop/ScroolTotop'


function TrendingPage() {
    const {globalVideos, globalStateProperties,curretcategory,setCurrentCategory } = useGlobal();
    const [openmodal,setModalOpen] = useState(false)
    return (
        <>
            <div className='trend-page'>
                <ScrollToTop/>
                <Header />
                <PlayListModal openModal={openmodal} setModal={setModalOpen}/>
                <CardWithIcon openModal={openmodal} setModal={setModalOpen} setCurrentCategory={setCurrentCategory} globalVideos ={globalVideos} />   
            </div>
        </>
    )
}

export default TrendingPage
