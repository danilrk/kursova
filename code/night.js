// let nightMode = document.querySelector('#night-mode');
// let mode = false;
// // $(document).ready(function(){
// // 	$('#night-mode').click(function(event){
// // 		$('body').toggleClass('black');
// // 		$('.pt-3').toggleClass('white-text');
// // 		$('footer').toggleClass('footer-header-black');
// // 		$('header').toggleClass('footer-header-black');
// // 		$('.header__link').toggleClass('white-text');
// // 		$('.container-text').toggleClass('white-text');
// // 		$('.page').toggleClass('gradient');
// // 		$('.adress_info').toggleClass('text-gray');
		
		

// // 	});
// // });
// nightMode.addEventListener('click', function(){
// 	if(mode == false){
// 		mode = true;
// 		document.documentElement.setAttribute('data-theme','dark');
// 		localStorage.removeItem('theme','dark')
// 	}else{
// 		mode = false;
// 		document.documentElement.setAttribute('data-theme','light');
// 		localStorage.setItem('theme','dark')
// 	}
// });



function theme(){
	const toggleTheme =document.querySelector('#night-mode');
	let el = document.documentElement
	toggleTheme.addEventListener('click',function(){
		
		if(el.hasAttribute('data-theme')){
			el.removeAttribute('data-theme')
			localStorage.removeItem('theme','dark')
		} else{
			el.setAttribute('data-theme','dark')
			localStorage.setItem('theme','dark')
		}


	})
			if(localStorage.getItem('theme') !== null){
			el.setAttribute('data-theme','dark')
		}
}
theme()