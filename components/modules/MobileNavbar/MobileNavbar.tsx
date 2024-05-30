'use client' // Потому что использую дериктиву useLang
import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import {
  closeCatalogMenu,
  closeMenu,
  openCatalogMenu,
  openMenu,
} from '@/context/madalas'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import CatalogMenu from '../Header/CatalogMenu'

const MobileNavbar = () => {
  const { lang, translations } = useLang()

  const handleOpenMenu = () => {
    addOverflowHiddenToBody()
    openMenu()
    closeCatalogMenu()
  }

  const handleOpenCatalogMenu = () => {
    addOverflowHiddenToBody('0')
    openCatalogMenu()
    closeMenu()
  }

  return (
    <>
      <CatalogMenu />
      <div className='mobile-navbar'>
        <Link href='/' className='mobile-navbar__btn'>
          {translations[lang].breadcrumbs.main}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenCatalogMenu}
        >
          {translations[lang].breadcrumbs.catalog}
        </button>
        <Link className='btn-reset mobile-navbar__btn' href='/favorites'>
          {translations[lang].breadcrumbs.favorites}
        </Link>
        <Link className='btn-reset mobile-navbar__btn' href='/cart'>
          {translations[lang].breadcrumbs.cart}
        </Link>
        <button
          className='btn-reset mobile-navbar__btn'
          onClick={handleOpenMenu}
        >
          {translations[lang].common.more}
        </button>
      </div>
    </>
  )
}

export default MobileNavbar
