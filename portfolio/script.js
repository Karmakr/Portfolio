document.addEventListener("DOMContentLoaded", function() {
  // Получаем все блоки
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    const imgElement = item.querySelector('.portfolio-img');
    
    // Для блока 10 свои изображения
    const imagePaths = [];
    
	if (item.id === "block1") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work1.png', 'images/image4.jpeg');
    }
	if (item.id === "block2") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block3") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block4") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block5") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block6") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block7") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block8") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block9") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
    // Проверяем, это ли блок 10
    if (item.id === "block10") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
	if (item.id === "block11") {
      // Добавляем изображения для 10-го блока
      imagePaths.push('images/work3.png', 'images/work2.png');
    }
    // Можно добавить другие условия для других блоков, если необходимо

    let currentIndex = 0; // Индекс текущего изображения

    // Обработчик кнопки "следующее изображение"
    item.querySelector('.next')?.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % imagePaths.length; // Переход к следующему изображению
      imgElement.src = ''; // Очищаем src перед загрузкой нового изображения
      imgElement.src = imagePaths[currentIndex]; // Обновляем источник изображения
    });

    // Обработчик кнопки "предыдущее изображение"
    item.querySelector('.prev')?.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length; // Переход к предыдущему изображению
      imgElement.src = ''; // Очищаем src перед загрузкой нового изображения
      imgElement.src = imagePaths[currentIndex]; // Обновляем источник изображения
    });
  });
});
