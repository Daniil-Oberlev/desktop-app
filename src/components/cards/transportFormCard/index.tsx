import './styles.css'

export const TransportFormCard = () => {
  return (
    <>
      <form>
        <article className='card'>
        <h2>Форма учета грузоперевозки</h2>
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

        <div className='card__item card__item--double-input'>
          <div>
            <label>Объем груза</label>
            <div className='card__item--double-input-item card__item--input-select'>
              <input
                type='number'
                step='0.1'
                required
                placeholder='10.5'
              />
              <select>
                <option value='cubic'>м³</option>
                <option value='kg'>кг</option>
                <option value='pieces'>шт</option>
              </select>
            </div>
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
        </article>
      </form>
    </>
  )
}
