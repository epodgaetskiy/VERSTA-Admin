$(".category-name").click(function(e) {
	e.preventDefault();
	$(".category-name").addClass("active-category");
	$(".subcategory-name").removeClass("active-category");
	$(".form-subcategory").addClass("hidden");
	$(".form-category").removeClass("hidden");

});


$(".subcategory-name").click(function(e) {
	e.preventDefault();
	$(".subcategory-name").addClass("active-category");
	$(".category-name").removeClass("active-category");
	$(".form-category").addClass("hidden");
	$(".form-subcategory").removeClass("hidden");

})

// $(".header-admin .nav-admin-more--go").click(function(e) {
// 	e.preventDefault();
// 	var adminMore = $(".header-admin .nav-admin--more");
// 	if (!(adminMore.hasClass("show-more"))) {
// 		adminMore.addClass("show-more");
// 	} else {
// 		adminMore.removeClass("show-more");
// 	}
	
// })

$(".header-admin .nav-admin-more--go").hover(function(){
	$(".header-admin .nav-admin--more").addClass("show-more");
})

$(".header-admin .nav-admin--more").hover(
	function () {
		$(this).addClass("show-more");
	},
	function () {
		$(this).removeClass("show-more");
	}
)

//setting push header
$(".settings_push").hover(function(e){
	e.preventDefault();

	$(".pushes_block").addClass("active");
})

$(".pushes_block").hover(
	function () {
		$(this).addClass("active");
	},
	function () {
		$(this).removeClass("active");
	}
)

var btnChange = $(".container-admin .content_header-button-service");

btnChange.click(function(e) {
	e.preventDefault();

	if (!($(this).hasClass("active"))) {
		btnChange.removeClass("active");
		$(this).addClass("active");
	} 
})
//Popups
var shadow = $(".shadow");

function clickPopup(button, popup) {
	button.click(function(e) {
		e.preventDefault();

		shadow.toggleClass("active-shadow");
		popup.toggleClass("active");
	})
}

//Remove element
var removePopup = $(".sure-remove");
	closeRemovePopup = $(".sure-slider-close");
	closeRemovePopup2 = $(".sure-slider-button.delete");

clickPopup(closeRemovePopup, removePopup);
clickPopup(closeRemovePopup2, removePopup);	

//remove sliders
var openRemoveSliderPopup = $(".edit-button .icon-close");

clickPopup(openRemoveSliderPopup, removePopup);	

//edit sliders
var editSlider = $(".edit_slider");
	closeEditSlider = $(".modal-edit-slider-close-icon");
	openEditSlider = $(".edit-button .icon-edit");
	
clickPopup(openEditSlider, editSlider);
clickPopup(closeEditSlider, editSlider);

//edit users
var editUsers = $(".edit-users");
	closeEditUsers = $(".modal-edit-users-close-icon");
	openEditUsers = $(".edit-button-users .icon-edit");
	
clickPopup(openEditUsers, editUsers);
clickPopup(closeEditUsers, editUsers);

//remove users
var openRemoveUsersPopup = $(".edit-button-users .icon-close");

clickPopup(openRemoveUsersPopup, removePopup);	

//edit price
var editPrice = $(".edit_price");
	closeEditPrice = $(".modal-edit-price-close-icon");
	openEditPrice = $(".edit-button-price .icon-edit");
	
clickPopup(openEditPrice, editPrice);
clickPopup(closeEditPrice, editPrice);

//remove price
var openRemovePricePopup = $(".edit-button-price .icon-close");

clickPopup(openRemovePricePopup, removePopup);	
//add news
var addNews = $(".add-news");
	newsPopup = $(".news-popup");
	closeNewsPopup = $(".news-popup-close");
	clearNewsContent = $(".link-clear");

clickPopup(addNews, newsPopup);
clickPopup(closeNewsPopup, newsPopup);

clearNewsContent.click(function(e){
	e.preventDefault();

	$(".news-popup form").trigger('reset');

})

//edit news
var editNews = $(".edit-news");
	newsEditPopup = $(".news-edit-popup");
	closeNewsEditPopup = $(".news-edit-popup-close");
	clearNewsEditContent = $(".news-edit-popup .link-clear");

clickPopup(editNews, newsEditPopup);
clickPopup(closeNewsEditPopup, newsEditPopup);

clearNewsEditContent.click(function(e){
	e.preventDefault();

	$(".news-edit-popup form").trigger('reset');

})
//add detail
var addDetail = $(".add-detail");
	detailPopup = $(".detail-add-popup");
	closeDetailPopup = $(".detail-add-popup-close");

clickPopup(addDetail, detailPopup);
clickPopup(closeDetailPopup, detailPopup);

