document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('button');
	const audio = document.getElementById('myAudio');

	function playAudio() {
		audio.currentTime = 0;
		audio.play().catch(error => {
			console.error("Ошибка воспроизведения аудио:", error);
		});
	}

	if (button && audio) {
		button.addEventListener('click', () => {
			playAudio();
		});
	} else {
		console.error("Не удалось найти элементы кнопки или аудио.");
	}
});
