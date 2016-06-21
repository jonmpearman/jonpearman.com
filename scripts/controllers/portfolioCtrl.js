app.controller("portfolioCtrl", function(){
	var self = this;

	self.portfolio = [
		{
			imgSrc: '../../assets/imgs/bighistory.PNG',
			summary: 'General QA and Front-end bug fixes for a large teacher/student resource funded by BGC3 (Bill Gates Catalyst 3). ' 
				+ 'Automated testing scripts using Python and Selenium framework. General bug fixes in the Sitecore CMS using JavaScript, HTML5, and CSS3.',
			linkUrl: "https://www.bighistoryproject.com/home"
		},
		{
			imgSrc: '../../assets/imgs/nintex-home.PNG',
			summary: 'Sitecore site for a fast growing company that produces workflows for SharePoint. QA and Front-end development using manual' 
				+ ' testing/troubleshooting, bug tickets submited by client, JavaScript, HTML5, and CSS3.',
			linkUrl: "http://www.nintex.com/"
		},
		{
			imgSrc: '../../assets/imgs/rise-foundation.PNG',
			summary: 'Designed and created a Squarespace micro-site for a SharePoint product. Built using Squarespace templates and custom CSS3 using LESS preprocessor.',
			linkUrl: "http://risefoundation.perficient.com/"
		}
	];
});