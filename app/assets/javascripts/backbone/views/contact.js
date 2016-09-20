BalanceForLife.Views.ContactView = Marionette.ItemView.extend({
  id : 'contact-content',
  template : JST['backbone/templates/contact'],
  events : {
    'click #submit-contact' : 'submitContact',
    'click #dismiss-contact-confirm' : 'hideContactConfirm'
  },
  submitContact : function () {
    var errors = false,
      that = this;

    this.clearErrors();

    // Validar que todos los campos tengan contenido
    this.$('#contact-form input, #contact-form textarea').each(function (i, elem) {
      if (!elem.value) {
        errors = true;
        $(elem).addClass('error');
      };
    });

    // No continuar si hay errores en el formulario
    if (errors) { return; }

    // POST al backend para enviar el correo con los datos del usuario
    jQuery.post('/contact_mail', {
      name : this.$('#contact-name').val(),
      lastname : this.$('#contact-lastname').val(),
      email : this.$('#contact-email').val(),
      message : this.$('#contact-message').val()
    }).done(function () {
      // Mostrar confirmacion y limpiar los campos
      that.showContactConfirm();
      that.$('#contact-form input, #contact-form textarea').val('');
    });
  },
  showContactConfirm : function () {
    this.$('#contact-confirm').show();
  },
  hideContactConfirm : function () {
    this.$('#contact-confirm').hide();
  },
  clearErrors : function () {
    this.$('#contact-form input, #contact-form textarea').removeClass('error');
  }
});