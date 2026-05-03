// fade.js
export default function initFade() {
	const scrollEls = document.querySelectorAll('.hero__partners-scroll')
	if (!scrollEls.length) return

	function updateFade(scrollEl) {
		const { scrollLeft, scrollWidth, clientWidth } = scrollEl

		const hasOverflow = scrollWidth > clientWidth

		// центрирование toggle
		scrollEl.classList.toggle('is-overflow', hasOverflow)

		// если нет overflow — убираем fade
		if (!hasOverflow) {
			scrollEl.classList.remove(
				'hero__partners-scroll--left',
				'hero__partners-scroll--right',
				'hero__partners-scroll--both',
			)
			return
		}

		const canScrollLeft = scrollLeft > 0

		// 💡 фикс дергания на последнем пикселе
		const canScrollRight = Math.ceil(scrollLeft + clientWidth) < scrollWidth

		scrollEl.classList.remove(
			'hero__partners-scroll--left',
			'hero__partners-scroll--right',
			'hero__partners-scroll--both',
		)

		if (canScrollLeft && canScrollRight) {
			scrollEl.classList.add('hero__partners-scroll--both')
		} else if (canScrollLeft) {
			scrollEl.classList.add('hero__partners-scroll--left')
		} else if (canScrollRight) {
			scrollEl.classList.add('hero__partners-scroll--right')
		}
	}

	// 👉 один общий resize handler
	function handleResize() {
		scrollEls.forEach(scrollEl => updateFade(scrollEl))
	}

	scrollEls.forEach(scrollEl => {
		let ticking = false

		function handleScroll() {
			if (!ticking) {
				requestAnimationFrame(() => {
					updateFade(scrollEl)
					ticking = false
				})
				ticking = true
			}
		}

		// init
		updateFade(scrollEl)

		// scroll
		scrollEl.addEventListener('scroll', handleScroll)
	})

	// resize (один на все элементы)
	window.addEventListener('resize', () => {
		requestAnimationFrame(handleResize)
	})
}