//add detail work input
var addDetailWork = $(".detail-add-popup .record-add--work");
	detailWorkContainer = $(".detail-add-popup .record__work--container");

addDetailWork.click(function(e){
	e.preventDefault();

	var inputAddWork = "<input type='text' class='record__work' placeholder='Запчасть'>";

	detailWorkContainer.append(inputAddWork);

})

//edit detail
var editDetail = $(".edit-detail");
	detailEditPopup = $(".detail-edit-popup");
	closeDetailEditPopup = $(".detail-edit-popup-close");

clickPopup(editDetail, detailEditPopup);
clickPopup(closeDetailEditPopup, detailEditPopup);

//edit detail work input
var editDetailWork = $(".detail-edit-popup .record-add--work");
	detailEditWorkContainer = $(".detail-edit-popup .record__work--container");

editDetailWork.click(function(e){
	e.preventDefault();

	var inputAddWork = "<input type='text' class='record__work' placeholder='Запчасть'>";

	detailEditWorkContainer.append(inputAddWork);

})

//add shop
var addShop = $(".add--item");
	shopPopup = $(".add_shop");
	closeShopPopup = $(".modal-add-shop-close-icon");

clickPopup(addShop, shopPopup);
clickPopup(closeShopPopup, shopPopup);

//add category
var addCategory = $(".add--category");
	categoryPopup = $(".shop-add-category");
	closeCategoryPopup = $(".shop-add-category-close");

clickPopup(addCategory, categoryPopup);
clickPopup(closeCategoryPopup, categoryPopup);

//edit shop
var editShop = $(".edit_shop");
	closeEditShop = $(".modal-edit-shop-close-icon");
	openEditShop = $(".edit-button-shop .icon-edit");
	
clickPopup(openEditShop, editShop);
clickPopup(closeEditShop, editShop);

//remove price
var openRemoveShopPopup = $(".edit-button-shop .icon-close");

clickPopup(openRemoveShopPopup, removePopup);	

//remove feedback
var openRemoveFeedbackPopup = $(".feedback-button.delete");

clickPopup(openRemoveFeedbackPopup, removePopup);	

//add users
var addUsers = $(".add-users");
	usersPopup = $(".users-add-popup");
	closeUsersPopup = $(".modal-users-close-icon");

clickPopup(addUsers, usersPopup);
clickPopup(closeUsersPopup, usersPopup);

//add sliders
var addSliders = $(".add-sliders");
	slidersPopup = $(".add_slider");
	closeSlidersPopup = $(".modal-slider-close-icon");

clickPopup(addSliders, slidersPopup);
clickPopup(closeSlidersPopup, slidersPopup);

//add enroll record
var addRecord = $(".add-enroll-record");
	recordPopup = $(".record-popup");
	closeRecordPopup = $(".record-popup-close");

clickPopup(addRecord, recordPopup);
clickPopup(closeRecordPopup, recordPopup);

//enroll change date
var choiceDate = $(".container-admin .choice-date th");
	choiceDatePopup = $(".record-popup .choice-date th");
    dateLeft = $(".container-admin .date-prev");
    dateRight = $(".container-admin .date-next");
    dateLeftPopup = $(".record-popup .date-prev");
    dateRightPopup = $(".record-popup .date-next");
    numberActive = 0;
    numberActivePopup = 0;

choiceDate.eq(numberActive).addClass("active--date");
changeActive(choiceDate);

choiceDatePopup.eq(numberActivePopup).addClass("active--date");
changeActivePopup(choiceDatePopup);


function changeActive(date) {

	date.click(function(e){

		e.preventDefault();
		if ($(this).hasClass("active--date") === false) {

			date.removeClass("active--date");
			$(this).addClass("active--date");
			numberActive = date.index((this));

		}

	})
}

function changeActivePopup(date) {

	date.click(function(e){

		e.preventDefault();
		if ($(this).hasClass("active--date") === false) {

			date.removeClass("active--date");
			$(this).addClass("active--date");
			numberActivePopup = date.index((this));

		}

	})
}

dateLeft.click(function(e){

	choiceDate.removeClass("active--date");
	numberActive = numberActive - 1;
	choiceDate.eq(numberActive).addClass("activ--date");

})

dateRight.click(function(e){
	
	choiceDate.removeClass("active--date");
	numberActive++;
	choiceDate.eq(numberActive).addClass("active--date");

})

dateLeftPopup.click(function(e){

	choiceDatePopup.removeClass("active--date");
	numberActive = numberActivePopup - 1;
	choiceDatePopup.eq(numberActivePopup).addClass("activ--date");

})

dateRightPopup.click(function(e){
	
	choiceDatePopup.removeClass("active--date");
	numberActivePopup++;
	choiceDatePopup.eq(numberActivePopup).addClass("active--date");

})

