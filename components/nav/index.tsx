import {useState} from "react";

import './styles.css'
import {TransportFormCard} from "../transportFormCard";

export const Navigation = () => {
	const [activeTab, setActiveTab] = useState('forms');
	
	return (
		<>
			<nav className="header__nav">
				<ul className="header__nav--list">
					<li className="header__nav--list--item">
						<button
							className={`item--button ${activeTab === 'forms' ? 'active' : ''}`}
							onClick={() => setActiveTab('forms')}
						>
							Главная
						</button>
					</li>
					<li className="header__nav--list--item">
						<button
							className={`item--button ${activeTab === 'drafts' ? 'active' : ''}`}
							onClick={() => setActiveTab('drafts')}
						>
							Черновики
						</button>
					</li>
					<li className="header__nav--list--item">
						<button
							className={`item--button ${activeTab === 'settings' ? 'active' : ''}`}
							onClick={() => setActiveTab('settings')}
						>
							Настройки
						</button>
					</li>
				</ul>
			</nav>
			<div className="tab-content">
				{activeTab === 'drafts' && <div>Содержимое черновиков</div>}
				{activeTab === 'forms' && <TransportFormCard/>}
				{activeTab === 'settings' && <div>Содержимое настроек</div>}
			</div>
		</>
	)
}
