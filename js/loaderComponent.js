var elementId = "loaderComponent";

var waitBoxHtml = '<div id="' + elementId + '" ></div>';

jQuery.fn.extend({
	/**
	* Exibe um loader centralizado na página para indicar que algum processo está sendo executado
	*/
	showLoader: function() {

		if (!$("#" + elementId).length) {
			console.log("Exibindo o loader...");
			$("body").append(waitBoxHtml);
		} else {
			console.log("Loader carregado.");
		}
	},

	/**
	* Remove o loader de indicação de atividade
	*/
	hideLoader: function() {
		if ($("#" + elementId).length) {
			console.log("Fechando o loader...");
			$("#" + elementId).remove();
		} else {
			console.log("Loader inexistente.");
		}
	}
});