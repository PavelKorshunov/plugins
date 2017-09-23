function PKSimpleSlider(className, time)
{
	this.timer = time;
	this.classSlide = className;
	this.init();
};

PKSimpleSlider.prototype.init = function()
{
	this.DOMCollection();
	this.quantityItems();
	this.listSlide();
};

PKSimpleSlider.prototype.DOMCollection = function()
{
	this.slider = document.querySelector(this.classSlide);
	this.items = this.slider.getElementsByTagName('li');
};

PKSimpleSlider.prototype.quantityItems = function()
{
	this.count = 0;
	while(this.count < this.items.length - 1)
	{
		//console.log(this.count);
		this.count++;
	}
};

PKSimpleSlider.prototype.listSlide = function()
{

	var list = 0;
	function iteration()
	{
		//console.log(list);
		this.items[list].style.zIndex = 1;
		
		if(list - 1 >= 0) {
			// console.log(oldList);
			this.items[list - 1].style.zIndex = 0;
		}
		list < this.count ? list++ : list = 0;
	};

	setInterval(iteration.bind(this), this.timer);
};

var PKSimpleSlider = new PKSimpleSlider('.pksimple-slider', 2000);
// console.log(PKSimpleSlider);

