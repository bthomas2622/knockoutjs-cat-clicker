var ViewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Cassius Clay');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.level = ko.computed(function() {
		if (this.clickCount() > 9){
			return ('Lvl: Cat');
		}
		else {
			return ('Lvl: Kitty');
		}
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel)
