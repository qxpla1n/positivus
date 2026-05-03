export function burgerAction(e) {
	const burger = e.target.closest('.burger-btn')
	if (!burger) return

	// проверяем, открыто ли меню
	const isOpen = document.documentElement.hasAttribute('data-menu-open')

	// переключаем меню
	document.documentElement.toggleAttribute('data-menu-open', !isOpen)
	document.documentElement.classList.toggle('is-lock', !isOpen)

	burger.setAttribute('aria-label', !isOpen ? 'Close navigation menu' : 'Open navigation menu')

	// обновляем aria-expanded кнопки
	burger.setAttribute('aria-expanded', String(!isOpen))
}
