export {WFWModule1, WFWModule2};

function WFWModule1() {
	console.log("======================================================");
	console.log("====================  WFWModule1  ====================");
	console.log("======================================================");
};

WFWModule1.prototype.init = function() {
	console.log("======================================================");
	console.log("=================  WFWModule1 INNO  ==================");
	console.log("======================================================");

	};

function WFWModule2() {
	console.log("======================================================");
	console.log("====================  WFWModule2  ====================");
	console.log("======================================================");
};
WFWModule2.prototype.init = function() {
	console.log("======================================================");
	console.log("=================  WFWModule2 INNO  ==================");
	console.log("======================================================");

	};
