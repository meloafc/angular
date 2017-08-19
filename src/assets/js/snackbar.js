function mostrar(mensagem) {
    'use strict';
    var snackbarContainer = document.querySelector('#snackbar');
    var data = { message: mensagem};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
};