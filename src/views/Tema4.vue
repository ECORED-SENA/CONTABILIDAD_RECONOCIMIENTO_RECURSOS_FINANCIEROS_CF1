<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Soportes contables

    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-4 En la contabilidad, los soportes contables cobran mucha relevancia, ya que son documentos que prueban y evidencian la ocurrencia de los hechos económicos de la empresa, como las facturas de compra de mercancías o facturas de venta de productos de la empresa, asimismo, puede ser una letra que se firmó como respaldo de un crédito ante un acreedor no bancario. Los soportes son los documentos que evidencian y expresan la voluntad de las partes en los acuerdos comerciales o en transacciones financieras y económicas.
      .col-lg-5
        h4.mb-4 Igualmente, las transacciones comerciales deben reconocerse monetariamente, por medio de una serie de documentos contables y documentos no contables, así como de los títulos de valores que intervienen en el hecho económico (Angulo, 2018).

    //p.mb-5 A continuación, puede visualizar los <a class="lnk" style="color: #E85F5B" click="alert('b'); modal1=true"><b>soportes contables</b></a> y cada una de las categorías.
    p.mb-5 A continuación, puede visualizar los 
       a.lnk(@click="modal1 = true" style="color: #E85F5B") <b>soportes contables</b> 
       |  y cada una de las categorías.

    ModalA(:abrir-modal.sync="modal1")
       AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        div(titulo="Documentos contables") 
          p.mb-5 Este tipo de documentos son los que soportan y evidencian los hechos económicos y de transacción comercial en las empresas. Entre los más frecuentes y que son considerados los principales, se encuentran:
          .row
            .col-lg-6
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 1
                  | Factura cambiaria de compra y venta.                                
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 2
                  | Factura electrónica.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 3
                  | Factura equivalente o documento equivalente a la factura de venta.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 4
                  | Comprobante de egreso o comprobante de pago.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 5
                  | Comprobante de ingreso o comprobante de caja.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 6
                  | Comprobante de venta con tarjetas de crédito.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 7
                  | Liquidación de nómina.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 8
                  | Planilla integrada de liquidación de aportes a sistema general de protección
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 9
                  | Declaración de renta, Impuesto al Valor Agregado (IVA), Retención en la Fuente, Impuesto de Industria y Comercio ICA.
            .col-lg-6
              ol.lista-ol--cuadro                          
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 10
                  | Recibo de transferencia de fondos electrónicos.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 11
                  | Recibo de pago interbancario.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 12
                  | Comprobante de pago con tarjeta crédito.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 13
                  | Extractos bancarios.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 14
                  | Consignaciones bancarias.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 15
                  | Recibos de caja menor.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 16
                  | Notas débito y notas crédito.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 17
                  | Notas de contabilidad.
                li 
                  .lista-ol--cuadro__vineta
                    span.texto-negro 18
                  | Comprobante de contabilidad.                
          
        div(titulo="Documentos no contables")
          p.mb-5 Son el conjunto de documentos, regularmente internos, que tienen como finalidad prevenir o informar aspectos de las transacciones comerciales a formalizar. Permiten a la empresa, en su papel de demandante o comprador, tener un control sobre los hechos económicos generados y mercantilmente reconocerlos. Son documentos meramente informativos desde lo legal y no suscitan requisito de registro en la contabilidad, pero sí se pueden parametrizar para llevarlos (Angulo, 2018).
          .row.justify-content-center
            .col-lg-8
              .row.justify-content-center
                .col-lg-4.d-flex
                  div.border-radius-15.p-4(style="background-color:#FCC14A; width:100%")
                    p.mb-1 <b>01.</b>
                    p.mb-4 Documentos de cotización
                    figure
                      img(src='@/assets/curso/tema4/img02.png')
                .col-lg-4.d-flex
                  div.border-radius-15.p-4(style="background-color:#FCFBED; width:100%")
                    p.mb-1 <b>02.</b>
                    p.mb-4 Orden de pedido
                    figure
                      img(src='@/assets/curso/tema4/img03.png')
                .col-lg-4.d-flex
                  div.border-radius-15.p-4(style="background-color:#FCC14A; width:100%")
                    p.mb-1 <b>03.</b>
                    p.mb-4 Remisión
                    figure
                      img(src='@/assets/curso/tema4/img04.png')
        div(titulo="Títulos valores")
          p.mb-5 En Colombia, los títulos valores son documentos de tipo comercial, sujetos a la ley en lo dispuesto por el Código de Comercio y el Código Civil. Se les reconoce como representaciones de activo o patrimonio líquido de las personas naturales o jurídicas. Se les considera cuasidineros desde la definición de la masa monetaria circulante en la economía y el mercado, pues se pueden ceder o cambiar por dinero, a través de endosos. Son herramientas que favorecen y dinamizan recursos monetarios a título de deuda líquida, que permiten compensar bienes, productos, servicios y su valor, o sencillamente posiciones de efectivo en el comercio formal e informal.
          LineaTiempoD.color-acento-contenido.t1-LineaTiempoD.mb-5
            p.text-small(numero="1" titulo="Títulos valores a la orden") Son los documentos de título valor a título de un beneficiario, que, mediante el endoso o firma del último poseedor del título, se transfiere la responsabilidad de pago de una persona a otra, sin interesar quién es el que porte el documento. Se les agrega la expresión “a la orden”. Con la firma del endosante, se transfieren responsabilidades al endosatario. Dos ejemplos son: la letra de cambio y el pagaré.
            p.text-small(numero="2" titulo="Títulos al portador") Son los documentos de título valor donde el reconocimiento se hace a quien posea el título y será a quien se le pague o cambie sobre el valor nominal. Como ejemplo, se tienen los cheques al portador, poco usados por tema de seguridad, pero vigentes y legales aún.
            p.text-small(numero="3" titulo="Títulos valores nominativos") Estos títulos son expedidos a favor de una determinada persona. En el Código de Comercio, se determina que la persona que gira, o transfiere el título, debe realizar la inscripción del tenedor en el registro que lleva el creador del título (Secretaría del Senado, 2020. Art. 648).
    
    .row.justify-content-center.mb-4
      .col-lg-6.d-flex.align-items-center
        div
          p.mb-5 Con el propósito de ampliar sobre los detalles de definición e identificar las características de los principales documentos soportes contables y su diligenciamiento, se recomienda revisar:
          .row.justify-content-start.mb-4.px-0
            .col-lg-5.px-0
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo-Documentos-Soporte-Contable.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto            
                  p <b>Anexo.</b> Documentos de Soporte Contable

              a.anexo.mb-4(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr020.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto            
                  p <b>Enlace web.</b> Títulos valores código de comercio.

            .col-lg-5.px-0
              a.anexo.mb-4(href="https://youtu.be/YChHSEVNgC0" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto            
                  p <b>Enlace web.</b> Video Soportes Contable
              
              a.anexo.mb-4(:href="obtenerLink('/downloads/266_4capitulo_ii_titulos_valores.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto            
                  p <b>Anexo.</b> Sistema general de títulos valores.
      .col-lg-4
        figure.px-0
          img(src='@/assets/curso/tema4/img01.png')
    
    Separador


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