//custom select enroll
var selectRecord = $(".choise-select--container .choise-side");
	textSelectRecord = $(".choise-item--text");
	listRecord = $(".choise-select--container .choise-side--down");
	itemListRecord = $(".choise-select--container .choise-side--down li");

selectRecord.click(function(e){
	e.preventDefault();

	listRecord.toggleClass("active--side");
})	

itemListRecord.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectRecord.text(text);
	listRecord.removeClass("active--side");
})

//add record work input
var addRecordWork = $(".record-popup .record-add--work");
	recordWorkContainer = $(".record-popup .record__work--container");

addRecordWork.click(function(e){
	e.preventDefault();

	var inputAddWork = "<input type='text' class='record__work' placeholder='Виды работ'>";

	recordWorkContainer.append(inputAddWork);

})

//custom select shop
var selectCategoryShop = $(".add_shop .choise-category");
	textSelectCategoryShop = $(".add_shop .choise-item--text");
	listCategoryShop = $(".add_shop .choise-category--down");
	itemListCategoryShop = $(".add_shop .choise-category--down li");

selectCategoryShop.click(function(e){
	e.preventDefault();

	listCategoryShop.toggleClass("active--category");
})	

itemListCategoryShop.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectCategoryShop.text(text);
	listCategoryShop.removeClass("active--category");
})

var selectUnCategoryShop = $(".add_shop .choise-un-category");
	textSelectUnCategoryShop = $(".add_shop .choise-item-un--text");
	listUnCategoryShop = $(".add_shop .choise-un-category--down");
	itemListUnCategoryShop = $(".add_shop .choise-un-category--down li");

selectUnCategoryShop.click(function(e){
	e.preventDefault();

	listUnCategoryShop.toggleClass("active--category");
})	

itemListUnCategoryShop.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectUnCategoryShop.text(text);
	listUnCategoryShop.removeClass("active--category");
})

var selectCategoryShop2 = $(".edit_shop .choise-category");
	textSelectCategoryShop2 = $(".edit_shop .choise-item--text");
	listCategoryShop2 = $(".edit_shop .choise-category--down");
	itemListCategoryShop2 = $(".edit_shop .choise-category--down li");

selectCategoryShop2.click(function(e){
	e.preventDefault();

	listCategoryShop2.toggleClass("active--category");
})	

itemListCategoryShop2.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectCategoryShop2.text(text);
	listCategoryShop2.removeClass("active--category");
})

var selectUnCategoryShop2 = $(".edit_shop .choise-un-category");
	textSelectUnCategoryShop2 = $(".edit_shop .choise-item-un--text");
	listUnCategoryShop2 = $(".edit_shop .choise-un-category--down");
	itemListUnCategoryShop2 = $(".edit_shop .choise-un-category--down li");

selectUnCategoryShop2.click(function(e){
	e.preventDefault();

	listUnCategoryShop2.toggleClass("active--category");
})	

itemListUnCategoryShop2.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectUnCategoryShop2.text(text);
	listUnCategoryShop2.removeClass("active--category");
})

var selectCategoryShopN = $(".shop-add-category .choise-category");
	textSelectCategoryShopN = $(".shop-add-category .choise-item--text");
	listCategoryShopN = $(".shop-add-category .choise-category--down");
	itemListCategoryShopN = $(".shop-add-category .choise-category--down li");

selectCategoryShopN.click(function(e){
	e.preventDefault();

	listCategoryShopN.toggleClass("active--category");
})	

itemListCategoryShopN.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectCategoryShopN.text(text);
	listCategoryShopN.removeClass("active--category");
})

//setting choise
var selectSetting = $(".settings .choise-category");
	textSelectSetting = $(".settings .choise-item--text");
	listSetting = $(".settings .choise-category--down");
	itemListSetting = $(".settings .choise-category--down li");

selectSetting.click(function(e){
	e.preventDefault();

	listSetting.toggleClass("active--category");
})	

itemListSetting.click(function(e){
	e.preventDefault();

	var text = $(this).text();

	textSelectSetting.text(text);
	listSetting.removeClass("active--category");
})

//enroll delete podiemnik
var deletePodiemnik = $(".enroll__table .lift-row .icon-close-pod");

clickPopup(deletePodiemnik, removePopup);	

//banner edit link
var editLink = $(".load-link-button");
	editLinkPopup = $(".link-edit-popup");
	closeEditLink = $(".link-edit-popup-close");

clickPopup(editLink, editLinkPopup);	
clickPopup(closeEditLink, editLinkPopup);

//plugin for scroll scroll-pane
// $(".shop-add-category .choise-category--down").jScrollPane();