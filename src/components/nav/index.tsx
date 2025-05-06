import { useState } from 'react'

import { TransportFormCard } from '../transportFormCard'

import './styles.css'

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState('forms')

  return (
    <>
      <nav className='header__nav'>
        <ul className='header__nav--list'>
          <li className='header__nav--list--item'>
            <button
              className={`item--button ${activeTab === 'forms' ? 'active' : ''}`}
              onClick={() => setActiveTab('forms')}
            >
              Главная
            </button>
          </li>
          <li className='header__nav--list--item'>
            <button
              className={`item--button ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Настройки
            </button>
          </li>
        </ul>
      </nav>
      <div className='tab-content'>
        {activeTab === 'forms' && <TransportFormCard />}
        {activeTab === 'settings' && <div>Содержимое настроек</div>}
      </div>
    </>
  )
}
