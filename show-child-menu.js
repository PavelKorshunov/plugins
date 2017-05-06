/*
** Copyright by Pavel Korshunov. All right reserved
** Для использования взамен level-1-item проставляю класс по которому необходимо найти li элементы первого уровня
** Взамен nav__item--is-expanded проставляю класс, которой будет добавлен.
** У элементов ul класса nav__item--is-expanded необходимо прописать css свойства,
** которые будут отвечать за отображение при добавлении класса nav__item--is-expanded
*/
(function() {
	"use strict"
	var menuNav = {
		init: function() {
			this.variables();
			this.showChildrenMenu();
			this.fadeChildrenMenu();
		},

		//Глобальные переменные объекта

		variables: function() 
		{
			this.firstItem = document.getElementsByClassName('level-1-item');
			this.html = document.documentElement;
		},

		//Показывает дочерние элементы меню

		showChildrenMenu: function() 
		{
			for (var i = 0; i < this.firstItem.length; i++) 
			{
				this.firstItem[i].addEventListener("click", function(event) 
				{
					var item = document.getElementsByClassName('level-1-item');
					for (var i = 0; i < item.length; i++) 
					{
						item[i].classList.remove("nav__item--is-expanded");
					}
					this.classList.add("nav__item--is-expanded");
					event.stopPropagation();
				});
			}
		},

		//Скрывает дочерние элементы меню при нажатии на html
		
		fadeChildrenMenu: function() 
		{
			var item = document.getElementsByClassName('level-1-item');
			this.html.addEventListener("click", function() 
			{
				for (var i = 0; i < item.length; i++) 
				{
					item[i].classList.remove("nav__item--is-expanded");
				}
			});

		},
	};
	menuNav.init();
})();