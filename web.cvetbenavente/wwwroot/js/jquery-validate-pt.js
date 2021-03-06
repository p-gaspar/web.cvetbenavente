﻿$.extend($.validator.messages, {
    required: "Este campo é obrigatório.",
    remote: "Este campo não tem o formato correto.",
    email: "O email introduzido é inválido.",
    url: "O URL introduzido é inválido.",
    date: "A data introduzida é inválida.",
    dateISO: "O formato da data (ISO) está inválido.",
    number: "O valor introduzido não é numérico.",
    digits: "Este campo só pode conter digitos.",
    creditcard: "O valor deste campo não é um número de cartão de crédito válido.",
    equalTo: "O valor introduzido não corresponde ao campo anterior.",
    accept: "A extensão do ficheiro não é aceite.",
    maxlength: jQuery.validator.format("Este campo apenas pode ter até {0} caracteres."),
    minlength: jQuery.validator.format("Este campo requer um mínimo de {0} caracteres."),
    rangelength: jQuery.validator.format("Este campo requer um mínimo de {0} caracteres e um máximo de {1} caracteres."),
    range: jQuery.validator.format("Este campo requer um valor entre {0} e {1}."),
    max: jQuery.validator.format("Este campo tem um valor máximo de {0}."),
    min: jQuery.validator.format("Este campo tem um valor máximo de {0}.")
});