var CatModel = function(){
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

	this.people = ko.observableArray([
		{nickname: 'Buzz'},
		{nickname: 'Woody'},
		{nickname: 'The Claw'}
	]);
};

var ViewModel = function () {
	this.currentCat = ko.observable(new CatModel());

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};

};

ko.applyBindings(new ViewModel)