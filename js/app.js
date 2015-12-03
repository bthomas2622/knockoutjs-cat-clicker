var CatModel = function(data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.level = ko.computed(function() {
		if (this.clickCount() > 9){
			return ('Lvl: Cat');
		}
		else {
			return ('Lvl: Kitty');
		}
	}, this);

	this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function () {
	this.currentCat = ko.observable(new CatModel({
		clickCount: 0,
		name: 'Cassius Clay',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		nicknames: [{nickname: 'Buzz'}, {nickname: 'Woody'}, {nickname: 'The Claw'}]
	}));
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel)