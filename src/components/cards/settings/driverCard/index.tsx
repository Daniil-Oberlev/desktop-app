export const DriverCard = () => {
  return (
    <>
      <article className='card'>
        <h2>Настройки водителей</h2>
        <p className='card__description'>Добавьте водителей, которые будут доступны для выбора в формах</p>
        <div className='card__item card__item--input-select'>
          <input placeholder={'Введите ФИО водителя'} required></input>
          <button>+&nbsp;Добавить</button>
          <p>Нет добавленных водителей</p>
        </div>
      </article>
    </>
  )
}
