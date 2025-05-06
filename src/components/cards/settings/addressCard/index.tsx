export const AddressCard = () => {
  return (
    <>
      <article className='card'>
        <h2>Настройки адресов</h2>
        <p className='card__description'>Добавьте адреса, которые будут доступны для выбора в формах</p>
        <div className='card__item card__item--input-select'>
          <input placeholder={'Введите адрес'} required></input>
          <button type='button'>+&nbsp;Добавить</button>
          <p>Нет добавленных водителей</p>
        </div>
      </article>
    </>
  )
}
