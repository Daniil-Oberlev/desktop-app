import './styles.css'

export const confirmDeleteDialog = () => {
	return (
		<dialog>
			<h3>
				Удалить форму перевозки?
			</h3>
			<p>Это действие нельзя отменить. Вы уверены, что хотите удалить эту форму перевозки?</p>
			<button>Отмена</button>
			<button>Удалить</button>
		</dialog>
	)
}