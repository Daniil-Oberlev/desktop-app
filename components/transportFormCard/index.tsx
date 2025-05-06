import './styles.css'

export const TransportFormCard = () => {
  return (
    <>
      <form className='card'>
        <h2 className='card__title'>Форма учета грузоперевозки</h2>
        <p className='card__description'>Заполните информацию о выполненной перевозке груза</p>
        <div className='card__item'>
          <label>Фамилия и инициалы водителя</label>
          <input
            required
            placeholder='Иванов И.И.'
            pattern='[А-ЯЁ][а-яё]+\s[А-ЯЁ][\.]?[А-ЯЁ][\.]?'
            title='Введите фамилию и инициалы через пробел (пример: Иванов И.И.)'
          />
          <p>Укажите фамилию и инициалы водителя</p>
        </div>

        <div className='card__item card__item--double-input'>
          <div className='card__item--double-input-item'>
            <label>Город отправления</label>
            <input
              required
              placeholder='Москва'
            />
          </div>
          <div className='card__item--double-input-item'>
            <label>Город назначения</label>
            <input
              required
              placeholder='Санкт-Петербург'
            />
          </div>
        </div>

        {/*<div className='card__item'>*/}
        {/*	<div className='card__item--add'>*/}
        {/*		<label>Промежуточные пункты</label>*/}
        {/*		<button className='card__item--add-button' type="button">+ Добавить пункт</button>*/}
        {/*	</div>*/}
        {/*	<p>Нет промежуточных пунктов. Добавьте их, если необходимо.</p>*/}
        {/*</div>*/}

        <div className='card__item card__item--double-input'>
          <div className='card__item--double-input-item'>
            <label>Объем груза (м³)</label>
            <input
              type='number'
              step='0.1'
              required
              placeholder='10.5'
            />
          </div>
          <div className='card__item--double-input-item'>
            <label>Расстояние (км)</label>
            <input
              type='number'
              step='0.01'
              required
              placeholder='650'
            />
          </div>
        </div>
      </form>
    </>
  )
}
